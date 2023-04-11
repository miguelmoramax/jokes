import  React, { useEffect, useState } from 'react'
import { getAllJokes } from './services/'
import { useDarkMode } from './hooks/useDarkMode'

import JokesForm from './components/JokesForm'
import JokesList from './components/JokesList'
import JokesHeader from './components/JokesHeader'
import JokesFooter from './components/JokesFooter'
import LoginForm from './components/Login'
import { Joke } from './types'

function App() {

  const [jokes, setJokes] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedElement, setSelectedElement] = useState<Joke>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(5)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    getAllJokes(currentPage, pageSize).then(setJokes)
  }, [jokes, pageSize, currentPage])


  const showFormHandler = (joke: Joke) => {
    setSelectedElement(joke)
    setShowForm(true)
  }

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }
  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPageSize(Number(event.target.value))
    setCurrentPage(1)
  }
  const handleCreateJoke = () => {
    setShowForm(true)
  }

  const token = localStorage.getItem('isLoggedIn')

  return (
    <>
      {token ? (
        <div className={isDarkMode ? 'dark' : ''}>
          <JokesHeader toggleDarkMode={toggleDarkMode} />

          {showForm ? (
            <JokesForm
              element={selectedElement}
              onClose={() => setShowForm(false)}
            />
          ) : (
            <div>
              <JokesList jokes={jokes} showFormHandler={showFormHandler} />
              <JokesFooter
                pageSize={pageSize}
                currentPage={currentPage}
                handlePageSizeChange={handlePageSizeChange}
                handleCreateJoke={handleCreateJoke}
                onChangePage={onChangePage}
                jokes={jokes}
              />
            </div>
          )}
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default App
