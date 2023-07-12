"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setShowKickOffBox, setShowDatePicker } from "@/app/redux/features/authSlice";
import { FaLessThan, FaUpload, FaCalendarAlt } from 'react-icons/fa';
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { BiCloudLightning } from "react-icons/bi";


// import { toast } from 'react-toastify';

const schema = yup.object({
  title: yup.string().required(),
  goalAmount: yup.number().required(),
}).required();


const KickOffBox = () => {
  const [dateX ,setDateX] = useState('');
  const showDatePicker = useSelector(state => state.auth.showDatePicker);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDateSelect = (date) => {
    setDateX(format(date, 'dd/MM/yyyy'))
    console.log(dateX)
  }

  return (
    <div className="bg-opacity-70 h-screen w-screen  fixed top-0 left-0 grid place-content-center z-50 bg-blackColor  ">
      <div className="relative bg-whiteColor p-3 rounded-xl shadow sm:p-12">
        <button
          onClick={() => dispatch(setShowKickOffBox())}
          className="absolute top-3 left-0  p-3 text-blackColor hover:opacity-60 sm:left-8"
        >
          <FaLessThan />
        </button>
        <h1 className="text-3xl font-semibold py-10 sm:text-5xl">
          Kick-off
          <br /> your project
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3  text-blackColor">
          <div className="flex justify-center sm:flex-row space-x-2 sm:space-x-6 ">
            <div className="left-side flex flex-col space-y-6 w-1/2 py-4 ">
              <div>
                <label htmlFor="projectTitle" className="text-md font-semibold block mb-2">
                  Name of your project
                </label>
                <input
                  {...register('title')}
                  id="projectTitle"
                  placeholder="Build a cat shelter"
                  className={` placeholder-blackColor bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100  focus:outline-none`}
                />
              </div>
              <div>
                <label htmlFor="goalAmount" className="text-md font-semibold block mb-2">
                  Add your goal
                </label>
                <input
                  {...register('goalAmount')}
                  id="goalAmount"
                  placeholder="$3.000"
                  className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 text-2xl  placeholder-blackColor focus:outline-none placeholder:font-semibold"
                />
              </div>
              <div className="">
                {showDatePicker &&
                  <Calendar
                    {...register('date')}
                    className="absolute top-1/2 -translate-y-1/2 right-5 rounded-xl shadow-2xl"
                    date={new Date()}
                    onChange={handleDateSelect}
                  />
                }
                <label htmlFor="timeline" className="text-md font-semibold block mb-2">
                  Add your timeline
                </label>
                <div className="flex space-x-3">
                  <input
                    className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 placeholder-blackColor focus:outline-none"
                  />
                  <button onClick={() => dispatch(setShowDatePicker())} className="button-light">
                    <FaCalendarAlt />
                  </button>
                </div>
              </div>
            </div>
            <div className="mid-side border-l border-blackColor"></div>
            <div className="right-side w-1/2 py-4">
              <div>
                <label htmlFor="description" className="text-md font-semibold block mb-2">
                  About your project
                </label>
                <textarea
                  defaultValue={`Lorem ipsum dolor sit amet consectetur`}
                  className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none"
                  id="description"
                  cols="10"
                  rows="3">
                </textarea>
              </div>
              <div className="h-36 grid place-content-center ">
                <label htmlFor="file-upload" className="file-label button-light py-2.5 ">
                  <FaUpload size={20} />
                  <span className="ml-2">Add media</span>
                </label>
                <input id="file-upload" type="file" style={{ display: "none" }} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <button type="submit" className="button-dark w-full">Upload project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KickOffBox;



