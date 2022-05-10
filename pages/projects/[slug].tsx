import { Container } from "components/Container"
import { allProjects, Project } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

interface ProjectProps {
  project: Project | undefined
}

const Project: NextPage<ProjectProps> = ({ project: p }) => {
  return (
    <Container>
      <h1 className="text-lg font-bold mb-4">{p?.name}</h1>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params,
}) => {
  const project = allProjects.find((p) => p.slug === params!.slug)
  return {
    props: {
      project,
    },
  }
}

export default Project
