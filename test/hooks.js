//hooks
/*
Antes de las pruebas o después podemos inicializar variables
Podemos resetear alguna consulta de bbdd

Al final de todas las pruebas con el after podamos hacer que se resetee para que cuando pasemos a otro
bloque sean utilizadas
*/
describe.only("Hooks", () => {
  before(() => {
    console.log("before se ejecuta al inicio UNA VEZ");
  });
  after(() => {
    console.log("after se ejecuta al FINAL DE TODAS LAS PRUEBAS");
  });
  beforeEach(() => {
    console.log("beforeEach se ejecuta al ANTES DE CADA IT");
  });
  afterEach(() => {
    console.log("afterEach se ejecuta al DESPUÉS DE CADA IT");
  });

  it('prueba1',()=>{
    console.log('prueba1');
  });
  it('prueba2',()=>{
    console.log('prueba2');
  });
});
