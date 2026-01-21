import React from "react";
import SkillBadge from "./SkillBadge";

export default function SkillSection({
  index,
  title,
  description,
  skills,
  iconSrc,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full py-4 md:py-2 px-4 md:px-0">
      {/* Mobile: Icon at top, Desktop: Index on left */}
      <div className="flex items-center gap-3 md:contents">
        <span className="md:ml-4 md:w-2/12 text-aboutgrey font-bold text-lg md:text-base">{index}.</span>
        <h3 className="text-white font-bold text-xl md:text-2xl md:w-4/12">{title}</h3>
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="h-10 w-10 md:hidden ml-auto"
        />
      </div>

      {/* Description and Skills */}
      <div className="flex flex-col md:w-3/12 h-fit">
        <p className="text-white p-0.5 font-inter font-semibold text-sm md:text-base">
          {description}
        </p>
        <div className="flex flex-row flex-wrap gap-1 w-full pt-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} text={skill} />
          ))}
        </div>
      </div>

      {/* Desktop Icon */}
      <div className="hidden md:flex md:w-3/12 items-center justify-center">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="h-20 lg:h-32 w-20 lg:w-32 mx-auto"
        />
      </div>
    </div>
  );
}
