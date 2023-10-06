import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { ConfigService } from "../config/config.service";
import { AuthService } from "../auth/auth.service";
import { User } from "@prisma/client";
import { nanoid } from "nanoid";
import { OAuthRequestService } from "./oauthRequest.service";


@Injectable()
export class OAuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private auth: AuthService,
    private request: OAuthRequestService,
    @Inject("OAUTH_PLATFORMS") private platforms: string[],
  ) {
  }

  validate(provider: string, cookies: Record<string, string>, state: string) {
    if (!this.config.get(`oauth.${provider}-enabled`)) {
      throw new NotFoundException();
    }

    if (cookies[`${provider}_oauth_state`] !== state) {
      throw new BadRequestException("Invalid state");
    }
  }

  available(): string[] {
    return this.platforms
      .map(platform => [platform, this.config.get(`oauth.${platform}-enabled`)])
      .filter(([_, enabled]) => enabled)
      .map(([platform, _]) => platform);
  }

  async status(user: User) {
    const oauthUsers = await this.prisma.oAuthUser.findMany({
      select: {
        provider: true,
        providerUsername: true,
      },
      where: {
        userId: user.id,
      },
    });
    return Object.fromEntries(oauthUsers.map(u => [u.provider, u]));
  }

  async signIn(user: OAuthSignInDto) {
    const oauthUser = await this.prisma.oAuthUser.findFirst({
      where: {
        provider: user.provider,
        providerUserId: user.providerId,
      },
      include: {
        user: true
      },
    });
    if (oauthUser) {
      return this.auth.generateToken(oauthUser.user, true);
    }

    return this.signUp(user);
  }

  private async signUp(user: OAuthSignInDto) {
    // register
    if (!this.config.get("oauth.allowRegistration")) {
      throw new UnauthorizedException("No such user");
    }

    if (!user.email) {
      throw new BadRequestException("No email found");
    }

    const existingUser: User = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      }
    });

    if (existingUser) {
      await this.prisma.oAuthUser.create({
        data: {
          provider: user.provider,
          providerUserId: user.providerId.toString(),
          providerUsername: user.providerUsername,
          userId: existingUser.id,
        },
      });
      return this.auth.generateToken(existingUser, true);
    }

    // TODO user registered by oauth will hava a random password and username
    const result = await this.auth.signUp({
      email: user.email,
      username: nanoid().replaceAll("-", ''),
      password: nanoid(),
    });

    await this.prisma.oAuthUser.create({
      data: {
        provider: user.provider,
        providerUserId: user.providerId.toString(),
        providerUsername: user.providerUsername,
        userId: result.user.id,
      },
    });

    return result;
  }

  async link(userId: string, provider: string, providerUserId: string, providerUsername: string) {
    const oauthUser = await this.prisma.oAuthUser.findFirst({
      where: {
        provider,
        providerUserId,
      }
    });
    if (oauthUser) {
      throw new BadRequestException(`This ${provider} account has been linked to another account`);
    }

    await this.prisma.oAuthUser.create({
      data: {
        userId,
        provider,
        providerUsername,
        providerUserId,
      }
    });
  }

  async github(code: string) {
    const ghToken = await this.request.getGitHubToken(code);
    const ghUser = await this.request.getGitHubUser(ghToken);
    if (!ghToken.scope.includes("user:email")) {
      throw new BadRequestException("No email permission granted");
    }
    const email = await this.request.getGitHubEmail(ghToken);
    return this.signIn({
      provider: "github",
      providerId: ghUser.id.toString(),
      providerUsername: ghUser.login,
      email,
    });
  }

  async githubLink(code: string, user: User) {
    const ghToken = await this.request.getGitHubToken(code);
    const ghUser = await this.request.getGitHubUser(ghToken);
    await this.link(user.id, 'github', ghUser.id.toString(), ghUser.name);
  }
}
