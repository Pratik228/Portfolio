import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.7, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="gold-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What people say about me</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            className={`bg-white/30 text-black px-4 py-2 rounded-full ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => paginate(-1)}
            disabled={page === 0}
          >
            &lt;
          </button>
        </div>
        <div
          className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
        >
          <AnimatePresence initial={false} custom={direction}>
            {testimonials
              .slice(page * 3, (page + 1) * 3)
              .map((testimonial, index) => (
                <FeedbackCard key={index} index={index} {...testimonial} />
              ))}
          </AnimatePresence>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            className={`bg-white/30 text-black px-4 py-2 rounded-full ${
              page >= Math.ceil(testimonials.length / 3) - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => paginate(1)}
            disabled={page >= Math.ceil(testimonials.length / 3) - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
