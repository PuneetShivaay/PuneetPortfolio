import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import React from "react";
import { CognizantExperience } from "../constants";
import { CognizantProjectExperience } from "../constants";
import { YontechExperience } from "../constants";
import { YontechProjectExperience } from "../constants";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-8 mt-10 p-1"
      >
        {CognizantExperience.map((CognizantExperience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl text-center font-semibold">
              {CognizantExperience.title}
            </h3>
            <p className="text-xl text-center">{CognizantExperience.company}</p>
            <p className="text-sm text-stone-300 text-center">
              {CognizantExperience.duration}
            </p>
            <p className="mt-2 text-base text-center">
              {CognizantExperience.description}
            </p>

            {CognizantProjectExperience.map(
              (CognizantProjectExperience, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.5 }}
                  key={index}
                  className="p-2"
                >
                  <h3 className="text-xl font-semibold">
                    Client: {CognizantProjectExperience.client}
                  </h3>
                  <p className="text-lg">
                    Project: {CognizantProjectExperience.project}
                  </p>
                  <p className="text-sm text-stone-300">
                    {CognizantProjectExperience.duration}
                  </p>
                  {/* <p className="mt-2">
                    {CognizantProjectExperience.description}
                  </p> */}
                  <p className="mt-2 text-base">
                    {CognizantProjectExperience.description
                      .split("\n")
                      .map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 p-1"
      >
        {YontechExperience.map((YontechExperience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold text-center">
              {YontechExperience.title}
            </h3>
            <p className="text-xl text-center">{YontechExperience.company}</p>
            <p className="text-sm text-stone-300 text-center">
              {YontechExperience.duration}
            </p>
            <p className="mt-2 text-base text-center">
              {YontechExperience.description}
            </p>

            {YontechProjectExperience.map((YontechProjectExperience, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.5 }}
                key={index}
                className="mb-2 p-2"
              >
                <h3 className="text-xl font-semibold">
                  Client: {YontechProjectExperience.client}
                </h3>
                <p className="text-lg">
                  Project: {YontechProjectExperience.project}
                </p>
                <p className="text-sm  text-stone-300">
                  {YontechProjectExperience.duration}
                </p>
                <p className="text-base mt-2">
                  {YontechProjectExperience.description
                    .split("\n")
                    .map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
