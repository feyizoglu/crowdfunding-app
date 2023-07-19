import Image from "next/image";

const MyProjectsDonorCard = ({ donor }) => {
  return (
    <>
      <div className="text-blackColor flex items-center space-x-4 cursor-pointer p-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-blackColor hover:text-whiteColor ">
        <div className="w-10 h-10">
          <Image
            src={donor.avatar}
            alt={donor.donorName}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="grow w-3/5">
          <h4 className="text-[18px] font-semibold">{donor.donorName}</h4>
          <p className="text-[14px] font-medium">{donor.comment}</p>
        </div>
        <p className="text-[18px] font-semibold w-1/5">${donor.amount}</p>
      </div>
    </>
  );
};

export default MyProjectsDonorCard;
