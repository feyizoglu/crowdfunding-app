import Image from "next/image";
import { FaTrash } from 'react-icons/fa'
import { setShowConfirmationBox } from '@/app/redux/features/authSlice';
import { useDispatch } from "react-redux";


const MyProjectDetails = ({ project }) => {
  const dispatch = useDispatch();

  const handleDeleteClicks = () => {
    setTimeout(() => {
      dispatch(setShowConfirmationBox())
    }, 1);
  }

  return (
    <div className="space-y-10">
      <h1 className="text-blackColor font-bold text-center text-4xl xl:text-[64px] lg:text-6xl lg:text-left md:text-5xl">
        My Project
      </h1>
      <h2 className="text-blackColor text-xl text-center font-bold lg:text-left">
        {project?.title[0].toUpperCase() + project?.title.slice(1)}
      </h2>
      <div className="flex items-center justify-center  ">
        <Image
          className="rounded-lg h-[200px] w-[200px] md:w-[500px] md:h-[350px]"
          src={project?.image}
          alt='project image'
          width={500}
          height={350}
          priority
        />
      </div>
      <div className=" flex items-center justify-center space-x-12 lg:justify-between ">
        <p className="text-blackColor font-semibold">
          {project?.description[0].toUpperCase() + project?.description.slice(1)}
        </p>
        <button onClick={handleDeleteClicks} className='border border-darkRedColor p-2.5 rounded-lg hover:bg-lightRedColor group'>
          <FaTrash className='text-darkRedColor group-hover:animate-bounce' />
        </button>
      </div>
    </div>
  );
};

export default MyProjectDetails;
