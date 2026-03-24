Dado o conjunto de informações abaixo e o que foi aprendido nas aulas anteriores, faça as seguintes tarefas:

const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];

// Criar set com produtos únicos
const array_produtos = vendasRaw.map(venda => venda.produto)
const set_produtos = new Set(array_produtos);
console.log([...set_produtos]);
// Criar Map produto => preço
const produtosMap = new Map();
vendasRaw.forEach(item => {
    produtosMap.set(item.produto, item.preco);
});
console.log(produtosMap.get('Mousepad'));
// Soma das vendas
let totalCompra = 0;
for (let preco of produtosMap.values()) {
    totalCompra += preco;
}
// 1. Criar um set contendo itens únicos de produtos:
// 	Dica: use o método map usado no exemplo anterior de i18n para transformar o map em set.
//   Saída: 9 ['Teclado', 'Mouse', 'Monitor', 'Mousepad']

2. Crie um Map associando produto a preço:
	Dica: use o forEach aprendido na aula de iterações.
  Dica: para acesar o produto e preço use item.produto e item.preco
  
3. Calcule o total da compra.
	Dica: use o for of para iterar nos itens.
  Saída: 1160
  
  
  QUESTAO 1 : const produtosUnicos = new Set(vendasRaw.map(item => item.produto));

console.log([...produtosUnicos]);
// ['Teclado', 'Mouse', 'Monitor', 'Mousepad']



QUESTAO 2: const mapaProdutos = new Map();

vendasRaw.forEach(item => {
    mapaProdutos.set(item.produto, item.preco);
});

console.log(mapaProdutos);
// Map(4) { 'Teclado' => 150, 'Mouse' => 80, 'Monitor' => 900, 'Mousepad' => 30 }  



QUESTAO 3 : let total = 0;

for (const item of vendasRaw) {
    total += item.preco;
}

console.log(total);
// 1160