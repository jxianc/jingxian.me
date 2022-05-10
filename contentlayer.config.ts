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

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Intro],
})
