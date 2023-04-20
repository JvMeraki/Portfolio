class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <div>
      <h1>Mi Componente</h1>
      <p>Este es mi componente personalizado.</p>
    </div>
  `;
  }
}

customElements.define('my-component', MyComponent);
