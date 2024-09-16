


function moveElementsUp() {
  // Esta função é responsável por manipular o estilo de vários elementos HTML quando um botão de pesquisa é clicado, visando criar um efeito visual de destaque e centralização dos elementos.
  const h1Element = document.querySelector('h1'); //Seleciona o elemento HTML com a tag h1 e armazena-o na variável h1Element.
  const inputPesquisa = document.getElementById("inputPesquisa") //Seleciona o elemento de input com o ID "inputPesquisa" e armazena-o na variável inputPesquisa.
  const buttonPesquisa = document.getElementById("buttonPesquisa") //Seleciona o botão com o ID "buttonPesquisa" e armazena-o na variável buttonPesquisa.
  const section = document.getElementById("sectionStyle") //Seleciona a seção com o ID "sectionStyle" e armazena-o na variável section.

  h1Element.style.zIndex = '999'; //Define o índice z do elemento h1 como 999, trazendo-o para o primeiro plano, sobrepondo outros elementos.
  h1Element.style.transition = 'all 0.3s ease-in-out'; //Aplica uma transição suave de 0.3 segundos a todas as propriedades CSS do elemento h1.
  h1Element.style.margin = '0' //Remove as margens do elemento h1.
  h1Element.style.position = 'relative' //Define a posição do elemento h1 como relativa ao seu pai.
  h1Element.style.top = '0' //Posiciona o elemento h1 no topo de seu container pai.
  h1Element.style.height = '12vh' //Define a altura do elemento h1 como 12% da altura da viewport.

  //As mesmas manipulações de estilo são aplicadas aos elementos inputPesquisa e buttonPesquisa, com pequenas variações para ajustar sua posição e aparência.

  inputPesquisa.style.zIndex = '999';
  inputPesquisa.style.transition = 'all 0.3s ease-in-out';
  inputPesquisa.style.marginTop = '0'

  
  buttonPesquisa.style.zIndex = '999';
  buttonPesquisa.style.transition = 'all 0.3s ease-in-out';
  buttonPesquisa.style.marginTop = '0'
  buttonPesquisa.style.marginBottom = '0'

  section.style.marginBottom = '0' //Remove a margem inferior da seção, possivelmente para ajustar o layout após a movimentação dos elementos.

}

buttonPesquisa.addEventListener('click', moveElementsUp);



function pesquisar(){
  // 1. Seleciona a seção onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa") 
  // 2. Obtém o valor digitado no campo de pesquisa.
  let inputPesquisa = document.getElementById("inputPesquisa").value; 
  // 3. Inicializa variáveis para armazenar os dados do anime durante a iteração.
  let titulo = "";
  let sinopse = "";
  let tags = "";
  
  // 4. Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = ""

  // 5. Verifica se o usuário digitou algo no campo de pesquisa. Se não, exibe uma mensagem de erro.
  if(!inputPesquisa || inputPesquisa == " "){
    section.innerHTML = '<p class="atencao">Nada foi encontrado. Digite algo para pesquisar</p>'
    return// Interrompe a função se não houver termo de pesquisa.
  }

  // 6. Itera sobre cada anime no array de animes.
  for (let dado of animes){
    inputPesquisa = inputPesquisa.toLowerCase()
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    tags = dado.tags.toLowerCase()

    // 8. Verifica se o termo de pesquisa está presente no título, sinopse ou tags do anime.
    if(titulo.includes(inputPesquisa) || sinopse.includes(inputPesquisa) || tags.includes(inputPesquisa)){
      // 9. Se houver correspondência, cria uma estrutura HTML para exibir os detalhes do anime e adiciona à variável `resultados`.
      resultados += `
      <div class="item-resultado">
          <img class="imgLogo" src=${dado.imagem} alt="Banner de Black Clover">
            <div class="resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.sinopse}</p>
              <p class="descricao-meta">Classificação Etária: ${dado.classificacaoEtaria}</p>
              <p class="descricao-meta">Gênero: ${dado.genero}</p>
              <a href=${dado.informacoes} target="_blank">Para mais informações</a>
            </div>
        </div>
    `
  }
  // 10. Verifica se foram encontrados resultados. Se não, exibe uma mensagem informando que nada foi encontrado.
  if(!resultados){
    section.innerHTML = "<p class='atencao'>Nada foi encontrado</p>"
  }
  
  // 11. Atualiza o conteúdo da seção de resultados com os resultados da pesquisa.
  section.innerHTML = resultados
}}

