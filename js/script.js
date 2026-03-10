/**
 * Calcula o Índice de Massa Corporal (IMC)
 * @author Ricardo Leme
 * @since 2026-03-03
 * @version 1.0.0
 * @description Esta função calcula o IMC a partir do peso e altura
 * @param {number} peso - O peso da pessoa em Kg
 * @param {number} altura - A altura da pessoa em metros
 * @returns {number} O valor do IMC calculado
 */
function calcularIMC(peso, altura){
    const imc = peso / (altura * altura)
    return imc
}

//console.log(calcularIMC(80,1.71)) //apenas para testes

/**
 * Obtém a classificação do IMC
 * @author Ricardo Leme
 * @since 2026-03-03
 * @version 1.0.0
 * @description Esta função mostra a classificação do IMC
 * @param {number} imc - O valor já calculado do IMC
 * @returns {string} A classificação do IMC. Ex: Peso normal, sobrepeso, etc.
 */
 function obterClassificacaoIMC(imc){
    let resultado = '' //resultado começa vazio
    if (imc < 18.5) {
        resultado = 'Abaixo do Peso'
    } else if (imc < 25){
        resultado = 'Peso Normal'
    } else if (imc < 30){
        resultado = 'Sobrepeso'
    } else {
        resultado = 'Obesidade'
    }
    return resultado
 }
// console.log(obterClassificacaoIMC(18.70))

function processaCalculo(event){
    if (event) event.preventDefault()//evita o recarregamento da UI
    //obtém os campos
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const nascimento = document.getElementById('nascimento').value
    //define a área do resultado
    const divResultado = document.getElementById('resultado')
    //validação básica
    if (!nome || !nascimento || isNaN(peso) || isNaN(altura)){
        alert('Por favor, preencha todos os campos corretamente')
        return
    }
    //efetuar os cálculos com as funções criadas
    const imc = calcularIMC(peso, altura)
    const classificacao = obterClassificacaoIMC(imc)
    //mostrando o resultado
    divResultado.style.display = 'block' //volta a mostra a div
    divResultado.innerHTML = `Resultado para <strong>${nome}</strong><br>
                              IMC: <strong>${imc.toFixed(2)}</strong><br>
                              Status: <strong>${classificacao}</strong>`
}
//Limpar o resultado
document.addEventListener('reset', () => {
    //obtemos a div que iremos limpar
    const divResultado = document.getElementById('resultado')
    //limpamos o texto da div
    divResultado.innerHTML = ''
    //ocultamos o elemento novamente
    divResultado.style.display = 'none'
})