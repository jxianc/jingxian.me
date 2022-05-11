import type { GetStaticProps, NextPage } from "next"
import { Container } from "../components/Container"
import { allIntros, Intro } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MdxComponents } from "components/MdxComponents"
import { AnimatedSection } from "../components/AnimatedSection"

interface HomeProps {
  intro: Intro
}

const Home: NextPage<HomeProps> = ({ intro }) => {
  const MDXContent = useMDXComponent(intro.body.code)

  return (
    <Container>
      <AnimatedSection delay={0} className="mb-8 sm:mb-10">
        <div className="flex items-baseline space-x-2">
          <h1 className="sm:text-3xl font-bold">Jingxian Chai</h1>
          <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
            he/him/his
          </p>
        </div>
        <div className="text-sm sm:text-base font-medium sm:mt-2 text-gray-800 dark:text-gray-200">
          <h2>{intro.headline}</h2>
          <h2>Based in {intro.base}</h2>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="prose dark:prose-dark max-w-full prose-sm sm:prose-base">
          <MDXContent components={MdxComponents} />
        </div>
      </AnimatedSection>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const intro = allIntros[0]
  return {
    props: {
      intro,
    },
  }
}

export default Home
