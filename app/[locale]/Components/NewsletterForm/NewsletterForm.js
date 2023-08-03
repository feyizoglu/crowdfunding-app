import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { setShowNewsletterForm } from "@/app/redux/features/authSlice";
import { useRef, useEffect } from "react";


import Alert from "../SignUpAlert/Alert";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Please enter a valid email address.").required("Email is required."),
});

const NewsletterForm = () => {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleCloseForm = () => {
    dispatch(setShowNewsletterForm())
  }

  useEffect(() => {
    window.addEventListener('click', handleOutClick);

    return () => {
      window.removeEventListener('click', handleOutClick)
    }
  }, []) 

  const handleOutClick = (e) => {
    if( containerRef.current && !containerRef.current.contains(e.target)){
      dispatch(setShowNewsletterForm())
    }
  }

  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center px-4 sm:px-20 bg-blackColor bg-opacity-70  z-50">
      <div ref={containerRef} className="bg-whiteColor flex flex-col  p-6 sm:p-8 md:p-10 rounded-xl shadow relative md:w-2/3 lg:w-1/2  xl:w-1/3">
        <div className="">
          <button onClick={handleCloseForm} className="absolute top-2 left-5 p-3 text-blackColor rounded-full hover:bg-grayishColor md:top-3">
            <MdOutlineArrowBackIos size={20} />
          </button>
          <h2 className="text-2xl font-bold mb-2 mt-6 text-center  md:text-3xl ">
            Receive our content for free!
          </h2>
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} >
              <input
                {...register('username')}
                id="username"
                placeholder="Username"
                className="border-b border-blackColor bg-whiteColor px-3 py-1 mt-7 mb-8 w-full text-lg outline-none sm:text-xl"
              />
              {errors.username && (
                <div className="mb-2 -mt-2">
                  <Alert message={errors.username?.message} />
                </div>
              )}
              <input
                {...register('email')}
                placeholder="E-mail"
                className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-5 w-full outline-none text-lg sm:text-xl"
              />
              {errors.email && <Alert message={errors.email?.message} />}
              <button className="button-dark mt-5 w-full">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
        <hr className="mt-5 mb-6" />
        <p className="text-center">
          Don't miss out on this chance to be part of something amazing! Enter your email address below to join our newsletter and embark on a journey of positive change and creativity.
        </p>
      </div>
    </section>
  )
}

export default NewsletterForm
