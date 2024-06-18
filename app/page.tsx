import Experience from "@/components/experience";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PourquoiMoi from "@/components/moi";
import Projets from "@/components/projets";
import PourquoiSuricate from "@/components/suricate";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/> 
      <Hero/>
      <PourquoiSuricate/>
      <PourquoiMoi/>
      <FAQ/>
      <Projets/>
      <Experience/>
      <Footer/>
      


    </>
  );
}
