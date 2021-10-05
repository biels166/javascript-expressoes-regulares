let finalID = /ID$/; //Considera se o ultimo digito for um espaço.
let numID = /\d+ID\b/; //Desconsidera se o ultimo digito for um espaço

console.log(numID.test("biel"));
console.log(numID.test("ID00"));
console.log(numID.test("biel123"));
console.log(numID.test("abcID "));
console.log(numID.test("biel123ID"));
console.log(numID.test("016ID"));
console.log(numID.test("abcID"));

console.log("\n");

console.log(finalID.test("biel"));
console.log(finalID.test("ID00"));
console.log(finalID.test("biel123"));
console.log(finalID.test("abcID "));
console.log(finalID.test("biel123ID"));
console.log(finalID.test("016ID"));
console.log(finalID.test("abcID"));