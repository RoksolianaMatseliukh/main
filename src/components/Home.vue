<template>
  <div id="general">
        
    <h2> Some information: </h2>
    <hr>    
    <div id="infoView">
        
        <div>
            <img alt="my_photo" src="@/assets/myPhoto.png" class="pictue">
            <img alt="programing" src="@/assets/programing.png" class="pictue">
        </div>

        <div>
        <h4> Why Should I Learn Coding? </h4>
        <ul>
            <li v-for="(item, index) in items"
                :key="index"> 
                {{ item.name }} 
            </li>
        </ul>
        </div>

        <div>
        <h4> What Is Coding For You? </h4>
        <ul>
            <li v-for="(item, index) in additionalAdvantages"
                :key="index"> 
                {{ item.name }} 
            </li>
        </ul>
        </div>

        <div class="listView">
            <p class="nameView"> You can add something to this list: </p>
            <input type="text" 
                   placeholder="add something" 
                   v-model="itemDescription">
            <button class="btn btn-outline-info btnMargin" 
                    @click="add" > 
                    add 
            </button>
        </div>

        <div class="quoteView">
            <p> <i> “Everybody in this country should learn how to program a computer… because it teaches you how to think”
                    –Steve Jobs </i> </p>
            <p> <i> Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, 
                    basic computer programming is an essential skill to learn.
                    – Stephen Hawking </i> </p>
        </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
      return {
        items: [{name: 'Attractive Salary and Multiple Career Opportunities'}, 
                {name: 'Develop Problem-Solving and Logical Skill'}, 
                {name: 'Technologies Are Ruling the World'}, 
                {name: 'Coding is Creativity'}, 
                {name: 'Develop Interpersonal Skills'}, 
                {name: 'Understanding of Both Sides of the Equation in Business'}, 
                {name: 'Empowering and Life-Changing Experience'}],
        additionalAdvantages: [],
        itemDescription: null,
        idItem: 7
      }
  },
  methods: {
    getAdvantages() {
      this.$http.get('https://itadvantages-a1007.firebaseio.com/advantages.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        for(let key in res) {
          this.additionalAdvantages.push({...res[key]});
        }
      })
    },
    async add() {
        try {
            await this.$http.post('https://itadvantages-a1007.firebaseio.com/advantages.json', {name: this.itemDescription});
                  this.itemDescription = null;
        } catch(error) {
            console.error(error);
        } finally {
            this.additionalAdvantages = [];
            this.getAdvantages();
        }       
    }
  }, 
  beforeMount() {
        this.getAdvantages();
  } 
}
</script>

<style scoped>

    #general {
        padding: 15px;
    }

    .pictue {
        width: 280px;
        height: 290px;
        margin-right: 10px;
        margin-bottom: 15px;
        transition: 0.8s;
    }

    .pictue:hover {
        transform: scale(1.05);
        transition: 0.8s;
    }

    #infoView {
        display: flex;
        flex-direction: column;
    }

    .listView {
        border-bottom: 1.3px solid rgb(54, 134, 155);
        padding: 10px;
        margin-bottom: 30px;
    }

    .quoteView {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .btnMargin {
        margin-left: 10px;
    }

    .nameView {
        color: rgb(54, 134, 155);
        margin: 5px;
    }

</style>
