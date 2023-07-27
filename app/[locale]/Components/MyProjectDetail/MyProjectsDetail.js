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
    <div key={0} className="space-y-10">
      <h1 className="text-blackColor font-bold text-center text-4xl xl:text-[64px] lg:text-6xl md:text-left md:text-5xl">
        My Project
      </h1>
      <h2 className="text-blackColor text-xl text-center font-bold md:text-left">
        {project?.title}
      </h2>
      <div className="flex items-center justify-center ">
        <Image
          className="rounded-lg w-[400px] h-[400px]"
          src={project?.image ? project?.image : `https://placehold.co/400x400/D4EE25/0A0A0A.png`}
          alt='project image'
          width={400}
          height={400}
          priority
        />
      </div>
      <div className=" flex items-center justify-between space-x-12">
        <p className="text-blackColor font-semibold text-center  md:text-left">
          {project?.description}
        </p>
        <button onClick={handleDeleteClicks} className='border border-darkRedColor p-2.5 rounded-lg hover:bg-lightRedColor group'>
          <FaTrash className='text-darkRedColor group-hover:animate-bounce' />
        </button>
      </div>
    </div>
  );
};

export default MyProjectDetails;
