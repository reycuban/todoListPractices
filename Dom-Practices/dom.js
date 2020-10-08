//This is how we get acces to a button, adding events
//Look how i have to use an index cuz the event returns an arry
//let button = document.getElementsByTagName('button')[0];
//button.addEventListener('click', function(){
    //console.log('you just click!');
//});

let button = document.getElementById("enter");
let input = document.getElementById("userIn");
let ul = document.querySelector("ul");


function inputLength() {
   return input.value.length;
}

function createListEl (){
       //creates an Li so we can use to add info to todoList
       let li = document.createElement('li');
       //we pass on to li the information of the input,value means that the user add to the list
       li.appendChild(document.createTextNode(input.value));
       ul.appendChild(li); 
       //This make sure that resets the info
       input.value = "";
}

button.addEventListener("click", function(){
    if(inputLength() > 0) {
        createListEl();
    }
})

input.addEventListener("keyup", function(event){
    if(input.value.length > 0 && event.keyCode === 13) {
        createListEl();
    }
});















