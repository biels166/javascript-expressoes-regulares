let criaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;
// o termo significa pelo menos >>>  /^(?=.(3,16)$)[......]/

console.log(criaUsuario.test("avila1606-"));
console.log(criaUsuario.test("av"));
console.log(criaUsuario.test("biels.16"));
console.log(criaUsuario.test("aquitemmaisdevintecaracteres"));
