import React from "react";

export default function SkillBadge({ text }) {
  return (
    <span className="p-2 h-fit w-fit rounded-full whitespace-nowrap bg-gray-400 text-black font-medium">
      {text}
    </span>
  );
}
