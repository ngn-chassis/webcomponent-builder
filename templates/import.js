class /*{{CLASS-NAME}}*/ extends /*{{ELEMENT-TYPE}}*/ {
  constructor () {
    super()

    this.attachShadow({mode: 'open'})

    let template = document.createElement('template')
    template.insertAdjacentHTML('afterbegin', this.templateString)
    this.shadowRoot.appendChild(template.children[0].content.cloneNode(true))
    template = null
  }

  get templateId () {
    return `/*{{TEMPLATE-ID}}*/`
  }
}

customElements.define(/*'{{TAG-NAME}}'*/, /*{{CLASS-NAME}}*/)
