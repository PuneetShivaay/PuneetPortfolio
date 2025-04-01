import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiPython,
  SiJavascript,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiWordpress,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiFlutter,
  SiDart,
  SiJira,
  SiJupyter,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsBootstrap } from "react-icons/bs";

const iconVaiants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b  border-stone-50/30 pb-24" id="technologies">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        duration={{ duration: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 mt-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap text-center items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconVaiants(1, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVaiants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiJavascript className="text-6xl text-yellow-500 " />
        </motion.div>

        <motion.div
          variants={iconVaiants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVaiants(2, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiPython className="text-6xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVaiants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVaiants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiFirebase className="text-6xl text-[#FFCA28]" />
        </motion.div>

        <motion.div
          variants={iconVaiants(4, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiHtml5 className="text-6xl text-red-400" />
        </motion.div>

        <motion.div
          variants={iconVaiants(6, 7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiCss3 className="text-6xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVaiants(4, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiTailwindcss className="text-6xl text-[#06B6D4]" />
        </motion.div>
        <motion.div
          variants={iconVaiants(7, 8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <BsBootstrap className="text-6xl text-[#7952B3]" />
        </motion.div>

        <motion.div
          variants={iconVaiants(8, 9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiWordpress className="text-6xl text-[#21759B]" />
        </motion.div>
        <motion.div
          variants={iconVaiants(2, 7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiGithub className="text-6xl text-gray-200"/>
        </motion.div>

        <motion.div
          variants={iconVaiants(2, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiMysql className="text-6xl text-[#4479A1]" />
        </motion.div>
        <motion.div
          variants={iconVaiants(1, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <DiVisualstudio className="text-6xl text-sky-700" />
        </motion.div>

        <motion.div
          variants={iconVaiants(3, 4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiFlutter className="text-6xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVaiants(4, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiDart className="text-6xl text-sky-800" />
        </motion.div>

        <motion.div
          variants={iconVaiants(5, 6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiGit className="text-6xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVaiants(4, 5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiJira className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVaiants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiJupyter className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVaiants(6, 9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-1 border-stone-50/30 m-1 p-3"
        >
          <SiPandas className="text-6xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
