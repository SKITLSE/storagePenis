import {
  Button,
  Center,
  Col,
  Grid,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";
import { ModalsContextProps } from "@mantine/modals/lib/context";
import { showNotification } from "@mantine/notifications";
import { TbCheck } from "react-icons/tb";
import * as yup from "yup";
import useUser from "../../hooks/user.hook";
import authService from "../../services/auth.service";

const showEnableTotpModal = (
  modals: ModalsContextProps,
  refreshUser: () => {},
  options: {
    qrCode: string;
    secret: string;
    password: string;
  }
) => {
  return modals.openModal({
    title: <Title order={4}>Enable TOTP</Title>,
    children: (
      <CreateEnableTotpModal options={options} refreshUser={refreshUser} />
    ),
  });
};

const CreateEnableTotpModal = ({
  options,
  refreshUser,
}: {
  options: {
    qrCode: string;
    secret: string;
    password: string;
  };
  refreshUser: () => {};
}) => {
  const modals = useModals();
  const user = useUser();

  console.log(user.user);

  const validationSchema = yup.object().shape({
    code: yup
      .string()
      .min(6)
      .max(6)
      .required()
      .matches(/^[0-9]+$/, { message: "Code must be a number" }),
  });

  const form = useForm({
    initialValues: {
      code: "",
    },
    validate: yupResolver(validationSchema),
  });

  return (
    <div>
      <Center>
        <Stack>
          <Text>Step 1: Add your authenticator</Text>
          <Image src={options.qrCode} alt="QR Code" />

          <Center>
            <span>OR</span>
          </Center>

          <Tooltip label="Click to copy">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(options.secret);
                showNotification({
                  icon: <TbCheck />,
                  color: "green",
                  radius: "md",
                  title: "Success",
                  message: "Copied to clipboard",
                });
              }}
            >
              {options.secret}
            </Button>
          </Tooltip>
          <Center>
            <Text fz="xs">Enter manually</Text>
          </Center>

          <Text>Step 2: Validate your code</Text>

          <form
            onSubmit={form.onSubmit(async (values) => {
              const success = await authService.verifyTOTP(
                values.code,
                options.password
              );
              if (!success) {
                showNotification({
                  icon: <TbCheck />,
                  color: "red",
                  radius: "md",
                  title: "Error",
                  message: "Invalid code",
                });
              } else {
                showNotification({
                  icon: <TbCheck />,
                  color: "green",
                  radius: "md",
                  title: "Success",
                  message: "Successfully enabled TOTP",
                });
                modals.closeAll();
                refreshUser();
              }
            })}
          >
            <Grid align="flex-end">
              <Col xs={9}>
                <TextInput
                  variant="filled"
                  label="Code"
                  placeholder="******"
                  {...form.getInputProps("code")}
                />
              </Col>
              <Col xs={3}>
                <Button variant="outline" type="submit">
                  Verify
                </Button>
              </Col>
            </Grid>
          </form>
        </Stack>
      </Center>
    </div>
  );
};

export default showEnableTotpModal;
