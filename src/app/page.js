import Image from "next/image";
import Navigation from "@/components/nav";
import Header from "@/components/header";
import About from "@/components/about";
import ExCom from "@/components/excom";
import AESSTunisia from "@/components/aessrunisia";
import Values from "@/components/values";
import UpEvents from "@/components/activities";
import {upevents} from "../data/events";
import DroneProj from "@/components/drone"
import Questions from "@/components/questions"
import ContactPage from "@/components/location"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
 <Navigation/>
   <Header/>
          <div className="lg:py-8 lg:px-16 max-sm:px-10 sm:px-10 max-md:px-10 md:px-10">
   
  
      <main className="flex flex-col justify-center item-center content-center w-full gap-10
       ">
<About />
<ExCom/>
<AESSTunisia/>
<Values/>
<UpEvents chapter={upevents} />
<DroneProj/>
<Questions/>
<ContactPage/>
      </main>
     
    </div>
     <footer className="">
  <Footer/>
      </footer>
    </>

  );
}
