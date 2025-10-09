import React from "react";

export default function SkillBadge({ text }) {
  return (
    <span className="px-3 py-[2px] rounded-full whitespace-nowrap bg-aboutbadge text-gray-300 text-sm font-light font-inter leading-none">
      {text}
    </span>
  );
}
