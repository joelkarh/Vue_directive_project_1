const app = Vue.createApp({
data(){
    return{
        myName: "Joël",
        age: 24,
        fNumber: Math.random(),
        img:'gwagen.jpeg'
    }
    },
    methods:{
    myAge(){
        return this.age + 5
    },
        myNamer(){
 return this.myName
        }
}
});
app.mount('#assignment');