import React from "react";
import MyProjectsAccordion from "../MyProjectAccordion/MyProjectsAccordion";
import MyProjectsStatisticsDetails from "../MyProjectStatisticsDetails/MyProjectsStatisticsDetails";
import { useTranslations } from "next-intl";

const MyProjectsStatistics = ({ project }) => {
  const t = useTranslations("MyProjectStatistics");
  return (
    <div>
      <MyProjectsAccordion
        project={project}
        title={t("Statistics")}
        isOpenDefault={false}
        component={<MyProjectsStatisticsDetails project={project} />}
      />
    </div>
  );
};

export default MyProjectsStatistics;
