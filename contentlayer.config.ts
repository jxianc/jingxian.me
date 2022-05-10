import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"

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

export const Tech = defineNestedType(() => ({
  name: "Tech",
  fields: {
    name: {
      type: "string",
      required: true,
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    detail: {
      type: "string",
    },
    dateStart: {
      type: "date",
      required: true,
    },
    dateEnd: {
      type: "date",
    },
    repoUrl: {
      type: "string",
      required: true,
    },
    demoUrl: {
      type: "string",
    },
    category: {
      type: "string",
    },
    techs: {
      type: "list",
      of: Tech,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}))

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Intro, About, Project],
})
