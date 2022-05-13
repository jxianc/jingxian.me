import React from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children?: React.ReactNode
  className?: string
  delay: number
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay,
}) => {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
