import type { GetStaticProps, NextPage } from "next"
import { Container } from "../components/Container"
import { allIntros, Intro } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MdxComponents } from "components/MdxComponents"

interface HomeProps {
  intro: Intro
}

const Home: NextPage<HomeProps> = ({ intro }) => {
  const MDXContent = useMDXComponent(intro.body.code)

  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-baseline space-x-2">
          <h1 className="text-3xl font-bold">Jingxian Chai</h1>
          <p>he/him/his</p>
        </div>
        <div className="text-md font-medium mt-2">
          <h2>{intro.headline}</h2>
          <h2>Based in {intro.base}</h2>
        </div>
      </div>
      <article>
        <div className="prose dark:prose-dark max-w-full">
          <MDXContent components={MdxComponents} />
        </div>
      </article>
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
