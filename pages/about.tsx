import { MdxComponents } from "components/MdxComponents"
import { About, allAbouts } from "contentlayer/generated"
import { GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { Container } from "../components/Container"

interface AboutProps {
  about: About
}

const About: NextPage<AboutProps> = ({ about }) => {
  const MDXContent = useMDXComponent(about.body.code)

  return (
    <Container>
      <h1 className="sm:text-lg font-bold mb-2 sm:mb-4">{about.title}</h1>
      <article className="prose dark:prose-dark max-w-full prose-sm sm:prose-base">
        <MDXContent components={MdxComponents} />
      </article>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  const about = allAbouts[0]
  return {
    props: {
      about,
    },
  }
}

export default About
