<template>
  <div id="general">

    <h2> My studying: </h2>
    <hr> 

    <div id="logoNameView">
        <img alt="programing" src="@/assets/okten.png" class="pictue">
        <h5> I'm studying at OKTEN WEB UNIVERSITY now. </h5>
    </div>

    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'MyStudying',
}
</script>

<style scoped>

    #general {
        padding: 15px;
    }

    #logoNameView {
        display: flex;
        flex-direction: row;
    }

    .pictue {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        transition: 0.8s;
    }

    .pictue:hover {
        transform: scale(1.05);
        transition: 0.8s;
    }

</style>