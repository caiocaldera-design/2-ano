  // 1. ARRAYS

  // 1.1 Array Simples
  const frutas = ["maçã", "banana", "laranja"];
    // 1.2 FIF0 (Fila)
    const fila = ["João", "Maria", "Pedro", "Davi"];
    fila.push("Ana"); 
    const primeiro = fila.shift(); // primeiro item
    console.log(primeiro);
    // 1.3 FILO (Pilha)
    const pilha = ["Dragon Ball", "Pokemon", "Hobbit"];
    pilha.push("Senhor dos Anéis");
    const livro = pilha.pop();
    console.log(livro);
    // 1.4 Buscar se existe
    const temLaranja = frutas.includes("laranja");
    const temManga = frutas.includes("manga");
    console.log(temLaranja);
    console.log(temManga);

    // 2. Sets (Conjuntos)
    // 2.1 Adicionando duplicados
    const matricula = new Set([1001, 1002, 1003,1004,1005,1001]);
    console.log([...matricula]);
    // 2.2 Adicionar item
    const cores = new Set(["Verde" , "Azul", "Vermelho"]);
    cores.add("Amarelo");
    cores.add("Preto");
    cores.add("Branco");
    console.log([...cores]);
    // 2.3 Buscar se Existe
    const temVerde = cores.has("Verde");
    const temAmarelo = cores.has("Amarelo");
    console.log(temVerde);
    console.log(temAmarelo);
    // 2.4 Converter array para Set
    const convidados = ["Alice", "Bob", "Charlie", "Alice", "Bob"];
    const convidadosSet = new Set(convidados);
    console.log([...convidadosSet]);
    // 3. Map (Mapas)
    // 3.1 Cadastro de Preços
    const produtos = new Map();
    produtos.set("Arroz", 5.99);
    produtos.set("Feijão", 8.99);
    produtos.set("Macarrão", 3.99);
    // 3.2 Buscando um valor
    const precoArroz = produtos.get("Arroz");
    console.log(precoArroz);
    