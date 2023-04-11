import { Joke } from '../types'
import styled from 'styled-components'

interface JokesFooterProps {
  pageSize: number
  currentPage: number
  handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onChangePage: (page: number) => void
  jokes: Joke[]
  handleCreateJoke: () => void
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`

const PaginationContainer = styled(Container)`
  width: 15%;
`

const JokesFooter: React.FC<JokesFooterProps> = (props) => {
  return (
    <>
      <Container>

        <button onClick={props.handleCreateJoke}>Create New Joke</button>
        <PaginationContainer>
          <select value={props.pageSize} onChange={props.handlePageSizeChange}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <button
            disabled={props.currentPage === 1}
            onClick={() => props.onChangePage(props.currentPage - 1)}
          >
            Previous
          </button>
          <button
            disabled={props.jokes.length < props.pageSize}
            onClick={() => props.onChangePage(props.currentPage + 1)}
          >
            Next
          </button>
        </PaginationContainer>
      </Container>
    </>
  )
}

export default JokesFooter
