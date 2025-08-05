// Cria e configura a tag <head>
document.title = "Minha Página Web via JavaScript";
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    background-color: #222;
    color: white;
    padding: 20px;
    width: 100%;
    text-align: center;
  }

  main {
    padding: 20px;
    max-width: 800px;
    background: white;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;
document.head.appendChild(style);

// Cria e adiciona o header
const header = document.createElement("header");
header.innerText = "Minha Página Criada 100% com JavaScript";
document.body.appendChild(header);

// Cria o main
const main = document.createElement("main");
document.body.appendChild(main);

// Adiciona conteúdo no main
const titulo = document.createElement("h2");
titulo.innerText = "Bem-vindo à minha página!";
main.appendChild(titulo);

const paragrafo = document.createElement("p");
paragrafo.innerText = "Esta página foi criada inteiramente com JavaScript, sem HTML prévio.";
main.appendChild(paragrafo);

// Adiciona botão interativo
const botao = document.createElement("button");
botao.innerText = "Clique aqui!";
main.appendChild(botao);

const resposta = document.createElement("p");
resposta.style.marginTop = "15px";
main.appendChild(resposta);

botao.addEventListener("click", () => {
  resposta.innerText = "Você clicou no botão! 😄";
});


// parabéns chat