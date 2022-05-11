import { allProjects, Project } from "contentlayer/generated"
import { GetStaticProps, NextPage } from "next"
import { Container } from "../../components/Container"
import { groupBy, Dictionary } from "lodash"
import { compareDesc } from "date-fns"
import { ProjectCard } from "components/ProjectCard"

interface ProjectsProps {
  projects: Dictionary<Project[]>
  categories: string[]
}

const Projects: NextPage<ProjectsProps> = ({ projects, categories }) => {
  return (
    <Container>
      <h1 className="sm:text-lg font-bold mb-2 sm:mb-4">Projects</h1>
      <div className="flex flex-col space-y-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col space-y-2">
            <h2 className="font-semibold text-sm sm:text-base">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects[cat].map((p) => (
                <ProjectCard key={p._id} project={p} />
              ))}
            </div>
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
      return compareDesc(new Date(a.date), new Date(b.date))
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
