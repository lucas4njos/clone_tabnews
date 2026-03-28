const calculadora = require("../models/calculadora.js");

test("Somar 1 + 1 deve retornar 2", () => {
  const resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
});
