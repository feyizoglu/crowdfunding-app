"use client";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setShowKickOffBox } from "@/app/redux/features/authSlice";
import { FaLessThan, FaUpload, FaCalendarAlt } from 'react-icons/fa';
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { db, storage } from "@/app/firebase/firebase-confing";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Alert from "../SignUpAlert/Alert";

import { toast } from 'react-toastify';

const schema = yup.object({
  title: yup.string().required(),
  goalAmount: yup.number().required(),
  timeline: yup
    .array()
    .of(yup.date().min(new Date()))
    .min(2)
    .required(),
  category: yup.string().required(),
  description: yup.string().required(),
  image: yup
    .mixed()
    .test("fileRequired", "Image is required", (value) => {
      return value.length > 0;
    }),
}).required();

const KickOffBox = () => {
  const [showDateBox, setShowDateBox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const user = useSelector(state => state.auth.user);
  const profilPic = useSelector(state => state.auth.profilPic);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler);
    }
  }, []);

  const containerRef = useRef();
  const rangeRef = useRef();

  const { register, handleSubmit, formState: { errors }, control, watch } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (errors.timeline) {
      toast.error(`Please select a future date, and also make sure to select both a start and end date.`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }, [errors.timeline])

  const onSubmit = async (data) => {
    try {
      setIsDisabled(true)
      const imgFile = data.image[0];
      const storageRef = ref(storage, `project-img/${imgFile.name}`);
      const snapshot = await uploadBytes(storageRef, imgFile);
      const downloadURL = await getDownloadURL(snapshot.ref);

      const formattedTimeline = data.timeline.map((date) =>
        format(date, "dd/MM/yy")
      );

      await addDoc(collection(db, 'projects'), {
        id: user.id,
        ...data,
        image: downloadURL,
        profilPic: profilPic,
        creator: user.email,
        timeline: formattedTimeline,
        moneyRaised: Math.floor(data.goalAmount * Math.random())
      })


    } catch (err) {
      console.log(err.message);
    } finally {
      setIsDisabled(false)
    }
    setShowDateBox(false)
    toast.success('You have successfully created your project', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  };

  const clickHandler = (e) => {
    if (!rangeRef.current.contains(e.target)) {
      setShowDateBox(false);
    }
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      dispatch(setShowKickOffBox());
    }
  };

  const timeline = watch('timeline');

  return (
    <div className="bg-opacity-70 h-screen w-screen  fixed top-0 left-0 grid place-content-center z-50 bg-blackColor  ">
      <div ref={containerRef} className="relative bg-whiteColor p-6 rounded-xl shadow sm:p-12">
        <button
          onClick={() => dispatch(setShowKickOffBox())}
          className="absolute top-3 left-0  p-3 text-blackColor hover:opacity-60 sm:left-8"
        >
          <FaLessThan />
        </button>
        <h1 className="text-4xl font-semibold py-8 sm:text-5xl">
          Kick-off
          <br /> your project
        </h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3  text-blackColor">
          <div className="flex justify-center  space-x-2 sm:space-x-6 ">
            <div className="left-side flex flex-col space-y-6 w-1/2 py-4 ">
              <div>
                <label htmlFor="projectTitle" className={`text-md font-semibold block mb-2 ${errors.title && `text-red-500`}`}>
                  Name of your project
                </label>
                <input
                  {...register('title')}
                  id="projectTitle"
                  placeholder="Build a cat shelter"
                  className={` placeholder-blackColor bg-whiteColor border-blackColor w-full px-4 text-sm py-2 border-b  border-opacity-100  focus:outline-none ${errors.title && `border-red-500 placeholder-red-500`}`}
                />
              </div>
              <div>
                <label htmlFor="goalAmount" className={`text-md font-semibold block mb-2 ${errors.goalAmount && `text-red-500`}`}>
                  Add your goal
                </label>
                <input
                  {...register('goalAmount')}
                  id="goalAmount"
                  placeholder="$3.000"
                  className={`bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 text-2xl  placeholder-blackColor focus:outline-none placeholder:font-semibold ${errors.goalAmount && `border-red-500 placeholder-red-500`} `}
                />
              </div>
              <div ref={rangeRef}>
                {showDateBox && (
                  <Controller
                    name="timeline"
                    control={control}
                    defaultValue={[
                      addDays(new Date(), 1),
                      addDays(new Date(), 7),
                    ]}
                    render={({ field }) => (
                      <DateRange
                        className="absolute top-1/2 -translate-y-1/2 right-2 rounded-xl shadow-2xl shadow-blackColor z-10"
                        onChange={(item) => {
                          field.onChange([item.selection.startDate, item.selection.endDate]);
                        }}
                        ranges={[
                          {
                            startDate: field.value[0],
                            endDate: field.value[1],
                            key: 'selection',
                          },
                        ]}
                      />
                    )}
                  />
                )}
                <label htmlFor="timeline" className={`text-md font-semibold block mb-2 ${errors.timeline && `text-red-500`}`}>
                  Add your timeline
                </label>
                <div className="flex space-x-3">
                  <input
                    id="timeline"
                    onClick={() => setShowDateBox(prev => !prev)}
                    value={`${timeline ? `${format(timeline[0], 'dd/MM/yy')}-${format(timeline[1], 'dd/MM/yy')}` : ''}`}
                    placeholder="dd/MM/yy"
                    className={`bg-whiteColor placeholder-blackColor text-sm w-full p-2 border-b border-blackColor border-opacity-100 focus:outline-none cursor-pointer ${errors.timeline && `border-red-500 placeholder-red-500`}`}
                    readOnly
                  />
                  <div onClick={() => setShowDateBox(prev => !prev)} className={`button-light z-0 ${errors.timeline && `bg-redColor text-red-500 border-red-500 hover:bg-lightRedColor hover:text-red-500 hover:opacity-60`}`}>
                    <FaCalendarAlt />
                  </div>
                </div>
                {/* {errors.timeline &&
                  <div className="mt-2">
                    <Alert message='Please select a future date, and also make sure to select both a start and end date.' />
                  </div>} */}
              </div>
            </div>
            <div className="mid-side border-l border-blackColor"></div>
            <div className="right-side w-1/2 py-4 space-y-3">
              <div>
                <label htmlFor="category" className="text-md font-semibold mb-2 block">Select category</label>
                <select
                  {...register('category')}
                  className={`bg-whiteColor border-b border-blackColor w-full px-4 py-2 cursor-pointer outline-none text-sm ${errors.category && `border-red-500 placeholder-red-500`}`} id="category">
                  <option value="education">Education</option>
                  <option value="culture">Culture</option>
                  <option value="animals">Animals</option>
                  <option value="children">Children</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className={`text-md font-semibold block mb-2 ${errors.description && `text-red-500`}`}>
                  About your project
                </label>
                <textarea
                  {...register('description')}
                  defaultValue={`Lorem ipsum dolor sit amet consectetur`}
                  className={`bg-whiteColor text-sm w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none ${errors.description && `border-red-500 placeholder-red-500`}`}
                  id="description"
                  cols="10"
                  rows="3">
                </textarea>
              </div>
              <div className="text-center">
                <label htmlFor="file-upload" className={`file-label button-light py-2.5 ${errors.image && `bg-redColor text-red-500 border-red-500 hover:bg-lightRedColor hover:text-red-500 hover:opacity-60`}`}>
                  <FaUpload size={20} />
                  <span className="ml-2">Add media</span>
                </label>
                <input
                  {...register('image')}
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <button type="submit" className={`button-dark w-full ${isDisabled && `opacity-50`}`} disabled={isDisabled}>Upload project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KickOffBox;



