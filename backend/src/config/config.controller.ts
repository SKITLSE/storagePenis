import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Res,
  StreamableFile,
  UseGuards,
} from "@nestjs/common";
import { SkipThrottle } from "@nestjs/throttler";
import { Response } from "express";
import { AdministratorGuard } from "src/auth/guard/isAdmin.guard";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { EmailService } from "src/email/email.service";
import { ConfigService } from "./config.service";
import { AdminConfigDTO } from "./dto/adminConfig.dto";
import { ConfigDTO } from "./dto/config.dto";
import { TestEmailDTO } from "./dto/testEmail.dto";
import UpdateConfigDTO from "./dto/updateConfig.dto";

@Controller("configs")
export class ConfigController {
  constructor(
    private configService: ConfigService,
    private emailService: EmailService
  ) {}

  @Get()
  @SkipThrottle()
  async list() {
    return new ConfigDTO().fromList(await this.configService.list());
  }

  @Get("admin/:category")
  @UseGuards(JwtGuard, AdministratorGuard)
  async getByCategory(@Param("category") category: string) {
    return new AdminConfigDTO().fromList(
      await this.configService.getByCategory(category)
    );
  }

  @Get("admin/categories")
  @UseGuards(JwtGuard, AdministratorGuard)
  async getCategories() {
    return await this.configService.getCategories();
  }

  @Patch("admin")
  @UseGuards(JwtGuard, AdministratorGuard)
  async updateMany(@Body() data: UpdateConfigDTO[]) {
    await this.configService.updateMany(data);
  }

  @Post("admin/finishSetup")
  @UseGuards(JwtGuard, AdministratorGuard)
  async finishSetup() {
    return await this.configService.changeSetupStatus("FINISHED");
  }

  @Post("admin/testEmail")
  @UseGuards(JwtGuard, AdministratorGuard)
  async testEmail(@Body() { email }: TestEmailDTO) {
    await this.emailService.sendTestMail(email);
  }

  @Get("logo")
  @SkipThrottle()
  async getLogo(@Res({ passthrough: true }) res: Response) {
    res.set({
      "Content-Type": "image/png",
      "Content-Disposition": "inline; filename=logo.png",
    });

    return new StreamableFile(this.configService.getLogo());
  }
}
