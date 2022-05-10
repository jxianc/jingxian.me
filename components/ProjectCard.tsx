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
    <NextLink href={p.slug} passHref>
      <div className="flex flex-col space-y-1 bg-gray-100/30 dark:bg-gray-900/30 p-4 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
        <div className="flex items-baseline justify-between">
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-sm shrink-0">{formatDate(p.date)}</p>
        </div>
        <h3 className="text-sm">{p.description}</h3>
      </div>
    </NextLink>
  )
}
