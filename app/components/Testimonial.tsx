
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/testimonialCarousel";
import Image from "next/image";

type TestimonialDetails = {
  quote: string;
  company: string;
  description: string;
  quoteImage: string;
  name: string;
  position: string;
  image: string;
  bgColor: string;
  extra: string;
  companyWidth: number;
  companyHeight: number;
  extraWidth: number;
  extraHeight: number;
};

const testimonials: TestimonialDetails[] = [
  {
    quote: "Platform's flexibility allowed me to learn at my own pace",
    company: "/testimonial_young_and_skilled.svg",
    quoteImage: "/testimonial_quote_green.svg",
    description:
      "Young and Skilled Initiative gave me the skills and confidence I needed to land my dream job. The platform's flexibility allowed me to learn at my own pace, and the mentorship was invaluable.",
    name: "Maria Obioma",
    position: "Digital Marketing Graduate, Young & Skilled",
    image: "/testimonial_maria_obioma.svg",
    bgColor: "#114F3C",
    extra: "/testimonial_star_2.svg",
    companyWidth: 80,
    companyHeight: 44,
    extraWidth: 100,
    extraHeight: 100,
  },
  {
    quote: "I've gained the confidence to lead my school's environmental club",
    company: "/testimonial_google.svg",
    quoteImage: "/testimonial_quote_mint.svg",
    description:
      "Thanks to the mentorship and support, I've gained the confidence to lead my school's environmental club and work on sustainable projects.",
    name: "David Oluah",
    position: "Product Designer, Google",
    image: "/testimonial_david_oluah.svg",
    bgColor: "#98BC6D",
    extra: "/testimonial_star.svg",
    companyWidth: 114,
    companyHeight: 37,
    extraWidth: 76,
    extraHeight: 76,
  },
  {
    quote: "Young and Skilled Initiative opened my eyes to new possibilities",
    company: "/testimonial_microsoft.svg",
    quoteImage: "/testimonial_quote_red.svg",
    description:
      "Young and Skilled Initiative opened my eyes to new possibilities. The skills I learned here have helped me launch my own app!",
    name: "Sarah Macklin",
    position: "Program Alumna, Microsoft",
    image: "/testimonial_sarah_macklin.svg",
    bgColor: "#EF4C0D",
    extra: "/testimonial_semicircle.svg",
    companyWidth: 135,
    companyHeight: 29,
    extraWidth: 65,
    extraHeight: 32,
  },
  // Add more testimonials here...
];

export function Testimonial() {
  return (
    <Carousel className="w-full bg-white  py-10 flex flex-col gap-14 relative">
      
      <div className="flex flex-col gap-7 ">
        <p className="font-medium text-base font-manrope leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit ">
          Our Success Stories
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
          <div className="md:w-[70%] flex flex-col gap-7">
            {" "}
            <p className="text-[#2F2F2F] font-cocon text-[50px] leading-[55px] font-medium">
              What's your excuse now?
            </p>
            <p className="text-base leading-7 font-manrope">
              Hear from students who have transformed their futures with the
              Young and Skilled Initiative. Our program has helped students
              secure jobs, launch businesses, and pursue further education with
              confidence.
            </p>
          </div>
          <div className="md:w-[30%]  flex justify-end">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </div>
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-auto ">
            <Card className="border-none rounded-none shadow-none  h-full">
              <CardContent className="p-0 h-full w-full md:w-[502px]">
                <div
                  className="rounded-[20px] p-7 text-white flex flex-col h-48 justify-between "
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <blockquote className="text-lg font-medium font-cocon">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className=" flex justify-between">
                    <Image
                      src={testimonial.company}
                      alt={testimonial.description}
                      width={testimonial.companyWidth} // Use custom width
                      height={testimonial.companyHeight} // Use custom height
                    />
                    <Image
                      src={testimonial.extra}
                      alt={testimonial.description}
                      width={testimonial.extraWidth} // Use custom width
                      height={testimonial.extraHeight} // Use custom height
                    />
                  </div>
                </div>

                <div className="bg-[#F6F6F6] rounded-[20px] py-7 px-5 h-[284px] flex gap-3 justify-between items-start">
                  <Image
                    src={testimonial.quoteImage}
                    alt={""}
                    width={60}
                    height={100}
                  />

                  <div className="flex gap-7 flex-col h-full justify-between">
                    <p className="mt-4 text-base">{testimonial.description}</p>
                    <div className=" flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-medium text-base ">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
