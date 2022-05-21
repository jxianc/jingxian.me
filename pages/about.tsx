import { AnimatedSection } from "components/AnimatedSection"
import { MdxComponents } from "components/MdxComponents"
import { allBasics, Basic } from "contentlayer/generated"
import { GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { Container } from "../components/Container"

interface AboutProps {
  about: Basic | undefined
}

const About: NextPage<AboutProps> = ({ about }) => {
  const MDXContent = useMDXComponent(about!.body.code)

  return (
    <Container
      title="About - Jingxian Chai"
      description={about!.title}
      ogType="article"
    >
      <AnimatedSection delay={0}>
        <h1 className="sm:text-lg font-bold mb-2 sm:mb-4">{about!.title}</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <article className="prose dark:prose-dark max-w-full prose-sm sm:prose-base">
          <MDXContent components={MdxComponents} />
        </article>
      </AnimatedSection>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  const about = allBasics.find((b) => b.path === "about")
  return {
    props: {
      about,
    },
  }
}

export default About
