import { Button, Group, Space, Text, Title } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useEffect, useState } from "react";
import { TbPlus } from "react-icons/tb";
import { FormattedMessage } from "react-intl";
import Meta from "../../components/Meta";
import ManageShareTable from "../../components/admin/shares/ManageShareTable";
import useConfig from "../../hooks/config.hook";
import useTranslate from "../../hooks/useTranslate.hook";
import shareService from "../../services/share.service";
import { Share } from "../../types/share.type";
import toast from "../../utils/toast.util";

const Shares = () => {
  const [shares, setShares] = useState<Share[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const config = useConfig();
  const modals = useModals();
  const t = useTranslate();

  const getShares = () => {
    setIsLoading(true);
    shareService.list().then((shares) => {
      setShares(shares);
      setIsLoading(false);
    });
  };

  const deleteShare = (share: Share) => {
    modals.openConfirmModal({
      title: t("admin.shares.edit.delete.title", {
        id: share.id,
      }),
      children: (
        <Text size="sm">
          <FormattedMessage id="admin.shares.edit.delete.description" />
        </Text>
      ),
      labels: {
        confirm: t("common.button.delete"),
        cancel: t("common.button.cancel"),
      },
      confirmProps: { color: "red" },
      onConfirm: async () => {
        shareService
          .remove(share.id)
          .then(() => setShares(shares.filter((v) => v.id != share.id)))
          .catch(toast.axiosError);
      },
    });
  };

  useEffect(() => {
    getShares();
  }, []);

  return (
    <>
      <Meta title={t("admin.shares.title")} />
      <Group position="apart" align="baseline" mb={20}>
        <Title mb={30} order={3}>
          <FormattedMessage id="admin.shares.title" />
        </Title>
      </Group>

      <ManageShareTable
        shares={shares}
        getShares={getShares}
        deleteShare={deleteShare}
        isLoading={isLoading}
      />
      <Space h="xl" />
    </>
  );
};

export default Shares;
