import { motion } from "framer-motion";

export default function CardStack() {
  const cards = [
    "/public/images/project1.png",
    "/public/images/project2.png",
    "/public/images/project3.png",
    "/public/images/project4.png",
    "/public/images/project5.png",
  ];

  // Define z-index pattern
  const zIndexes = [0, 10, 20, 10, 0];

  return (
    <div className="flex justify-center items-center -space-x-10 mt-10">
      {cards.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`project-${i}`}
          className={`w-25 lg:w-58 rounded-xl shadow-black transition-transform duration-300 hover:-translate-y-4`}
          initial={{ rotate: -8 + i * 4, scale: 0.95 }}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ zIndex: zIndexes[i] }}
        />
      ))}
    </div>
  );
}
