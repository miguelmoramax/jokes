import React, { useState, useEffect } from 'react'
import { Joke } from '../types'
import { useSaveJoke } from '../hooks/useSaveJoke'
import styled from 'styled-components'

interface FormProps {
  onClose: () => void
  element?: Joke
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  border: 1px solid black;
`

const FormContainer = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const JokesForm: React.FC<FormProps> = (props) => {
  const [joke, setJoke] = useState<Joke>({
    id: props.element?.id || 0,
    Title: props.element?.Title || '',
    Body: props.element?.Body || '',
    Author: props.element?.Author || '',
    Views: props.element?.Views || 0,
    CreatedAt: props.element?.CreatedAt || '',
  })

  const { saveJoke } = useSaveJoke()

  useEffect(() => {
    if (props.element) {
      setJoke(props.element)
    }
  }, [props.element])

  const saveChangesHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    await saveJoke(joke)
    props.onClose()
  }

  return (
    <>
      <Container>
        <FormContainer onSubmit={saveChangesHandler}>
          <label>
            Title:
            <Input
              type="text"
              value={joke.Title}
              onChange={(event) =>
                setJoke({ ...joke, Title: event.target.value })
              }
            />
          </label>
          <label>
            Body:
            <Input
              type="text"
              value={joke.Body}
              onChange={(event) =>
                setJoke({ ...joke, Body: event.target.value })
              }
            />
          </label>
          <label>
            Author:
            <Input
              type="text"
              value={joke.Author}
              onChange={(event) =>
                setJoke({ ...joke, Author: event.target.value })
              }
            />
          </label>
          <label>
            Views:
            <Input
              type="number"
              value={joke.Views}
              onChange={(event) =>
                setJoke({ ...joke, Views: Number(event.target.value) })
              }
            />
          </label>
          <label>
            Created At:
            <Input
              type="number"
              value={joke.CreatedAt}
              onChange={(event) =>
                setJoke({ ...joke, CreatedAt: event.target.value })
              }
            />
          </label>
          <ButtonContainer>
            <button onClick={() => props.onClose()}>Cancel</button>
            <button type="submit">Save</button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </>
  )
}

export default JokesForm
