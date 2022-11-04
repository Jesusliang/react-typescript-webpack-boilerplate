import { render, screen } from '@testing-library/react'
import axios from 'axios'
import React from 'react'
import App from 'src/App'

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />)
    const heading = screen.getByText(/Hello World/i)
    expect(heading).toBeInTheDocument()
  })

  it('server should responds', () => {
    const axiosSpy = jest.spyOn(axios, 'get')
    render(<App />)
    expect(axiosSpy).toHaveBeenCalled()
  })
})
