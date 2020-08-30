<template>
  <div id="general">

        <p class="nameView"> <b> Learning program: </b> </p>
        <ul>
            <li v-for="item in items"
                :key="item.id">
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
        items: [{name: 'HTML/CSS', id: 1}, 
                {name: 'JavaScript', id: 2}, 
                {name: 'Database MySQL.', id: 3}, 
                {name: 'Database MongoDB', id: 4}, 
                {name: 'Vue.JS', id: 5}, 
                {name: 'React', id: 6}, 
                {name: 'Angular', id: 7},
                {name: 'Spring Framework', id: 8},
                {name: 'ORM layers. JPA. Hibernate', id: 9},
                {name: 'DevOps Tools & Services', id: 10},
                {name: 'TypeScript', id: 11},
                {name: 'JAVA', id: 12}]
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

