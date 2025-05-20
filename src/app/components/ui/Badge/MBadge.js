
"use client";
import Image from "next/image";
import Grammar from "./Grammar.png";
import Reading from "./Reading.png";
import Vocabulary from "./Vocabulary.png";
import Oral from "./Oral.png";
import styles from './MBadge.module.css';

const icons = {
  grammar: Grammar,
  reading: Reading,
  vocabulary: Vocabulary,
  oral: Oral
};

const badgeColors = {
  grammar: "bg-blue-100 text-blue-800",
  reading: "bg-green-100 text-green-800",
  vocabulary: "bg-yellow-100 text-yellow-800",
  oral: "bg-red-100 text-red-800"
};

const labels = {
  grammar: "Great Grammar!",
  reading: "Excellent Reading!",
  vocabulary: "Rich Vocabulary!",
  oral: "Confident Speaking!"
};

export default function MBadge({ type }) {
  const iconSrc = icons[type];
  const label = labels[type] || "Achievement";
  const badgeStyle = badgeColors[type] || "bg-gray-200 text-gray-800";

  return (
    <div className={`${styles.badge} ${badgeStyle}`}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={`${label} icon`}
          className={styles.icon}
        />
      )}
      {label}
    </div>
  );
}
