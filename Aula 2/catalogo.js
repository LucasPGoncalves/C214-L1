const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = 0;
    }

    mostrarInfo() {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Genero: ${this.genero}`)
        console.log(`Duracao: ${this.duracao} Mins`)

        if (this.assistido === false) {
            console.log(`Voce ainda nao assistiu o filme`)
        }
        else {
            console.log(`Filme ja assistido`)
        }

        if (this.avaliacao === 0) {
            console.log(`Voce ainda nao avaliou o filme`)
        }
        else {
            console.log(`Avaliacao: ${this.avaliacao}`)
        }
    }
}

class Catalogo {

    constructor() {
        this.listaDeFilmes = []
    }

    addFilme() {
        rl.question("Insira o Título do filme: ", (titulo) => {
            rl.question("Insira o ano de lançamento do filme: ", (ano) => {
                rl.question("Insira o gênero do filme: ", (genero) => {
                    rl.question("Insira a duração do filme: ", (duracao) => {
                        const filme = new Filme(titulo, ano, genero, duracao);
                        this.listaDeFilmes.push(filme)
                        exibirMenu()
                    });
                });
            });
        });
    }

    assistirFilme(filmeAssistido) {
        let index = this.findFilme(filmeAssistido)
        if (index !== -1) {
            console.log(`Assistindo filme ${this.listaDeFilmes[index].titulo}`)
            this.listaDeFilmes[index].assistido = true;
        } else {
            console.log("Filme não encontrado no Catalogo.");
        }
    }

    avaliarFilme(filmeAval, nota) {
        let index = this.findFilme(filmeAval)
        if (index !== -1) {
            console.log(`Avaliando filme ${this.listaDeFilmes[index].titulo} com nota ${nota}`)
            this.listaDeFilmes[index].avaliacao = nota
        } else {
            console.log("Filme não encontrado no Catalogo.");
        }
    }

    findFilme(tituloFilme) {
        let index = -1;
        for (let i = 0; i < this.listaDeFilmes.length; i++) {
            if (this.listaDeFilmes[i].titulo === tituloFilme) {
                index = i;
                break;
            }
        }
        return index;
    }

    mostrarCatalogo() {
        if (this.listaDeFilmes.length === 0) {
            console.log("Catalogo Vazio")
        } else {
            this.listaDeFilmes.forEach(filme => {
                console.log('=======================')
                filme.mostrarInfo()
            });
        }
    }
}

var catalogo = new Catalogo()

function exibirMenu() {
    console.log("==== Menu ====");
    console.log("1. Adicionar um filme");
    console.log("2. Marcar um filme como assistido");
    console.log("3. Avaliar um filme");
    console.log("4. Exibir lista de filmes");
    console.log("5. Sair do programa");

    rl.question('Entre com uma opcao: ', (input) => {
        const op = parseInt(input);

        if (op === 1) {
            catalogo.addFilme()
        } else if (op === 2) {
            rl.question("Digite o título do filme assistido: ", (filmeAssistido) => {
                catalogo.assistirFilme(filmeAssistido);
                exibirMenu()
            });
        } else if (op === 3) {
            rl.question("Digite o título do filme a avaliar: ", (filmeAval) => {
                rl.question("Digite a nota do filme: ", (notaFilme) => {
                    catalogo.avaliarFilme(filmeAval, notaFilme);
                    exibirMenu()
                });
            });
        } else if (op === 4) {
            catalogo.mostrarCatalogo()
            exibirMenu()
        } else if (op === 5) {
            console.log("Saindo do programa")
            rl.close()
        } else {
            console.log("Opcao invalida")
            exibirMenu()
        }
    });
}
exibirMenu()
