import styled from 'styled-components'

interface JokesHeaderProps {
  toggleDarkMode: () => void
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
`;


const JokesHeader: React.FC<JokesHeaderProps> = (props) => {
  return (
    <>
    <Container>
      <label>
        <input
          type="checkbox"
          value="toggle_mode"
          onClick={props.toggleDarkMode}
        />
        Dark
      </label>
      </Container>
    </>
  )
}

export default JokesHeader
