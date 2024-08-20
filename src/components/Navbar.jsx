import React, { useState } from 'react'

const Navbar = ({setCategory, setTitle}) => {
    
    let world = `http://api.mediastack.com/v1/news?access_key=49eb215840c180bf564d8b323a692182&categories=general&languages=en`;
    let local = `http://api.mediastack.com/v1/news?access_key=49eb215840c180bf564d8b323a692182&categories=general&languages=en&countries=ng`;
    let crypto = `http://api.mediastack.com/v1/news?access_key=49eb215840c180bf564d8b323a692182&keywords=crypto&languages=en`;
    let sports = `http://api.mediastack.com/v1/news?access_key=49eb215840c180bf564d8b323a692182&categories=sports&languages=en`;
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center fw-bold" href="#">Lanky <span className="badge text-bg-danger">News</span> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="ms-auto navbar-nav">
          <li className="nav-item" onClick={()=>{setCategory(world); setTitle(' The World')}}>
            <p className="nav-link active" aria-current="page">World</p>
          </li>
          <li className="nav-item" onClick={()=>{setCategory(local); setTitle('Nigeria')}}>
            <p className="nav-link">Local</p>
          </li>
          <li className="nav-item" onClick={()=>{setCategory(crypto); setTitle('Crypto')}}>
            <p className="nav-link">Crypto</p>
          </li>
          <li className="nav-item" onClick={()=>{setCategory(sports); setTitle('Sports')}}>
            <p className="nav-link">Sports</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar