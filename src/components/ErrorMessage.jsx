import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className='col-span-4'>{message}! Check your network</div>
  )
}

export default ErrorMessage