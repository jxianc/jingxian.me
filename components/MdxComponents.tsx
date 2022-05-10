import React from "react"
import NextLink from "next/link"

const CustomLink = (props: any) => {
  const href = props.href
  const isInternal = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternal) {
    return (
      <NextLink href={href}>
        <a className="font-semibold" {...props}>
          {props.children}
        </a>
      </NextLink>
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="font-semibold"
    />
  )
}

export const MdxComponents = {
  a: CustomLink,
}
