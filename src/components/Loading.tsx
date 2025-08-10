import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100 size-loading'>
        <div class="spinner-border text-light" role="status">
            <span className="visually-hidden size-loading">Loading...</span>
        </div>
        <span className='span-loading'> Loading... </span>
    </div>
  )
}

export default Loading
