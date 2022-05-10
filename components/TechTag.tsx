import { Tech } from "contentlayer/generated"
import React from "react"

interface TechTagProps {
  children?: React.ReactNode
  tech: Tech
}

export const TechTag: React.FC<TechTagProps> = ({ children, tech: t }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 font-bold px-1.5 py-0.5 text-xs rounded-sm shrink-0">
      {t.name}
    </div>
  )
}
