import React from 'react'

export const TreadCatch = ({ html_url, title }) => {
  return (
    <div className='tread-container'>
    <a target={'blank'} href={`${html_url}`}>
        <p>{title}</p>
    </a>
    </div>
  )
}
