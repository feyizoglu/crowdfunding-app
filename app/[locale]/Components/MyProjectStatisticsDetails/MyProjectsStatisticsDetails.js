import Image from "next/image";

const MyProjectsStatisticsDetails = ({ project }) => {
  return (
    <table className="w-full mx-auto bg-gradient-to-r from-whiteColor to-grayishColor text-blackColor rounded-md shadow-lg mt-5 md:w-2/3 lg:w-full">
      <tbody className="text-center">
        <tr>
          <td className="font-semibold ">Creator:</td>
          <td>
            <div className="flex items-center justify-center space-x-2">
              <Image
                className="rounded-full mt-1"
                src={project.profilPic}
                width={30}
                height={30}
                alt="profil picture"
              />
              <p className="capitalize">{project?.creator.split('@')[0]}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-semibold">End Date:</td>
          <td>
            <p className="bg-redColor rounded-xl">{project?.timeline}</p>
          </td>
        </tr>
        <tr>
          <td className="font-semibold">Category:</td>
          <td>
            <p className="capitalize">{project?.category}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyProjectsStatisticsDetails;
