import React from "react";
import MyProjectsAccordion from "../MyProjectAccordion/MyProjectsAccordion";
import MyProjectsTransactionDetails from "../MyProjectTransactionDetails/MyProjectsTransactionDetails";

const MyProjectsTransaction = ({ project }) => {
  return (
    <div className="mb-10 mt-10 lg:mt-0">
      <MyProjectsAccordion
        title="Transaction history"
        isOpenDefault={true}
        component={<MyProjectsTransactionDetails />}
      />
    </div>
  );
};

export default MyProjectsTransaction;
