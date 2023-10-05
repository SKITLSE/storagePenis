import { SiGithub, SiGoogle, SiOpenid } from "react-icons/si";
import React from "react";
import toast from "./toast.util";

const getOAuthUrl = (appUrl: string, provider: string, isRevoke = false) => {
  return appUrl + '/api/oauth/' + provider + (isRevoke ? '/revoke' : '');
}

const getOAuthIcon = (provider: string) => {
  return {
    'google': <SiGoogle />,
    'github': <SiGithub />,
    'oidc': <SiOpenid />,
  }[provider];
}

const revokeOAuth = (_appUrl: string, _provider: string) => {
  toast.error("Not implemented yet");
}

export {
  getOAuthUrl,
  getOAuthIcon,
  revokeOAuth,
}