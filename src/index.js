var cervezas = require('./cervezas.json')
// console.log (cervezas[1].nombre);

module.exports = {
  todas: cervezas,
  primera: cervezas(0),
  alazar: uniqueRandomArray(cervezas)
}

// console.log(cervezas.primera) ó console.log(cervezas.todas)
