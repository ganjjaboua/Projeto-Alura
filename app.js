function pesquisar(){
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Não há resultados. Você precisa digitar algo.</p>"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;

        }
    }

    if (!resultados) {
        resultados = "<p>Não há resultados</p>"
    }

    // Insere o HTML gerado na seção
    section.innerHTML = resultados;
}
