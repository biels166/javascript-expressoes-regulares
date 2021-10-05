let nomeMarca = /[Nome:] (Nike|Adidas|Puma|Asics)/;

console.log(nomeMarca.test("Nome: abs"));
console.log(nomeMarca.test("Nome: Nike"));
console.log(nomeMarca.test("Nome: Adidas"));
console.log(nomeMarca.test("Asics"));