new Vue({
    el:'#desafio',
    data:{
        nome: 'Felipe Andrade',
        idade: 24,
        link:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    methods:{
        multiplicar: function(){
            return valor = this.idade * 3
        },

        numeroAleatorio: function(){
            return Math.random(0,1)
        }
    }
})