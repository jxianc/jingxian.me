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
      <div className="space-y-4">
        <div>
          <div className="flex space-x-2 items-baseline">
            <div className="font-semibold text-lg">Jingxian Chai</div>
            <div className="text-sm">he/him/his</div>
          </div>
          <div className="flex space-x-1 items-baseline text-sm flex-wrap">
            <div>jingxianchai01@gmail.com</div>
            <div>|</div>
            <div>Minneapolis, MN, 55414</div>
            <div>|</div>
            <div>LinkedIn</div>
            <div>|</div>
            <div>GitHub</div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg">Education</div>
          <div className="text-sm space-y-4">
            <div>
              <div className="flex space-x-2">
                <div className="font-semibold">
                  University of Minnesota, Twin Cities
                </div>
                <div>Minneapolis, MN</div>
              </div>
              <div>Sep 2021 - Expected May 2023</div>
            </div>
            <div>
              <div className="flex space-x-2">
                {/* <div className="font-semibold">Taylors University</div> */}
                <div>Selangor, Malaysia</div>
              </div>
              <div>May 2019 - Dec 2020</div>
              {/* <div> list (Fall 2020) | Coding Club | Board Game Club</div> */}
            </div>
          </div>
        </div>
      </div>
      <AnimatedSection delay={0.2}>
        <article
          className="prose dark:prose-dark max-w-full prose-sm sm:prose-base
          prose-p:leading-6
        "
        >
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
