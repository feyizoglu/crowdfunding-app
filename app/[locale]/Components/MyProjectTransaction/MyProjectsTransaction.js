import React from "react";
import MyProjectsAccordion from "../MyProjectAccordion/MyProjectsAccordion";
import MyProjectsTransactionDetails from "../MyProjectTransactionDetails/MyProjectsTransactionDetails";

const MyProjectsTransaction = ({ project }) => {
  return (
    <div className="mb-10 mt-10 lg:mt-0">
      <MyProjectsAccordion
        project={project}
        title="Transaction history"
        isOpenDefault={true}
        component={<MyProjectsTransactionDetails project={project} />}
      />
    </div>
  );
};

export default MyProjectsTransaction;
