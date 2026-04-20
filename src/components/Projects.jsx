import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  index,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [projectRef, isVisible] = useScrollReveal({ threshold: 0.2, once: true });

  return (
    <>
      <div
        ref={projectRef}
        className={`flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-4 scroll-reveal ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setIsHidden(true);
            setPreview(null);
          }}
          className="flex items-center gap-1 cursor-pointer hover-animation mt-3 md:mt-0"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div
        className="bg-gradient-to-r from-transparent
       via-neutral-700 to-transparent h-[1px] w-full"
      />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Projects;
