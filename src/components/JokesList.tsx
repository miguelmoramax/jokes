import styled from 'styled-components'
import { Joke } from '../types'
import { transformDates, formatEmail, viewStyles } from '../utils'

const Column = styled.td`
  display: flex;
  flex-flow: column nowrap;
  width: 20%;
  border-right: 2px solid black;
`

const Row = styled.tr`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  text-align: left;
`
const Header = styled.tr`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 90%;
  padding: 10px;
`
const Table = styled.table`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 10px;
`

interface JokesListProps {
  showFormHandler: (joke: Joke) => void
  jokes: Joke[]
}

const JokesList: React.FC<JokesListProps> = (props) => {
  return (
    <>
      <Table>
        <thead>
          <Header>
            <th>Title</th>
            <th>Author</th>
            <th>Created At</th>
            <th>Views</th>
          </Header>
        </thead>
        <tbody>
          {props.jokes.map((joke: Joke) => (
            <Row key={joke.id}>
              <Column
                className="column"
                onClick={() => props.showFormHandler(joke)}
              >
                {joke.Title}
              </Column>

              <Column>{joke.Author && formatEmail(joke.Author)}</Column>

              <Column>
                {joke.CreatedAt && transformDates(joke.CreatedAt)}
              </Column>

              <Column style={viewStyles(joke.Views)}>{joke.Views}</Column>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default JokesList
