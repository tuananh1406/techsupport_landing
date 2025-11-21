import { motion } from "framer-motion";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SliderHero = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const rotatingWords = ["Web Apps", "Websites", "Solutions"];

  return (
    <section className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 overflow-hidden group">
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-0.5 md:gap-1.25 justify-center text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.2]"
          >
            <span className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              Ship Amazing
            </span>
            <WordRotate
              words={rotatingWords}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-[365px]"
            />
          </motion.h1>

          <Button className="px-4 py-2 backdrop-blur-sm border  bg-blue-300/10 border-blue-500/20 transition-colors hover:bg-blue-300/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href="#features">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
            </Link>
          </Button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
};
export default SliderHero;
