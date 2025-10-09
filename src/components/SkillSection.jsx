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
    <div className="flex flex-row gap-md w-full py-2">
      <span className="ml-4 w-2/12 text-aboutgrey font-bold">{index}.</span>
      <h3 className="text-white w-4/12 font-bold text-2xl">{title}</h3>
      <div className="flex flex-col w-3/12 h-fit">
        <p className="text-white p-0.5 font-inter font-semibold">
          {description}
        </p>
        <div className="flex flex-row flex-wrap gap-1 w-full pt-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} text={skill} />
          ))}
        </div>
      </div>
      <div className="w-3/12 flex items-center justify-center">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="h-32 w-32 mx-auto"
        />
      </div>
    </div>
  );
}
