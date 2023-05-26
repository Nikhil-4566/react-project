import React from 'react'

export default function Navbar(props) {
  return (
    <header className='container'>
          
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand text-black" href="#">Launch<span class="text-primary">.</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">{props.home}</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">{props.features}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">{props.pricing}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">{props.about}</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">{props.contact}</a>
                </li>
            </ul>
            <button type="button" class="btn btn-outline-secondary mx-2 rounded-pill">Sign in</button>
            <button type="button" class="btn btn-primary rounded-pill ">Register</button>
            </div>
    </div>
</nav>
    </header>
  )
}
