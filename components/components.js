class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="header">
        <header>
            <nav>
                <h1><i class="fa-solid fa-pencil"></i> Portafolio Jv_Meraki</h1>
                <i class="fas fa-bars menu-icon"></i>
                <ul class="menu-uno">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="pages/Gallery.html">Galería</a></li>
                    <li><a href="pages/About.html">Sobre mi</a></li>
                </ul>
            </nav> 
        </header>
      </section>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="footer">
        <footer class="top">
            <img src="lib/fotoVitto.jpg" />
            <div class="links">
                <div>
                    <h2>Técnicas</h2>
                    <a>Lápiz de Grafito</a>
                    <a>Bolígrafo</a>
                    <a>Lápices de Color</a>
                </div>
                <div>
                    <h2>Estilos</h2>
                    <a>Realismo</a>
                    <a>Semi Realismo</a>
                    <a>Anime</a>
                </div>
            </div>
        </footer>
        <footer class="bottom">
            <div class="legal">
                <span> © 2023 La Stella Più Fragile Dell' Universo</span>
                <a>-</a>
                <a> Jv_Meraki </a>
                <a> Javi </a>
            </div>
            <div class="links">
                <a href="https://www.instagram.com/jv_meraki/" target="_blank"  class="fa-brands fa-instagram"></a>
                <a href="https://www.linkedin.com/in/brayan-javier-martinez-pinzon-050b51218/" target="_blank" class="fa-brands fa-linkedin"></a>
                <a href="https://github.com/" target="_blank"  class="fa-brands fa-github-alt"></a>
            </div>
        </footer>
      </section>
    `;
  }
}

class NavBarPages extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="header">
        <header>
            <nav>
                <h1><i class="fa-solid fa-pencil"></i> Portafolio Jv_Meraki</h1>
                <i class="fas fa-bars menu-icon"></i>
                <ul class="menu-uno">
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../pages/Gallery.html">Galería</a></li>
                    <li><a href="../pages/About.html">Sobre mi</a></li>
                </ul>
            </nav> 
        </header>
      </section>
    `;
  }
}

class FooterPages extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="footer">
        <footer class="top">
            <img src="../lib/fotoVitto.jpg" />
            <div class="links">
                <div>
                    <h2>Técnicas</h2>
                    <a>Lápiz de Grafito</a>
                    <a>Bolígrafo</a>
                    <a>Lápices de Color</a>
                </div>
                <div>
                    <h2>Estilos</h2>
                    <a>Realismo</a>
                    <a>Semi Realismo</a>
                    <a>Anime</a>
                </div>
            </div>
        </footer>
        <footer class="bottom">
            <div class="legal">
                <span> © 2023 La Stella Più Fragile Dell' Universo</span>
                <a>-</a>
                <a> Jv_Meraki </a>
                <a> Javi </a>
            </div>
            <div class="links">
                <a href="https://www.instagram.com/jv_meraki/"  target="_blank" class="fa-brands fa-instagram"></a>
                <a href="https://www.linkedin.com/in/brayan-javier-martinez-pinzon-050b51218/" target="_blank" class="fa-brands fa-linkedin"></a>
                <a href="https://github.com/" target="_blank"  class="fa-brands fa-github-alt"></a>
            </div>
        </footer>
      </section>
    `;
  }
}

customElements.define('my-navbar-main', NavBar);
customElements.define('my-footer-main', Footer);
customElements.define('my-navbar-pages', NavBarPages);
customElements.define('my-footer-pages', FooterPages);
