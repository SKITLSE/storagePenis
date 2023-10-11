import { Controller, Get, NotFoundException, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { OAuthService } from "./oauth.service";
import { Request, Response } from "express";
import { JwtGuard } from "../auth/guard/jwt.guard";
import { ConfigService } from "../config/config.service";
import { nanoid } from "nanoid";
import { GetUser } from "../auth/decorator/getUser.decorator";
import { User } from "@prisma/client";
import { OidcService } from "./oidc.service";
import { OidcCallbackDto } from "./dto/oidcCallback.dto";
import { OAuthGuard } from "./guard/oauth.guard";
import { OAuthProvider } from "./decorator/oauthProvider.decorator";
import { AuthService } from "../auth/auth.service";

@Controller('oauth')
export class OAuthController {
  constructor(
    private authService: AuthService,
    private oauthService: OAuthService,
    private config: ConfigService,
    private oidcService: OidcService,
  ) {
  }

  @Get("available")
  available(@Res({ passthrough: true }) response: Response, @Req() request: Request) {
    return this.oauthService.available();
  }

  @Get("status")
  @UseGuards(JwtGuard)
  async status(@GetUser() user: User) {
    return this.oauthService.status(user);
  }

  @Post("unlink/:provider")
  @UseGuards(JwtGuard)
  unlink(@GetUser() user: User, @Param("provider") provider: string) {
    if (!this.oauthService.available().includes(provider)) {
      throw new NotFoundException("No such provider.");
    }
    return this.oauthService.unlink(user, provider);
  }

  // @Get("github")
  // github(@Res({ passthrough: true }) response: Response, @Query('link') link: boolean) {
  //   const state = nanoid(10);
  //   response.cookie("github_oauth_state", state, { sameSite: "strict" });
  //   const url = "https://github.com/login/oauth/authorize?" + new URLSearchParams({
  //     client_id: this.config.get("oauth.github-clientId"),
  //     redirect_uri: this.config.get("general.appUrl") + "/api/oauth/github/callback" + (link ? "/link" : ""),
  //     state: state,
  //     scope: link ? "" : "user:email",    // linking account doesn't need email
  //   }).toString();
  //   response.redirect(url);
  //   // return `<script type='text/javascript'>location.href='${url}';</script>`;
  // }
  //
  // @Get("github/callback")
  // async githubCallback(@Query() query: GithubDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
  //   const { state, code } = query;
  //   this.oauthService.validate("github", request.cookies, state);
  //
  //   const token = await this.oauthService.github(code);
  //   AuthController.addTokensToResponse(
  //     response,
  //     token.refreshToken,
  //     token.accessToken,
  //   );
  //   response.redirect(this.config.get("general.appUrl"));
  // }
  //
  // @Get("github/callback/link")
  // @UseGuards(JwtGuard)
  // async githubLink(@Req() request: Request,
  //                  @Res({ passthrough: true }) response: Response,
  //                  @Query() query: GithubDto,
  //                  @GetUser() user: User) {
  //   const { state, code } = query;
  //   this.oauthService.validate("github", request.cookies, state);
  //
  //   try {
  //     await this.oauthService.githubLink(code, user);
  //     response.redirect(this.config.get("general.appUrl") + '/account');
  //   } catch (e) {
  //     // TODO error page
  //     throw e;
  //   }
  // }
  //
  // @Get("google")
  // google() {
  // }
  //
  // @Get("google/callback")
  // async googleCallback(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
  //   const user = request.user as OAuthSignInDto;
  //   const token = await this.oauthService.signIn(user);
  //   AuthController.addTokensToResponse(
  //     response,
  //     token.refreshToken,
  //     token.accessToken,
  //   );
  //   response.redirect(this.config.get("general.appUrl"));
  // }

  @Get("oidc")
  @OAuthProvider("oidc", "auth")
  @UseGuards(OAuthGuard)
  async oidc(@Res({ passthrough: true }) response: Response) {
    const state = nanoid(16);
    const url = await this.oidcService.getAuthEndpoint(state);
    response.cookie("oauth_oidc_state", state, { sameSite: "lax" });
    response.redirect(url);
  }

  @Get("oidc/callback")
  @OAuthProvider("oidc", "callback")
  @UseGuards(OAuthGuard)
  async oidcCallback(@Query() query: OidcCallbackDto,
                     @Req() request: Request,
                     @Res({ passthrough: true }) response: Response) {
    const user = await this.oidcService.getUserInfo(query);
    const id = await this.authService.getIdIfLogin(request);

    if (id) {
      await this.oauthService.link(id, "oidc", user.providerId, user.providerUsername);
      response.redirect(this.config.get("general.appUrl") + '/account');
    } else {
      const token = await this.oauthService.signIn(user);
      // TODO totp
      this.authService.addTokensToResponse(response, token.refreshToken, token.accessToken);
      response.redirect(this.config.get("general.appUrl"));
    }
  }
}
