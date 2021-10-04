let soMaiuscula = /[A-Z]/;

console.log(soMaiuscula.test("biel"));
console.log(soMaiuscula.test("BIEL"));
console.log(soMaiuscula.test("biEl"));
console.log(soMaiuscula.test("Biel"));

console.log(soMaiuscula.exec("biel"));
console.log(soMaiuscula.exec("BIEL"));
console.log(soMaiuscula.exec("biEl"));
console.log(soMaiuscula.exec("Biel"));