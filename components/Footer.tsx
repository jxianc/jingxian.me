import React from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

interface FooterProps {
  children?: React.ReactNode
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="flex text-center items-center max-w-2xl w-full mx-auto justify-center mb-10 mt-20">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-center space-x-2 text-gray-800 dark:text-gray-200">
          <a href="https://github.com/jxianc" target="_blank" rel="noreferrer">
            <FaGithubSquare size={28} />
          </a>
          <a
            href="https://twitter.com/jingxianchai"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jingxianchai"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="text-gray-500 text-xs sm:text-sm">
          Copyright © 2022 Jingxian Chai. All Rights Reserved
        </div>
      </div>
    </div>
  )
}
