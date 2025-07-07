import ActionButton from "@/utils/ActionButton";
import HomePageText from "@/assets/images/HomePageText.png";
import HomePageGraphic from "@/assets/images/HomePageText.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { sponsorImages } from "@/utils/sponsorimages";

const Home = () => {
    return (
        <section id="home" className="gap16 bg-gray-20 py-10 md:h-full md:">
            <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
            <div className="z-10 mt-32 md:basis-3/5">
              <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5}}
               className="md:-mt-20"
              >
               <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-(--content-evolvetext)">
                    <img src={HomePageText} alt="home-page" />
                </div>
               </div>
               <p className="mt-8 text-sm">
                Unrivaled Gym. Unparalleled Training Fitness.
                Classes.World Class 
                Studios to get the Body Shapes That you Dream
                of.. Get Your Dream 
                Body Now.
               </p>
              </motion.div>
            </div>
            </div>
        </section>
    )
}

export default Home;