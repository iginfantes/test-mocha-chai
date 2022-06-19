var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        expect(String(array)).to.equal('1,2,4,6,8');
    });

    it('Contiene el valor "2" el array', () => {
        expect(array).to.include(2);

    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect(array).to.include.members([1,1,1,4]); //con una condicidencia es valido
        
    });
    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([8,1, 2, 4, 6]); //comprueba que tiene los mismos miembros
    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect(array).to.have.lengthOf(5);
        expect(array.length).to.equal(5);
    });
});
