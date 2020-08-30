<template>
  <div id="general">

        <p class="nameView"> <b> Calculator </b> </p>

        <input type="number" 
               placeholder="enter number" 
               v-model="number1">
        <input type="number" 
               placeholder="enter number" 
               v-model="number2" class="inpMargin">
        <button class="btn btn-dark"> calculate </button>

        <p v-if="number1 || number2"
            class="numbersView"> 
            <b> first number: {{ number1 }} | second number: {{ number2 }} </b> 
        </p>

        <p v-if="number1 && number2"> addition: {{ (+number1) + (+number2) }} </p>
        <p v-if="number1 && number2"> subtraction: {{ number1 - number2 }} </p>
        <p v-if="number1 && number2"> multiplication: {{ number1 * number2 }} </p>
        <p v-if="number1 && number2"> division: {{ number1 / number2 }} </p>
        <p v-if="number1"> square root of first number: {{ Math.sqrt(number1) }} </p>
        <p v-if="number2"> square root of second number: {{ Math.sqrt(number2) }} </p>

        <div class="allBtnView">
            <router-link class="btn btn-info" 
                         tag="button" 
                         :to="{name: 'ListStart'}"> 
                         back 
            </router-link>
            <router-link class="btn btn-info btnMargin" 
                         tag="button" 
                         :to="{name: 'Home'}"> 
                         go home 
            </router-link>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Program',
  data() {
      return {
          number1: null,
          number2: null
      }
  }
}
</script>

<style scoped>

    .inpMargin {
        margin-left: 7px;
        margin-right: 7px;
    }

    .numbersView {
        margin-top: 10px;
    }

    .nameView {
        color: teal;
        border-bottom: 1px solid teal;
    }

    .allBtnView {
        margin-top: 15px;
    }

    .btnMargin {
        margin-left: 10px;
    }
    
</style>
