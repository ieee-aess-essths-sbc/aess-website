
"use client"

import './values.css'
import {question} from "../data/question"
import { useState } from "react";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
	return (
	 <section id="faq" className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center">
        <h2 className="button_join mb-10 w-full">FAQ</h2>
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto lg:px-6 sm:px-2">
          {question.map((value, index) => (
            <div
              key={index}
              className="bg-white relative flex flex-col items-center lg:p-14 max-md:p-8 md:p-8 max-sm:p-2 sm:p-2 rounded-2xl justify-between gap-4 text-black cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="font-bold lg:text-3xl max-sm:text-xl sm:text-sm text-wrap text-center">
                {value.q}
              </div>

              {openIndex === index && (
                <div className="lg:text-2xl leading-9 max-sm:text-xl sm:text-sm">
                  {value.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
	);
  }
  

