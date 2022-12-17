import {
  Anchor,
  Button,
  Container,
  NumberInput,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import Link from "next/link";
import * as yup from "yup";
import useConfig from "../../hooks/config.hook";
import authService from "../../services/auth.service";
import toast from "../../utils/toast.util";
import { setCookies } from "cookies-next";
import React from "react";
import { showNotification } from "@mantine/notifications";
import { TbCheck, TbInfoCircle } from "react-icons/tb";

const SignInForm = () => {
  const config = useConfig();
  const [showTotp, setShowTotp] = React.useState(false);
  const [loginToken, setLoginToken] = React.useState("");

  const validationSchema = yup.object().shape({
    emailOrUsername: yup.string().required(),
    password: yup.string().min(8).required(),
    totp: yup.string().when("totpRequired", {
      is: true,
      then: yup.string().min(6).max(6).required(),
      otherwise: yup.string(),
    }),
  });

  const form = useForm({
    initialValues: {
      emailOrUsername: "",
      password: "",
      totp: "",
    },
    validate: yupResolver(validationSchema),
  });

  const signIn = (email: string, password: string) => {
    authService
      .signIn(email, password)
      .then((response) => {
        if (response.data["loginToken"]) {
          // Prompt the user to enter their totp code
          setShowTotp(true);
          showNotification({
            icon: <TbInfoCircle />,
            color: "blue",
            radius: "md",
            title: "Two-factor authentication required",
            message: "Please enter your two-factor authentication code",
          });
          setLoginToken(response.data["loginToken"]);
        } else {
          setCookies("access_token", response.data.accessToken);
          setCookies("refresh_token", response.data.refreshToken);
          window.location.replace("/");
        }
      })
      .catch(toast.axiosError);
  };

  const signInTotp = (email: string, password: string, totp: string) => {
    authService
      .signInTotp(email, password, totp, loginToken)
      .then((response) => {
        setCookies("access_token", response.data.accessToken);
        setCookies("refresh_token", response.data.refreshToken);
        window.location.replace("/");
      })
      .catch((error) => {
        if (error?.response?.data?.message == "Login token expired") {
          toast.error("Login token expired");
          // Refresh the page to start over
          window.location.reload();
        }

        toast.axiosError(error);
        form.setValues({ totp: "" });
      });
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back
      </Title>
      {config.get("ALLOW_REGISTRATION") && (
        <Text color="dimmed" size="sm" align="center" mt={5}>
          You don't have an account yet?{" "}
          <Anchor component={Link} href={"signUp"} size="sm">
            {"Sign up"}
          </Anchor>
        </Text>
      )}
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            if (showTotp)
              signInTotp(values.emailOrUsername, values.password, values.totp);
            else signIn(values.emailOrUsername, values.password);
          })}
        >
          <TextInput
            label="Email or username"
            placeholder="you@email.com"
            {...form.getInputProps("emailOrUsername")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps("password")}
          />
          {showTotp && (
            <TextInput
              variant="filled"
              label="Code"
              placeholder="******"
              mt="md"
              {...form.getInputProps("totp")}
            />
          )}
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInForm;
