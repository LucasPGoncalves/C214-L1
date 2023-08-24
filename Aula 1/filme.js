class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = 0;
    }

    mostrarInfo(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Genero: ${this.genero}`)
        console.log(`Duracao: ${this.duracao} Mins`)

        if(this.assistido === false){
            console.log(`Voce ainda nao assistiu o filme`)
        } 
        else{
            console.log(`Filme ja assistido`)
        }

        if(this.avaliacao === 0){
            console.log(`Voce ainda nao avaliou o filme`)
        } 
        else{
            console.log(`Avaliacao: ${this.avaliacao}`)
        }
        
    }

    assistirFilme(){
        console.log(`Assistindo filme ${this.titulo}`)
        this.assistido = true;
    }

    avaliarFilme(nota){
        console.log(`Avaliando filme ${this.titulo} com nota ${nota}`)
        this.avaliacao = nota
    }
}
    filmes = [new Filme('Indiana Jones e o Marcador do Destino',2023,['Ação', ' Aventura'],154), 
              new Filme('Oppenheimer',2023,['Drama ', ' Historia', ' Biografia'],180),
              new Filme('O Senhor dos Anéis - O Regresso do Rei',2003,['Ação', ' Aventura', ' Drama'],201)]

    filmes.forEach(filme => {
        filme.mostrarInfo();
        console.log(`==========================================`)
        filme.assistirFilme();
        console.log(`==========================================`)
        filme.avaliarFilme(Math.floor(Math.random() * (11 - 1) + 1));
        console.log(`==========================================`)
        filme.mostrarInfo();
        console.log(`==========================================`)
    });

