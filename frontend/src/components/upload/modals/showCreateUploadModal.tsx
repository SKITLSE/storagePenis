import {
  Accordion,
  Alert,
  Button,
  Checkbox,
  Col,
  Grid,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";
import { ModalsContextProps } from "@mantine/modals/lib/context";
import { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { FormattedMessage } from "react-intl";
import * as yup from "yup";
import useTranslate, {
  translateOutsideContext,
} from "../../../hooks/useTranslate.hook";
import shareService from "../../../services/share.service";
import { CreateShare } from "../../../types/share.type";
import { getExpirationPreview } from "../../../utils/date.util";

const showCreateUploadModal = (
  modals: ModalsContextProps,
  options: {
    isUserSignedIn: boolean;
    isReverseShare: boolean;
    appUrl: string;
    allowUnauthenticatedShares: boolean;
    enableEmailRecepients: boolean;
  },
  uploadCallback: (createShare: CreateShare) => void
) => {
  const t = translateOutsideContext();

  return modals.openModal({
    title: t("upload.modal.title"),
    children: (
      <CreateUploadModalBody
        options={options}
        uploadCallback={uploadCallback}
      />
    ),
  });
};

const CreateUploadModalBody = ({
  uploadCallback,
  options,
}: {
  uploadCallback: (createShare: CreateShare) => void;
  options: {
    isUserSignedIn: boolean;
    isReverseShare: boolean;
    appUrl: string;
    allowUnauthenticatedShares: boolean;
    enableEmailRecepients: boolean;
  };
}) => {
  const modals = useModals();
  const t = useTranslate();

  const generatedLink = Buffer.from(Math.random().toString(), "utf8")
    .toString("base64")
    .substr(10, 7);

  const [showNotSignedInAlert, setShowNotSignedInAlert] = useState(true);

  const validationSchema = yup.object().shape({
    link: yup
      .string()
      .required()
      .min(3)
      .max(50)
      .matches(new RegExp("^[a-zA-Z0-9_-]*$"), {
        message: "Can only contain letters, numbers, underscores and hyphens",
      }),
    password: yup.string().min(3).max(30),
    maxViews: yup.number().min(1),
  });
  const form = useForm({
    initialValues: {
      link: generatedLink,
      recipients: [] as string[],
      password: undefined,
      maxViews: undefined,
      description: undefined,
      expiration_num: 1,
      expiration_unit: "-days",
      never_expires: false,
    },
    validate: yupResolver(validationSchema),
  });
  return (
    <>
      {showNotSignedInAlert && !options.isUserSignedIn && (
        <Alert
          withCloseButton
          onClose={() => setShowNotSignedInAlert(false)}
          icon={<TbAlertCircle size={16} />}
          title={t("upload.modal.not-signed-in")}
          color="yellow"
        >
          <FormattedMessage id="upload.modal.not-signed-in-description" />
        </Alert>
      )}
      <form
        onSubmit={form.onSubmit(async (values) => {
          if (!(await shareService.isShareIdAvailable(values.link))) {
            form.setFieldError("link", t("upload.modal.link.error.taken"));
          } else {
            const expiration = form.values.never_expires
              ? t("upload.modal.expires.never")
              : form.values.expiration_num + form.values.expiration_unit;
            uploadCallback({
              id: values.link,
              expiration: expiration,
              recipients: values.recipients,
              description: values.description,
              security: {
                password: values.password,
                maxViews: values.maxViews,
              },
            });
            modals.closeAll();
          }
        })}
      >
        <Stack align="stretch">
          <Grid align={form.errors.link ? "center" : "flex-end"}>
            <Col xs={9}>
              <TextInput
                variant="filled"
                label="Link"
                placeholder="myAwesomeShare"
                {...form.getInputProps("link")}
              />
            </Col>
            <Col xs={3}>
              <Button
                variant="outline"
                onClick={() =>
                  form.setFieldValue(
                    "link",
                    Buffer.from(Math.random().toString(), "utf8")
                      .toString("base64")
                      .substr(10, 7)
                  )
                }
              >
                <FormattedMessage id="common.button.generate" />
              </Button>
            </Col>
          </Grid>

          <Text
            italic
            size="xs"
            sx={(theme) => ({
              color: theme.colors.gray[6],
            })}
          >
            {options.appUrl}/share/
            {form.values.link == "" ? "myAwesomeShare" : form.values.link}
          </Text>
          {!options.isReverseShare && (
            <>
              <Grid align={form.errors.link ? "center" : "flex-end"}>
                <Col xs={6}>
                  <Select
                    disabled={form.values.never_expires}
                    {...form.getInputProps("expiration_unit")}
                    data={[
                      // Set the label to singular if the number is 1, else plural
                      {
                        value: "-minutes",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.minute-singular")
                            : t("upload.modal.expires.minute-plural"),
                      },
                      {
                        value: "-hours",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.hour-singular")
                            : t("upload.modal.expires.hour-plural"),
                      },
                      {
                        value: "-days",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.day-singular")
                            : t("upload.modal.expires.day-plural"),
                      },
                      {
                        value: "-weeks",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.week-singular")
                            : t("upload.modal.expires.week-plural"),
                      },
                      {
                        value: "-months",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.month-singular")
                            : t("upload.modal.expires.month-plural"),
                      },
                      {
                        value: "-years",
                        label:
                          form.values.expiration_num == 1
                            ? t("upload.modal.expires.year-singular")
                            : t("upload.modal.expires.year-plural"),
                      },
                    ]}
                  />
                </Col>
              </Grid>
              <Checkbox
                label={t("upload.modal.expires.never-long")}
                {...form.getInputProps("never_expires")}
              />
              <Text
                italic
                size="xs"
                sx={(theme) => ({
                  color: theme.colors.gray[6],
                })}
              >
                {getExpirationPreview("share", form)}
              </Text>
            </>
          )}
          <Accordion>
            <Accordion.Item value="description" sx={{ borderBottom: "none" }}>
              <Accordion.Control>Description</Accordion.Control>
              <Accordion.Panel>
                <Stack align="stretch">
                  <Textarea
                    variant="filled"
                    placeholder="Note for the recepients"
                    {...form.getInputProps("description")}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
            {options.enableEmailRecepients && (
              <Accordion.Item value="recipients" sx={{ borderBottom: "none" }}>
                <Accordion.Control>Email recipients</Accordion.Control>
                <Accordion.Panel>
                  <MultiSelect
                    data={form.values.recipients}
                    placeholder="Enter email recipients"
                    searchable
                    {...form.getInputProps("recipients")}
                    creatable
                    getCreateLabel={(query) => `+ ${query}`}
                    onCreate={(query) => {
                      if (!query.match(/^\S+@\S+\.\S+$/)) {
                        form.setFieldError(
                          "recipients",
                          "Invalid email address"
                        );
                      } else {
                        form.setFieldError("recipients", null);
                        form.setFieldValue("recipients", [
                          ...form.values.recipients,
                          query,
                        ]);
                        return query;
                      }
                    }}
                  />
                </Accordion.Panel>
              </Accordion.Item>
            )}

            <Accordion.Item value="security" sx={{ borderBottom: "none" }}>
              <Accordion.Control>Security options</Accordion.Control>
              <Accordion.Panel>
                <Stack align="stretch">
                  <PasswordInput
                    variant="filled"
                    placeholder="No password"
                    label="Password protection"
                    {...form.getInputProps("password")}
                  />
                  <NumberInput
                    min={1}
                    type="number"
                    variant="filled"
                    placeholder="No limit"
                    label="Maximal views"
                    {...form.getInputProps("maxViews")}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Button type="submit">Share</Button>
        </Stack>
      </form>
    </>
  );
};

export default showCreateUploadModal;
