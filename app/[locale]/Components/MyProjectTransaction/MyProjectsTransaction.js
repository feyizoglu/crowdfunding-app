import React from "react";
import MyProjectsAccordion from "../MyProjectAccordion/MyProjectsAccordion";
import MyProjectsTransactionDetails from "../MyProjectTransactionDetails/MyProjectsTransactionDetails";
import { useTranslations } from "next-intl";

const MyProjectsTransaction = ({ project }) => {
  const t = useTranslations("MyProjectTransaction");
  return (
    <div className="mb-10 mt-10 lg:mt-0">
      <MyProjectsAccordion
        title={t("Transaction history")}
        isOpenDefault={true}
        component={<MyProjectsTransactionDetails project={project} />}
      />
    </div>
  );
};

export default MyProjectsTransaction;
