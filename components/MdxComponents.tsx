import React, { useState } from "react"
import NextLink from "next/link"
import Image from "next/image"
import { cn } from "utils/classname"

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

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className="rounded-md" {...props} />
}

export const MdxComponents = {
  a: CustomLink,
  Image: RoundedImage,
}
