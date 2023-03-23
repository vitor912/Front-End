<template>
  <body>
    <div id="calculator">
      <input type="text" v-model="display" id="display" disabled>

      <button @click="ac" id="ac" class="operator">AC</button>
      <button @click="de" id="de" class="operator">DE</button>
      <button @click="point" id="." class="operator">.</button>
      <button @click="divide" id="/" class="operator">/</button>
      <br>
      <button @click="buttons('7')" id="7">7</button>
      <button @click="buttons('8')" id="8">8</button>
      <button @click="buttons('9')" id="9">9</button>
      <button @click="multiply" id="*" class="operator">*</button>
      <br>
      <button @click="buttons('4')" id="4">4</button>
      <button @click="buttons('5')" id="5">5</button>
      <button @click="buttons('6')" id="6">6</button>
      <button @click="decrease" id="-" class="operator">-</button>
      <br>
      <button @click="buttons('1')" id="1">1</button>
      <button @click="buttons('2')" id="2">2</button>
      <button @click="buttons('3')" id="3">3</button>
      <button @click="add" id="+" class="operator">+</button>
      <br>
      <button @click="buttons('00')" id="00">00</button>
      <button @click="buttons('0')" id="0">0</button>
      <button @click="equal" id="=" class="equal operator">=</button>
      <br>
    </div>
  </body>
</template>


<script>
export default {
  name: `Calculator`,
  data() {
    return {
      display: '',
      id: false,
      numberAnt: null,
      operato: null,
    };
  },

  methods: {
    buttons(btn) {
      if (this.id) {
        this.display = '';
        this.id = false;
      }
      this.display = `${this.display}${btn}`;
      console.log('Click Buttons');
    },

    ac() {
      this.display = '';
      console.log('ac');
    },

    de() {
      this.display = this.display.slice(0, -1);
      console.log('de');
    },

    arrowValue() {
      this.numberAnt = this.display;
      this.id = true;
    },

    point() {
      if (this.display.indexOf('.') === -1) {
        this.buttons('.');
        console.log('ponto');
      }
    },

    equal() {
      this.display = `${this.operato(
        parseFloat(this.numberAnt),
        parseFloat(this.display),
        console.log('equal')
       )
      }`;
      this.numberAnt = null;
    },

    add() {
      this.operato = (num1, num2) => num1 + num2;
      this.arrowValue();
    },    
    
    divide() {
      this.operato = (num1, num2) => num1 / num2;
      this.arrowValue();
    },

    multiply() {
      this.operato = (num1, num2) => num1 * num2;
      this.arrowValue();
    },

    decrease() {
      this.operato = (num1, num2) => num1 - num2;
      this.arrowValue();
    },
  },
}
</script>

<style>
body {
  position: relative;
  text-align: center;
  margin: 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* height: 100vh; */
}

#calculator {
  position: absolute;
  max-width: 360px;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

#display {
  width: 360px;
  height: 56px;
  font-size: 20px;
  text-align: right;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 2px;
  color: #e0e1dd;
  background-color: rgba(13, 27, 42, 0.3);
  border: none;
  box-sizing: border-box;
}

.operator {
  color: #8956f1;
}

#ac {
  color: #cb80ff;
}

.equal {
  width: calc(50% - 10px);
}

button {
  width: calc(25% - 10px);
  height: 50px;
  font-size: 20px;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  float: left;
  background-color: rgb(13, 27, 42);
  color: #e0e1dd;
  box-shadow: -1px 1px 30px -5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 1px 30px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 1px 30px -5px rgba(0, 0, 0, 0.2);
}

button :hover {
  cursor: pointer;
}

button :active {
  transform: scale(1.05);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.19), 0 1.5px 1.5px rgba(0, 0, 0, 0.23);
}
</style>