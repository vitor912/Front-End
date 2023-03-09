<template>
    <div class="container">
        <H1>CONTADOR</H1>
        <hr>
        <p>Este é um projeto Simples de <br>Vue.Js</p>
        <div id="counter">
            <button name="menos" @click="decrement()"> - </button>
            <span id="currentNumber" :style="styleClass"> {{ currentNumber }} </span>
            <button name="mais" @click="increment()"> + </button>
        </div>
        <a href="https://github.com/vitor912">
            <img src="../assets/logotipo-do-github.png" alt="github vitor ribeiro" class="social__img">
            <span>GitHub Vitor Ribeiro</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'BaseContador',
    data: function() {
        return {
            styleClass: {color: 'black'},
            currentNumber: '0',
        }
    },

    methods: {
        increment() {
            this.currentNumberValor = this.currentNumber ++;
                        
            if (this.currentNumberValor >= -1) {
                this.styleClass.color="black";
            }
            
        },

        decrement() {
            this.currentNumberValor = this.currentNumber --;
                       
            if (this.currentNumberValor <= 0) {
                this.styleClass.color="red";                
            } 
            else {
                this.styleClass.color="black";
            }
            
        },

    }
}

</script>

<style>
body {
    background: salmon;
}
</style>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap");

* {
    font-family: "Open Sans", sans-serif;
}


.container {
    height: 500px;
    width: 360px;
    margin: 100px auto;
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    box-shadow: 5px 5px 3px rgb(0, 0, 0);
}

hr {
    margin: 0;
}

h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 0px;
    background-color: rgba(211, 211, 211, 0.5);
    backdrop-filter: blur(55px);
    border-radius: 20px 20px 0 0;
}

p {
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    margin-top: 60px;
    font-size: 18px;
}

#counter {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

#counter button {
    font-size: 30px;
    text-align: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgb(0, 0, 0);
    border-color: red;
    font-size: center;
    font-weight: bold;
}

#counter #currentNumber {
    display: flex;
    align-items: center;
    margin: 0 20px;
    font-size: 16pt;
}

a {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    margin: 150px auto;
    text-align: center;
    font-weight: bold;
    color: black;
}
</style>