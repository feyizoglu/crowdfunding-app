import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setShowConfirmationBox } from "@/app/redux/features/authSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase-confing";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

function ConfirmationBox({ project, user }) {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const t = useTranslations('ConfirmationBox');

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
    dispatch(setShowConfirmationBox())
    toast.success(`${t("You have successfully deleted your project")}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  return (
    <div className='bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center'>
      <div ref={containerRef} className='bg-whiteColor p-10 rounded-lg shadow-xl flex flex-col space-y-3'>
        <h1 className='text-lg font-semibold'>{t('Just to confirm')}, <br /> {t('are you certain you want to delete this project')}?</h1>
        <div className='flex items-center justify-center space-x-3'>
          <button onClick={handleDeleteClicks} className='button-green'>{t('Yes')}</button>
          <button onClick={handleNoClicks} className='button-green'>{t('No')}</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationBox
