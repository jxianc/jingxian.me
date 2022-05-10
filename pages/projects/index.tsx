import { allProjects, Project } from "contentlayer/generated"
import { GetStaticProps, NextPage } from "next"
import { Container } from "../../components/Container"
import { groupBy, Dictionary } from "lodash"
import { compareDesc } from "date-fns"

interface ProjectsProps {
  projects: Dictionary<Project[]>
  categories: string[]
}

const Projects: NextPage<ProjectsProps> = ({ projects, categories }) => {
  return (
    <Container>
      <h1 className="text-lg font-bold mb-8">Projects</h1>
      <div className="flex flex-col space-y-40">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col space-y-4">
            <div>{cat}</div>
            {projects[cat].map((p) => (
              <div key={p._id}>
                <div>{p.name}</div>
                <div>{p.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context,
) => {
  const groupedProjects = groupBy(
    allProjects.sort((a, b) => {
      return compareDesc(new Date(a.dateStart), new Date(b.dateStart))
    }),
    (p) => p.category,
  )
  const categories = Object.keys(groupedProjects)
  return {
    props: {
      projects: groupedProjects,
      categories,
    },
  }
}

export default Projects
