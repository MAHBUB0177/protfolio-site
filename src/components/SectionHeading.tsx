// "use client";

// import { motion } from "framer-motion";

// type SectionHeadingProps = {
//   eyebrow: string;
//   title: string;
//   description?: string;
// };

// export function SectionHeading({
//   eyebrow,
//   title,
//   description,
// }: SectionHeadingProps) {
//   return (
//     <motion.div
//       className="mb-10 max-w-2xl"
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <p className="mb-3 text-sm font-medium tracking-[0.18em] text-accent uppercase">
//         {eyebrow}
//       </p>
//       <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
//         {title}
//       </h2>
//       {description ? (
//         <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
//           {description}
//         </p>
//       ) : null}
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        variants={itemVariants}
        className="mb-3 text-sm font-medium tracking-[0.18em] text-accent uppercase"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="font-display text-3xl leading-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
