"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setShowKickOffBox, setShowSignInBox, setCloseMobileNav } from "@/app/redux/features/authSlice";
import { toast } from 'react-toastify';
import { useTranslations } from "next-intl";

const StartToday = () => {
  const [supportCheck, setSupportCheck] = useState(true);
  const [kickOffCheck, setKickOffCheck] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const projects = useSelector((state) => state.auth.projects);
  const t = useTranslations('StartToday');

  const dispatch = useDispatch();

  const supportClickHandle = () => {
    setKickOffCheck(false);
    setSupportCheck(true);
  };
  const kickOffClickHandle = () => {
    dispatch(setCloseMobileNav());
    setKickOffCheck(true);
    setSupportCheck(false);
    if (user?.email) {
      const isUserHaveProject = projects.find(
        (project) => project.id == user.id
      );
      if (isUserHaveProject) {
        toast.error(`Existing active project under ${user?.email}. Wait or delete it before creating a new one.`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false
        });
      } else {
        setTimeout(() => {
          dispatch(setShowKickOffBox());
        }, 1);
      }
    } else {
      setTimeout(() => {
        dispatch(setShowSignInBox());
      }, 1);
    }
  };

  return (
    <div className="flex flex-col items-center  space-y-16 md:w-4/6 md:items-start">
      <div className="text-3xl md:ml-14">
        <h1 className="font-semibold">{t('I want to')}</h1>
      </div>
      <div className=" justify-center items-center md:ml-10">
        <Link
          onClick={supportClickHandle}
          className="flex items-center space-x-6"
          href="/projects"
        >
          <div className="relative">
            <input
              checked={supportCheck}
              type="checkbox"
              id="support"
              className={` appearance-none border border-blackColor p-4 rounded-md ${supportCheck && `bg-greenColor border-greenColor`
                }`}
              readOnly
            />
            {supportCheck && (
              <FaCheck className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
            )}
          </div>
          <div className="flex flex-col space-y-2.5  items-center">
            <span className="text-4xl font-bold">{t('Support')}</span>
            <span className="text-2l font-semibold">{t('other projects')}</span>
          </div>
        </Link>
      </div>
      <div className="border-b border-black w-full "></div>
      <div className=" justify-center px-12 items-center md:px-0 md:ml-10 ">
        <button
          onClick={kickOffClickHandle}
          className="flex items-center space-x-6"
        >
          <div className="relative">
            <input
              checked={kickOffCheck}
              type="checkbox"
              id="support"
              className={` appearance-none border border-blackColor p-4 rounded-md ${kickOffCheck && `bg-greenColor border-greenColor`
                }`}
              readOnly
            />
            {kickOffCheck && (
              <FaCheck className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />
            )}
          </div>
          <div className="flex flex-col space-y-2.5 items-center">
            <span className="text-4xl font-bold flex">{t('Kick-off')}</span>
            <span className="text-2l font-semibold">{t('my project')}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default StartToday;
