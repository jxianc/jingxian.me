import { Container } from "components/Container"
import { NextPage } from "next"

interface NotFoundProps {}

const NotFound: NextPage<NotFoundProps> = ({}) => {
  return (
    <Container>
      <h1 className="text-lg font-bold">Oops! Not found</h1>
      <h2>The page you are looking for was not found</h2>
    </Container>
  )
}

export default NotFound
