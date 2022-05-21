import { AnimatedSection } from "components/AnimatedSection"
import { MdxComponents } from "components/MdxComponents"
import { allBasics, Basic } from "contentlayer/generated"
import { GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { Container } from "../components/Container"

interface ResumeProps {
  resume: Basic | undefined
}

const Resume: NextPage<ResumeProps> = ({ resume }) => {
  const MDXContent = useMDXComponent(resume!.body.code)

  return (
    <Container
      title="Resume - Jingxian Chai"
      description="resume of Jingxian Chai"
    >
      <AnimatedSection delay={0}>
        <h1 className="sm:text-lg font-bold mb-2 sm:mb-4">{resume!.title}</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <article className="prose dark:prose-dark max-w-full prose-sm sm:prose-base">
          <MDXContent components={MdxComponents} />
        </article>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="mt-4">
          <iframe
            src="https://www.keepandshare.com/doc27/112709/jingxian-chai-resume-pdf-99k?da=y"
            width="100%"
            height="700"
            allow="autoplay"
          />
        </div>
      </AnimatedSection>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<ResumeProps> = async (context) => {
  const resume = allBasics.find((b) => b.path === "resume")
  return {
    props: {
      resume,
    },
  }
}

export default Resume
