import './style.css'


document.querySelector('#app').innerHTML = `
<nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="/index.html">
    <img src="/img/bg.png" alt="JK Software Dev" width="125px" height="125px">
  </a>
  <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">JK Software Development</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/gallery.html">Gallery</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            My Other Websites!
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">jksoftwaredev.com</a></li>
            <li><a class="dropdown-item" href="#">About Me</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Contact</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex mt-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</div>
</nav>

  <div>
    <ul class="list-container">
      <li id="github">
        <a href="https://github.com/jksdevz?tab=repositories">
          <img src="/img/githubLogo.svg" alt="" width="20">
          Github
        </a>
      </li>
      <li id="instagram">
        <a href="https://www.instagram.com/jksdevz/">
          <img src="/img/instagramLogo.svg" alt="" width="20">
          Instagram
        </a>
      </li>
      <li id="twitter">
        <a href="https://twitter.com/jksdevz">
          <img src="/img/freeTwitter.svg" alt="" width="20">
          Twitter
        </a>
      </li>
      <li id="youtube">
        <a href="https://www.youtube.com/channel/UC9o3TXLI2M5vpnfDQSFZBqw">
          <img src="/img/freeYoutube.svg" alt="" width="20">
          Youtube
        </a>
      </li>
    </ul>
  </div>
`

setupCounter(document.querySelector('#counter'))
