import { Container } from "components/Container"
import { MdxComponents } from "components/MdxComponents"
import { TechTag } from "components/TechTag"
import { allProjects, Project } from "contentlayer/generated"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { formatDate } from "utils/date"

interface ProjectProps {
  project: Project | undefined
}

const Project: NextPage<ProjectProps> = ({ project: p }) => {
  const MDXContent = useMDXComponent(p!.body.code)
  const router = useRouter()

  useEffect(() => {
    if (!p) {
      router.push("/404")
    } else {
    }
  }, [p, router])

  return (
    <Container>
      {p && (
        <div>
          <div className="mb-14">
            <div className="flex items-baseline space-x-4 mb-2">
              <h1 className="sm:text-lg font-bold">{p.name}</h1>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                {formatDate(p.date)}
              </p>
            </div>
            <h2 className="mb-6 text-sm sm:text-base text-gray-800 dark:text-gray-200">
              {p.description}
            </h2>
            <div className="flex space-x-2 mb-2">
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold px-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-sm"
              >
                <span>GitHub</span>
              </a>
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold px-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-sm"
                >
                  <span>Project</span>
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.techs.map((t) => (
                <TechTag key={t._id} tech={t} />
              ))}
            </div>
          </div>
          <article className="prose dark:prose-dark max-w-full prose-sm sm:prose-base">
            <MDXContent components={MdxComponents} />
          </article>
        </div>
      )}
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
