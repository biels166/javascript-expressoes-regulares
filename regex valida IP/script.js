let validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/; 
//minimo 1 e no máximo3.

console.log(validaIP.test("255.255.255.255"));
console.log(validaIP.test("10.10.10.10"));
console.log(validaIP.test("1.1.1.1"));
console.log(validaIP.test("abc.255.255.255"));
console.log(validaIP.test(" .255.255.255"));
console.log(validaIP.test("255. .255.255"));
console.log(validaIP.test("100.255.255.1"));
console.log(validaIP.test("255.255.0000.255"));
console.log(validaIP.test("255.100255.255"));