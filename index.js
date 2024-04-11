const p_temp = document.querySelector("#p_temperatura");
const p_nivel = document.querySelector("#p_nivel");
const p_press = document.querySelector("#p_pressao");
const btnTexto = document.querySelector("#btnTexto");


const obtendoDados = () => {
    const endpoint = "http://localhost:8080";
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        p_temp.innerHTML = `Temperatura: ${dados.temp}`
        p_nivel.innerHTML = `Nível: ${dados.nivel}`
        p_press.innerHTML = `Temperatura: ${dados.press}`
    })
}
obtendoDados()
// let intervalo = setInterval(obtendoDados, 3000);
// Enviando dados para uma api

let dados = {
    nome: "Pedro",
    email: "pedro@gmail.com"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravandoDados = () => {
    const endpoint = "http://localhost:8080/gravar"
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret => {
        console.log(ret);
    })
}

btnTexto.addEventListener("click", (evt) => {
    gravandoDados()
})