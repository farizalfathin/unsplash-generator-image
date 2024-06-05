import { motion } from "framer-motion";
import { useState } from "react";

const RotatingButton = () => {
  const [rotate, setRotate] = useState(0);

  return (
    <motion.div
      className="w-12 h-12 p-1 bg-indigo-500 rounded-full flex items-center justify-center cursor-pointer"
      animate={{ rotate, transition: { duration: 1, ease: "easeInOut" } }}
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      onClick={() => setRotate(360)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 717 713"
      >
        <path fill="#ffffff" d="M441 0c153 0 276 124 276 276c0 143-111 262-251 274c-32 94-121 163-226 163C108 713 0 606 0 474c0-108 71-198 168-229C183 108 300 0 441 0zM78 157c-43 0-78-35-78-78S35 1 78 1s77 35 77 78s-34 78-77 78zm0-119c-23 0-41 18-41 41s18 41 41 41s41-18 41-41s-18-41-41-41zm400 438c95-17 167-101 167-200c0-113-91-204-204-204c-98 0-180 70-198 163c130 1 235 108 235 239v2zm-75 0v-2c0-90-72-163-162-164c14 84 79 151 162 166zM240 637c65 0 119-37 147-91c-111-23-197-110-216-221c-56 26-95 83-95 149c0 91 73 163 164 163z"
        />
      </svg>
    </motion.div>
  );
};

export default RotatingButton;