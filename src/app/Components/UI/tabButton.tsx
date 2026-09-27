import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-neutral-900 dark:text-white"
    : "text-neutral-400 dark:text-neutral-500";

  return (
    <button
      onClick={selectTab}
      type="button"
      className={`mr-6 pb-3 font-medium transition-colors hover:text-neutral-900 dark:hover:text-white ${buttonClasses}`}
    >
      {children}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mt-2 h-[2px] bg-neutral-900 dark:bg-white"
      />
    </button>
  );
};

export default TabButton;
