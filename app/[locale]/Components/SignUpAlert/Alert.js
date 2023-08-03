import { BiErrorCircle } from "react-icons/bi";

const Alert = (props) => {
  return (
    <div className="flex items-center justify-center px-2 py-2  mb-1 bg-lightRedColor rounded-sm  ">
      <BiErrorCircle className="text-darkRedColor" />
      <p className="text-sm pl-1 text-darkRedColor">{props.message}</p>
    </div>
  );
};

export default Alert;
