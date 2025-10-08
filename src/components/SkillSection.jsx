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
    <div className="flex flex-row gap-md w-full py-4">
      <span className="w-1/12 text-white font-bold">{index}.</span>
      <h3 className="text-white w-2/12 font-semibold">{title}</h3>
      <div className="flex flex-col w-6/12 h-fit">
        <p className="text-white p-0.5">{description}</p>
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
          className="h-16 w-16 mx-auto"
        />
      </div>
    </div>
  );
}
