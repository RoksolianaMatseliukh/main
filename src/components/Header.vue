<template>
  <div>

     <ul class="nav nav-pills location color">

            <router-link v-for="(page, index) in navigation"
                         :key="index"
                         :to="page.path"
                         tag="li"
                         class="nav-link cursor"
                         active-class="active" exact> 
                         {{ page.name }} 
            </router-link > 

    </ul> 
        
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          navigation: [{path: '/', name: 'Home'}, 
                       {path: '/Contacts', name: 'Contacts'}, 
                       {path: '/MyStudying', name: 'Studying'}]
      }
  }

}
</script>

<style scoped>

    .cursor {
        cursor: pointer;
    }

    .location {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;
    }

    .color {
        background-color: rgb(136, 199, 199);
    }

</style>