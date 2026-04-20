"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-4 md:pt-40 md:gap-10"
          >
            <div className="flex flex-col md:flex-row items-start md:gap-10">
              {/* Marker and Title (Sticky on Desktop only) */}
              <div className="md:sticky md:top-40 z-40 flex items-start md:items-center w-full md:max-w-xs lg:max-w-sm">
                {/* Dot */}
                <div className="h-10 absolute -left-[15px] w-10 rounded-full bg-midnight flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-800 border dark:border-neutral-700 p-2" />
                </div>
                {/* Title and Date Block */}
                <div className="flex flex-col gap-1 pl-8 md:pl-20 text-neutral-500 w-full mb-4 md:mb-0">
                  <h3 className="text-xl md:text-4xl font-bold text-white/90">{item.date}</h3>
                  <h3 className="text-lg md:text-3xl text-lavender font-semibold">{item.title}</h3>
                  <h3 className="text-lg md:text-2xl text-neutral-400">{item.job}</h3>
                </div>
              </div>

              {/* Content Block */}
              <div className="relative w-full pl-8 md:pl-4 mt-4 md:mt-0">
                {item.contents.map((content, index) => (
                  <p className="mb-3 text-sm md:text-base font-normal text-neutral-400 max-w-2xl" key={index}>
                    {content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
