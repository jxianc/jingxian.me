import { Project } from "contentlayer/generated"
import React from "react"
import NextLink from "next/link"
import { formatDate } from "../utils/date"

interface ProjectCardProps {
  children?: React.ReactNode
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project: p }) => {
  return (
    <NextLink href={`/projects/${p.slug}`} passHref>
      <div className="flex flex-col space-y-1 bg-gray-100/50 dark:bg-gray-900/30 p-3 sm:px-4 sm:py-6 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm sm:text-base font-semibold dark:text-gray-100">
            {p.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 shrink-0">
            {formatDate(p.date)}
          </p>
        </div>
        <h3 className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
          {p.description}
        </h3>
      </div>
    </NextLink>
  )
}
