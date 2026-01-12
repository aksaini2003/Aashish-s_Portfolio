"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="w-full lg:max-w-2xl flex-1">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                I am <strong>Aashish Kumar Saini</strong>, a Data Scientist with a strong
                foundation in <strong>Machine Learning, Data Analysis, and Generative AI</strong>.
                I enjoy building intelligent, data-driven applications that solve real-world
                problems using modern AI techniques.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                I have hands-on experience developing <strong>end-to-end NLP and Generative AI systems</strong>,
                including <strong>RAG pipelines</strong>, semantic search, and personalized AI solutions
                using LangChain, LangGraph, vector databases, and large language models.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                Currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> with a
                <strong> CGPA of 9.54</strong>, I actively work on real-world projects involving financial
                analytics, intelligent automation, and recommendation systems.
              </p>

              <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray mt-8">
                {[
                  { count: "3+", label: "AI Projects" },
                  { count: "10+", label: "Technologies Used" },
                  { count: "9.54", label: "CGPA" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-3xl font-bold text-black">{item.count}</h3>
                    <p className="text-base md:text-lg text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3.5">
                <Image
                  src={getImgPath("/images/icon/lang-icon.svg")}
                  alt="lang-icon"
                  width={30}
                  height={30}
                />
                <p className="text-base xl:text-xl text-black">Language</p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-2.5">
                {["English", "Hindi"].map((lang) => (
                  <p
                    key={lang}
                    className="bg-white py-2 md:py-3.5 px-4 md:px-5 rounded-full text-base xl:text-xl"
                  >
                    {lang}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
