const Pessoa = function(){
    this.pai = [
                    {
                        nome : null,
                        filhos : []
                    }
                ]
    


    this.addPai = function() {
        addPai = prompt("insira o nome do pai");
        this.pai.push({nome : addPai, filhos : []});
        return(
            /*
            console.log("iniciando add"),
            console.log("Pai esta setado como "+ this.pai)   
            */
           console.log("iniciando add pai")
        );
    }

    this.addFilho = function(){
        qualPai = prompt("insira o nome do pai");
        addFilho = prompt("insira o nome do filho");
        
        indicePai = pessoa.pai.findIndex(e => e.nome === qualPai);
        pessoa.pai[indicePai].filhos.push(addFilho);


    }
    
}

const pessoa = new Pessoa();

