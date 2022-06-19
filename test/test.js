/*
En los test hay dos elemento principales
por un lado el describe y por otro el it

describe es un elemento u bloque que utilizamos para definir las pruebas relacionadas entre si
se podrán concatenar varias 

it es un elemento para definir una prueba concreta
*/

//bloque donde vamos a tener todas las pruebas
describe('suma',()=>{
    //suma de + con + tiene ser +
    it('suma de + con + tiene ser +',()=>{
        console.log(2+2);
        console.log(4);
    });
    //suma de + y >que el segundo numero con - tiene ser +
    it('suma de + y >que el segundo numero con - tiene ser +',()=>{
        console.log(4+(-1));
        console.log(3);
    });
});