import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Intro = defineDocumentType(() => ({
  name: "Intro",
  filePathPattern: "intro.mdx",
  contentType: "mdx",
  fields: {
    headline: {
      type: "string",
      required: true,
    },
    base: {
      type: "string",
      description: "location",
      required: true,
    },
  },
}))

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Intro, About],
})
