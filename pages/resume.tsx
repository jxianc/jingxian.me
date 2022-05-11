import { AnimatedSection } from "components/AnimatedSection"
import { NextPage } from "next"
import { Container } from "../components/Container"

interface ResumeProps {}

const Resume: NextPage<ResumeProps> = ({}) => {
  return (
    <Container>
      <AnimatedSection delay={0}>
        <h1 className="sm:text-lg font-bold mb-2 sm:mb-4">Resume</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <iframe
          src="https://www.keepandshare.com/doc27/112709/jingxian-chai-resume-pdf-99k?da=y"
          width="100%"
          height="700"
          allow="autoplay"
        />
      </AnimatedSection>
    </Container>
  )
}

export default Resume
