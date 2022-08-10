'use strict'

const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')

const resultado = document.getElementById('resultado')

function somar () {
    let somar = parseFloat(numero1.value) + parseFloat(numero2.value)
    resultado.textContent = somar
}