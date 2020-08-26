new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        ativarAlerta(){
            alert("Ativar o alerta")
        },
        pegarValor (event){
            this.valor = event.target.value
        }
    }
})