import Image from "next/image";
import FAQ from "@/app/components/faq/faq";
import Navbar from "./components/Navbar";
import { Testimonial } from "./components/Testimonial";
import Footer from "./components/Footer";
import Resources from "./components/resources/resources";
import Newsletter from "./components/newsletter/newsletter";
import AboutUs from "./components/about/about-us.component";
import Hero from "./components/hero/hero";
import NewsInsightsAndBlog from "./components/NewsInsightsAndBlog";
import { PersonStandingIcon } from "lucide-react";
import PersonalizedLearning from "./components/personalizedLerning/personalizedLearning";
import Network from "./components/Network";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <AboutUs />
      <PersonalizedLearning />

      <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-16 lg:px-24 py-6 md:py-8">
        <Resources />
       

        <FAQ className={undefined} />
        <Testimonial />
        <Newsletter />

 

        <NewsInsightsAndBlog />
      </main>
      <Network />
      <Footer />
    </>
  );
}
