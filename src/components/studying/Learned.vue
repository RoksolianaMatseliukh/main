<template>
  <div id="general">

        <p class="nameView"> <b> I have already learned: </b> </p>
        <ul>
            <li v-for="(item, index) in learnedItems"
                :key="index">
                {{ item.name }}
            </li>
        </ul>
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
</template>

<script>
export default {
  name: 'Program',
  data() {
      return {
        learnedItems: [{name: 'HTML/CSS'}, 
                       {name: 'JavaScript'}, 
                       {name: 'Database MySQL.'}, 
                       {name: 'Database MongoDB'}]
      }
  }
}
</script>

<style scoped>

    #general {
        margin-top: 10px;
    }

    .nameView {
        color: teal;
    }

    .btnMargin {
        margin-left: 10px;
    }
    
</style>

