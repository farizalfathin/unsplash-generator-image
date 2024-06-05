import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from '../styles/secImages.module.css';

// eslint-disable-next-line react/prop-types
const SpringModal = ({ isOpen, setIsOpen }) => {

    // eslint-disable-next-line react/prop-types
    const { status, image, altDesc, desc} = isOpen;
    const constraintsRef = useRef(null);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={constraintsRef}
            className={`bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll ${styles.modalScroll}`}
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              drag
              dragConstraints={{
                top: -((windowSize.height / 2) - 50), // Adjust 50 based on element's half height
                bottom: (windowSize.height / 2) - 50, // Adjust 50 based on element's half height
                left: -((windowSize.width / 2) - 50), // Adjust 50 based on element's half width
                right: (windowSize.width / 2) - 50,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10 flex">
                <img
                className="max-w-72"
                src={image} alt={altDesc} />
                <div className="flex flex-col px-4 py-2">
                  <button
                  className="text-2xl self-end cursor-pointer"
                  onClick={() => setIsOpen({ status: false, image: '', altDesc: '', desc: '', })}>x</button>
                  <h3 className="text-2xl font-bold mb-2">
                    {altDesc}
                  </h3>
                  <p className="mb-6">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export default SpringModal;