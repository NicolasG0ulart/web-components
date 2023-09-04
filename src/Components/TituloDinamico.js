class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component (HTML?!)
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo")


        //estilização
        const style = document.createElement("style")
        style.textContent = `
            h1{
                color: hotpink;
            }
        `
        //enviar para a shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)

    }
}

customElements.define('titulo-dinamico', TituloDinamico);