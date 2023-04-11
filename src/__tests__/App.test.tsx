import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

// Tests that jokes are displayed correctly.
xit('test_display_jokes: tests that jokes are displayed correctly', async () => {
  jest.mock('../services/', () => ({
    getAllJokes: jest.fn().mockResolvedValue([
      {
        id: 1,
        Title: 'Why did the chicken cross the road?',
        Body: 'To get to the other side',
        Author: 'Anonymous',
        Views: 100,
        CreatedAt: '2022-01-01',
      },
      {
        id: 2,
        Title: 'What do you call a fake noodle?',
        Body: 'An impasta',
        Author: 'Anonymous',
        Views: 50,
        CreatedAt: '2022-01-02',
      },
    ]),
  }))
  render(<App />)
  await waitFor(() =>
    expect(
      screen.getByText('Why did the chicken cross the road?')
    ).toBeInTheDocument()
  )
  expect(screen.getByText('To get to the other side')).toBeInTheDocument()
  expect(screen.getByText('Anonymous')).toBeInTheDocument()
  expect(screen.getByText('100')).toBeInTheDocument()
  expect(screen.getByText('2022-01-01')).toBeInTheDocument()
})
