import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import testimonials from "@/app/data/testimonials";

function Testimonials() {
  return (
    <div className="bg-whiteColor">
      <div className="container px-4 mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4 pb-20 text-center sm:text-5xl xl:text-start md:text-6xl">
            Testimonials
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-evenly xl:justify-between">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} id={testimonial.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
