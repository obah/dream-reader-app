import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: JSX.Element | JSX.Element[];
  classname?: string;
}

function StaggeredAnimation({ children, classname }: PropsWithChildren<Props>) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={classname}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default StaggeredAnimation;
