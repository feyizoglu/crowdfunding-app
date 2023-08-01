"use client"
import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import testimonials from "@/app/data/testimonials";
import { useTranslations } from 'next-intl';

function Testimonials() {
  const t = useTranslations('Testimonials');
  return (
    <div className="bg-whiteColor">
      <div className="container px-4 pt-20 mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-4 pb-20 text-center sm:text-5xl md:text-start md:text-6xl">
        {t('Testimonials')}
          </h1>
        </div>
        <div className="grid grid-cols-1 place-items-center text-center gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} id={testimonial.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
