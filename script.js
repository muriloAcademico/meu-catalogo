const API = "https://meu-catalogo.onrender.com";

const form = document.getElementById("formulario");
const lista = document.getElementById("lista");

async function carregarItens() {

    const resposta =
        await fetch(`${API}/itens`);

    const itens =
        await resposta.json();

    lista.innerHTML = "";

    itens.forEach(item => {

        lista.innerHTML += `
            <div class="card">
                <button
                class="excluir"
                onclick="excluir(${item.id})">
                X
                </button>

                <h3>${item.nome}</h3>
                <p><b>Categoria:</b>
                ${item.categoria}</p>

                <p>${item.descricao}</p>

                <p><b>Nota/Preço:</b>
                ${item.nota_preco}</p>
            </div>
        `;
    });
}

form.addEventListener("submit",
async (e) => {

    e.preventDefault();

    const item = {
        nome: nome.value,
        categoria: categoria.value,
        descricao: descricao.value,
        nota_preco: nota_preco.value
    };

    await fetch(`${API}/itens`, {
        method: "POST",
        headers: {
            "Content-Type":
            "application/json"
        },
        body: JSON.stringify(item)
    });

    form.reset();
    carregarItens();
});

async function excluir(id){

    await fetch(`${API}/itens/${id}`, {
        method: "DELETE"
    });

    carregarItens();
}

carregarItens();