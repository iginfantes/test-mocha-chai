var expect = require('chai').expect; //hay que buscar en la librería como se hace

describe.only('Strings test', () => {
    const foo = 'bar';
    it ('Es igual al valor del string', () => {
        expect(foo).to.equal('bar');
    });
    it('Es de tipo string', () => {
        expect(foo).to.be.a('string');
    });
    it('Tiene una longitud de 3 carácteres', () => {
        expect(foo).to.have.length(3);
    });
    it('Encuentra / Incluye "ba" en la palabra', ()=> {
        expect(foo).to.include('ba');
    });
    it('NO incluye "fa" en la palabra', ()=> {
        expect(foo).not.include('fa');
    });
});

