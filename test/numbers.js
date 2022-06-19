var expect = require('chai').expect;

/**
 * Suma de los elementos que tienen que ser números
 * @param {*} arr Lista de números a sumar
 */
function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

describe.only('Numbers test', () => {
    const numero = 2;
    it('Devolver resultado 0 con array vacio de números', () => {

        expect(sum([])).to.equal(0);
    });

    it ('El número es igual ', () => {
        expect(sum([1,2,3])).to.equal(6);
    });
    it('El número es mayor que 0', () => {
        expect(numero>0).to.be.true;
        expect(numero<0).to.be.false;
    })
    it('La suma es de tipo númerico', () => {
        expect(sum([1,2,3])).to.be.a('number');
    });
    it('No es número', () => {
        expect(sum(['dd',2,true])).to.be.NaN;
    });

    it('Comprobar array con un elemento la suma tiene que ser igual a ese elemento', () => {
        expect(sum([3])).to.equal(3);        
    });

    it('Comprobar el resultado es la suma desde un array de strings numéricos', () => {
        expect(sum(['3','5'])).to.equal(8);       
    });

    it('Array numérico con números negativos', () => {
        expect(sum([5,-2,4])).to.equal(7);     
    });

    it('Array numérico con números negativos y strings con valor numérico', () => {
        expect(sum(['5',-2,4,'-1'])).to.equal(6);     
    });

});
