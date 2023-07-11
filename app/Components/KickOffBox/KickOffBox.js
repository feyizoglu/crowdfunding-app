"use client";
import { useDispatch } from "react-redux";
import { setShowKickOffBox } from "@/app/redux/features/authSlice";
import { toast } from 'react-toastify';
import { FaLessThan } from 'react-icons/fa';

// import Alert from "../SignUpAlert/Alert";



const KickOffBox = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor">
      <div className="bg-whiteColor p-4 sm:p-6 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md md:max-w-lg">
        <button
          onClick={() => dispatch(setShowKickOffBox())}
          className="absolute top-3 left-6 p-3 text-blackColor hover:opacity-60 "
        >
          <FaLessThan />
        </button>
        <h1 className="text-5xl font-semibold py-10 ">
          Kick-off
          <br /> your project
        </h1>
        <form className="flex justify-between space-x-6">
          <div className="left-side flex flex-col space-y-4">
            <div>
              <label htmlFor="projectName" className="text-md font-semibold block mb-2">
                Name of your project
              </label>
              <input
                id="projectName"
                placeholder="Build a cat shelter"
                className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 placeholder-blackColor focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="goal" className="text-md font-semibold block mb-2">
                Add your goal
              </label>
              <input
                id="goal"
                placeholder="$3.000"
                className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 placeholder-blackColor focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="text-md font-semibold block mb-2">
                Add your timeline
              </label>
              <input
                id="timeline"
                placeholder="03/06/23 - 26/09/23"
                className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 placeholder-blackColor focus:outline-none"
              />
            </div>
          </div>
          <div className="right-side">
            <label htmlFor="email" className="text-xl font-semibold block mb-2">
              Your personal email address
            </label>
            <input
              id="email"
              className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KickOffBox;



{/* <div className="mb-4">
            
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-xl font-semibold block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-xl font-semibold block mb-2">
              Upload Profile Picture
            </label>
            <div className="file-input m-5 ml-0">
              <label htmlFor="file-upload" className="file-label button-light">
                <FaUpload className="text-[#0361FD] mr-4" /> Choose File
              </label>
              <input id="file-upload" type="file" style={{ display: "none" }} />
            </div>
          </div>
          <button type="submit" className="w-full h-10 button-dark">
            Submit
          </button> */}