import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  LoadingOverlay,
  Stack,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbInfoCircle, TbLink, TbPlus, TbTrash } from "react-icons/tb";
import showShareLinkModal from "../../components/account/showShareLinkModal";
import Meta from "../../components/Meta";
import showCreateReverseShareModal from "../../components/share/modals/showCreateReverseShareModal";
import useConfig from "../../hooks/config.hook";
import useUser from "../../hooks/user.hook";
import shareService from "../../services/share.service";
import { MyReverseShare } from "../../types/share.type";
import { byteToHumanSizeString } from "../../utils/fileSize.util";
import toast from "../../utils/toast.util";

const MyShares = () => {
  const modals = useModals();
  const clipboard = useClipboard();
  const router = useRouter();
  const config = useConfig();

  const { user } = useUser();

  const [reverseShares, setReverseShares] = useState<MyReverseShare[]>();

  const getReverseShares = () => {
    shareService
      .getMyReverseShares()
      .then((shares) => setReverseShares(shares));
  };

  useEffect(() => {
    getReverseShares();
  }, []);

  if (!user) {
    router.replace("/");
  } else {
    if (!reverseShares) return <LoadingOverlay visible />;
    return (
      <>
        <Meta title="My shares" />
        <Group position="apart" align="baseline" mb={20}>
          <Group align="center" spacing={3} mb={30}>
            <Title order={3}>My reverse shares</Title>
            <Tooltip
              position="bottom"
              multiline
              width={220}
              label="A reverse share allows you to generate a unique URL for a single-use share for an external user."
              events={{ hover: true, focus: false, touch: true }}
            >
              <ActionIcon>
                <TbInfoCircle />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Button
            onClick={() =>
              showCreateReverseShareModal(
                modals,
                config.get("SMTP_ENABLED"),
                getReverseShares
              )
            }
            leftIcon={<TbPlus size={20} />}
          >
            Create
          </Button>
        </Group>
        {reverseShares.length == 0 ? (
          <Center style={{ height: "70vh" }}>
            <Stack align="center" spacing={10}>
              <Title order={3}>It's empty here 👀</Title>
              <Text>You don't have any reverse shares.</Text>
            </Stack>
          </Center>
        ) : (
          <Box sx={{ display: "block", overflowX: "auto" }}>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Visitors</th>
                  <th>Max share size</th>
                  <th>Expires at</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reverseShares.map((reverseShare) => (
                  <tr key={reverseShare.id}>
                    <td>
                      {reverseShare.share ? (
                        reverseShare.share?.id
                      ) : (
                        <Text color="dimmed">No share created yet</Text>
                      )}
                    </td>
                    <td>{reverseShare.share?.views ?? "0"}</td>
                    <td>
                      {byteToHumanSizeString(
                        parseInt(reverseShare.maxShareSize)
                      )}
                    </td>
                    <td>
                      {moment(reverseShare.shareExpiration).unix() === 0
                        ? "Never"
                        : moment(reverseShare.shareExpiration).format("LLL")}
                    </td>
                    <td>
                      <Group position="right">
                        {reverseShare.share && (
                          <ActionIcon
                            color="victoria"
                            variant="light"
                            size={25}
                            onClick={() => {
                              if (window.isSecureContext) {
                                clipboard.copy(
                                  `${config.get("APP_URL")}/share/${
                                    reverseShare.share!.id
                                  }`
                                );
                                toast.success(
                                  "The share link was copied to the keyboard."
                                );
                              } else {
                                showShareLinkModal(
                                  modals,
                                  reverseShare.share!.id,
                                  config.get("APP_URL")
                                );
                              }
                            }}
                          >
                            <TbLink />
                          </ActionIcon>
                        )}
                        <ActionIcon
                          color="red"
                          variant="light"
                          size={25}
                          onClick={() => {
                            modals.openConfirmModal({
                              title: `Delete reverse share`,
                              children: (
                                <Text size="sm">
                                  Do you really want to delete this reverse
                                  share? If you do, the share will be deleted as
                                  well.
                                </Text>
                              ),
                              confirmProps: {
                                color: "red",
                              },
                              labels: { confirm: "Confirm", cancel: "Cancel" },
                              onConfirm: () => {
                                shareService.removeReverseShare(
                                  reverseShare.id
                                );
                                setReverseShares(
                                  reverseShares.filter(
                                    (item) => item.id !== reverseShare.id
                                  )
                                );
                              },
                            });
                          }}
                        >
                          <TbTrash />
                        </ActionIcon>
                      </Group>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        )}
      </>
    );
  }
};

export default MyShares;
