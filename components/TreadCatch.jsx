import React from 'react'

export const TreadCatch = ({ html_url, title, id, user }) => {
  return (
    <a target="_blank" href={html_url}>
    <div className='tread-container'>
        <div className="id">
          <p>{id}</p>
          </div>
          <div className="user">
          <p>{user.login}</p>
          </div>
          <div className="title">
          <p>{title}</p>
          </div>
         
  </div> 
  </a>
  )
}
