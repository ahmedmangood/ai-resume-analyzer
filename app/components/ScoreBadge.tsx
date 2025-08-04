import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const getBadgeStyle = (score: number) => {
  if (score > 70) {
    return {
      bg: "bg-badge-green text-green-600",
      text: "Strong",
    };
  } else if (score > 49) {
    return {
      bg: "bg-badge-yellow text-yellow-600",
      text: "Good Start",
    };
  } else {
    return {
      bg: "bg-badge-red text-red-600",
      text: "Needs Work",
    };
  }
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const { bg, text } = getBadgeStyle(score);

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full font-semibold ${bg}`}
      title={`Score: ${score}`}
    >
      {text}
    </span>
  );
};

export default ScoreBadge;
