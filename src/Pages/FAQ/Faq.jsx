

import {Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";
import { useState } from "react";

const Faq = () => {

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="max-w-5xl mx-auto my-12 px-5 md:px-10">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
        <p className="mb-5 opacity-80 text-xl font-light text-center">
          Find answers to your questions
        </p>
      </div>

      <div className="space-y-2">
        <Accordion
          open={open === 1}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            What is Bloom Bite Restaurant?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
          It seems like there might be a misspelling in your query. I couldn't find any information on a restaurant called "Bloom Bite." However, it's possible you're referring to a restaurant with a similar name or a new establishment that has not gained widespread recognition yet. If you have any additional details or if you meant a different name, please provide more information, and I'll do my best to assist you

          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            qestion
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            It&apos;s simple!
            <ol>
              <li>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam.
              </li>
              <li>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>
                3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>
                4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
            </ol>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
             qestion?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Absolutely! You can:
            <ol>
              <li>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
            </ol>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`border-b-0 transition-colors ${
              open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
             qestion?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, minima?:
            <ol>
              <li>
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
              </li>
              <li>3. Children&apos;s food</li>
              <li>4. Lorem ipsum dolor sit amet.</li>
              <li>5. Lorem ipsum dolor sit.</li>
            </ol>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`border-b-0 transition-colors ${
              open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
             qestion?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 6}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className={`border-b-0 transition-colors ${
              open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
             qestion?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iste!
            <ol>
              <li>
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam.
              </li>
              <li>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam.
              </li>
              <li>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam.
              </li>
            </ol>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 7}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className={`border-b-0 transition-colors ${
              open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
             qestion?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam.
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 8}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(8)}
            className={`border-b-0 transition-colors ${
              open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
              qestion
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam inventore quibusdam porro tenetur? Quaerat ducimus enim pariatur sit magnam
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
