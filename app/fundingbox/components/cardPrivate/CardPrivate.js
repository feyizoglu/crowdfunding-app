import React from "react";
import CardDate from "./cardDate/CardDate";
import CardCvv from "./cardCvv/CardCvv";
import Alert from "@/app/Components/SignUpAlert/Alert";

const CardPrivate = () => {
  return (
    <div className="flex items-center justify-between ">
      <CardDate />
      <CardCvv />
    </div>
  );
};

export default CardPrivate;
