import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setShowConfirmationBox } from "@/app/redux/features/authSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-confing";
import { useRouter } from "next/navigation";

function ConfirmationBox({ project, user }) {
  const dispatch = useDispatch();
  const containerRef = useRef();

  const { push } = useRouter();

  useEffect(() => {
    window.addEventListener('click', handleOutClick);

    return () => {
      window.removeEventListener('click', handleOutClick);
    }
  }, [])

  const handleOutClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      dispatch(setShowConfirmationBox())
    }
  }

  const handleNoClicks = () => {
    dispatch(setShowConfirmationBox())
  }

  const handleDeleteClicks = async () => {
    push('/')
    await deleteDoc(doc(db, 'projects', project.docId));
  }

  return (
    <div className='h-screen bg-blackColor w-screen fixed top-0 left-0 bg-opacity-70 grid place-content-center text-center'>
      <div ref={containerRef} className='bg-whiteColor p-10 rounded-lg shadow-xl flex flex-col space-y-3'>
        <h1 className='text-lg font-semibold'>Just to confirm, are you certain you want to delete this project?</h1>
        <div className='flex items-center justify-center space-x-3'>
          <button onClick={handleDeleteClicks} className='button-green'>Yes</button>
          <button onClick={handleNoClicks} className='button-green'>No</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationBox
