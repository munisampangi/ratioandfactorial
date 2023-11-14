let ratioof2numbers = require('../ratio/index.js')
let fact = require('../factorial/index.js')

const ratioAndFactorial=(a,b,c)=>{
    const ratio=ratioof2numbers(a,b)
    const factorial=fact(c)

    return {ratio,factorial}
}
console.log(ratioAndFactorial(10,5,5))

module.exports=ratioAndFactorial;

// node utilities/ratioFactorial/index.js
