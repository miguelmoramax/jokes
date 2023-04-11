import { HTMLInputTypeAttribute, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-flow: column nowrap;
  -webkit-box-pack: center;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid black;
  width: 50%;
  height: 50%;
  margin: 1rem auto;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`
const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    localStorage.setItem('username', username || '')
    localStorage.setItem('password', password || '')

    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'login')
    }
  }

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            ref={usernameRef}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <Input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </Container>
    </>
  )
}

export default LoginForm
