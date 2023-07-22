import React from "react";
import Image from "next/image";
import testimonials from "@/app/data/testimonials";

const style = {
  card: `flex flex-col justify-center items-center bg-grayishColor max-w-xs text-sm text-center h-80 px-3 relative mb-20  rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 sm:text-lg`,
};

function Testimonial({ id }) {
  const testimonialData = testimonials.find(
    (testimonial) => testimonial.id === id
  );

  return (
    <div className={style.card}>
      <Image
        src={testimonialData.image}
        width={96}
        height={96}
        alt="projectImage"
        className="rounded-xl  -top-12 absolute border-2 border-whiteColor"
      />
      <div className="flex flex-col justify-around items-center">
        <p className="px-4 pt-10">{testimonialData.content}</p>
        <div className="flex pt-3 md:text-lg">
          <div className="pr-2 bold">
            <h2>{testimonialData.author}</h2>
          </div>
          <div className="border-l-2 border-blackColor pr-2"></div>
          <div>
            <p className="text-blueColor">{testimonialData.profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
