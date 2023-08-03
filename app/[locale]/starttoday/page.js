'use client'
import StartToday from "../Components/StartToday/StartToday";
import NewsLetterBox from "../Components/NewsLetterBox/NewsLetterBox";
import NewsletterForm from "../Components/NewsletterForm/NewsletterForm";
import { useSelector } from 'react-redux';

function page() {
  const showNewsletterForm = useSelector(state => state.auth.showNewsletterForm);


  return (
    <div className="relative bg-whiteColor pt-[70px]">
      <div className="container mx-auto py-12 flex flex-col items-center space-y-12 justify-between md:flex-row  md:space-y-0 md:px-4 md:space-x-12">
        <StartToday />
        <NewsLetterBox />
      </div>
      {showNewsletterForm && <NewsletterForm />}
    </div>
  );
}

export default page;