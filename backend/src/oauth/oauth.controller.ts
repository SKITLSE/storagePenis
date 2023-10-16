import { BadRequestException, Controller, Get, NotFoundException, Query, Req, Res, UseGuards } from '@nestjs/common';
import { OAuthService } from "./oauth.service";
import { Request, Response } from "express";
import { GithubDto } from "./dto/github.dto";
import { JwtGuard } from "../auth/guard/jwt.guard";
import { ConfigService } from "../config/config.service";
import { GoogleOAuthGuard } from "./guard/google.guard";
import { nanoid } from "nanoid";
import { AuthController } from "../auth/auth.controller";
import { GetUser } from "../auth/decorator/getUser.decorator";
import { User } from "@prisma/client";

@Controller('oauth')
export class OAuthController {
  constructor(
    private oauthService: OAuthService,
    private config: ConfigService,
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

  @Get("github")
  github(@Res({ passthrough: true }) response: Response, @Query('link') link: boolean) {
    const state = nanoid(10);
    response.cookie("github_oauth_state", state, { sameSite: "strict" });
    const url = "https://github.com/login/oauth/authorize?" + new URLSearchParams({
      client_id: this.config.get("oauth.github-clientId"),
      redirect_uri: this.config.get("general.appUrl") + "/api/oauth/github/callback" + (link ? "/link" : ""),
      state: state,
      scope: link ? "" : "user:email",    // linking account doesn't need email
    }).toString();
    response.redirect(url);
    // return `<script type='text/javascript'>location.href='${url}';</script>`;
  }

  @Get("github/callback")
  async githubCallback(@Query() query: GithubDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const { state, code } = query;
    this.oauthService.validate("github", request.cookies, state);

    const token = await this.oauthService.github(code);
    AuthController.addTokensToResponse(
      response,
      token.refreshToken,
      token.accessToken,
    );
    response.redirect(this.config.get("general.appUrl"));
  }

  @Get("github/callback/link")
  @UseGuards(JwtGuard)
  async githubLink(@Req() request: Request,
                   @Res({ passthrough: true }) response: Response,
                   @Query() query: GithubDto,
                   @GetUser() user: User) {
    const { state, code } = query;
    this.oauthService.validate("github", request.cookies, state);

    try {
      await this.oauthService.githubLink(code, user);
      response.redirect(this.config.get("general.appUrl") + '/account');
    } catch (e) {
      // TODO error page
      throw e;
    }
  }

  @Get("google")
  @UseGuards(GoogleOAuthGuard)
  async google() {
  }

  @Get("google/callback")
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const user = request.user as OAuthSignInDto;
    const token = await this.oauthService.signIn(user);
    AuthController.addTokensToResponse(
      response,
      token.refreshToken,
      token.accessToken,
    );
    response.redirect(this.config.get("general.appUrl"));
  }
}
