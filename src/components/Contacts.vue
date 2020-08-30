<template>
  <div id="general">

    <h2> My contacts: </h2>
    <hr>
    <div id="contactsView">
        <div>
            <p> <b> name: </b> Roksoliana Matseliukh </p>
            <p> <b> age: </b> 26 </p>
            <p> <b> mail: </b> matseliukhroksoliana100@gmail.com </p>
            <address> <b> address: </b> Lviv, Ukraine </address>
        </div>

        <div id="secondBlock">
            <p class="dreamView"> <b> But my dream to live in London: </b> </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6167.894825300912!2d-0.13259972559330827!3d51.507098418291264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3RltGP!5e0!3m2!1suk!2sua!4v1598529483038!5m2!1suk!2sua" 
                    width="500" 
                    height="400" 
                    frameborder="0" 
                    style="border:0;" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0">
            </iframe>
        </div>
    </div> 
    <router-link class="btn btn-info" 
                 tag="button" 
                 :to="{name: 'Home'}"> 
                 go home 
    </router-link>
    
  </div>
</template>

<script>

export default {
  name: 'Contacts',

}
</script>

<style scoped>

    #general {
        padding: 15px;
    }

    #contactsView {
        display: flex;
        flex-direction: row;
    }

    #secondBlock {
        margin-left: 100px;
    }

    .dreamView {
        background-color: teal;
        color: white;
        padding: 5px;
    }

</style>
