import React from "react";
import MyProjectsAccordion from "../MyProjectAccordion/MyProjectsAccordion";
import MyProjectsStatisticsDetails from "../MyProjectStatisticsDetails/MyProjectsStatisticsDetails";

const MyProjectsStatistics = ({ project }) => {
  return (
    <div>
      <MyProjectsAccordion
        project={project}
        title="Statistics"
        isOpenDefault={false}
        component={<MyProjectsStatisticsDetails project={project} />}
      />
    </div>
  );
};

export default MyProjectsStatistics;
