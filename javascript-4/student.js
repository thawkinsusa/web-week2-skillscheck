//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-4/index.html. You should see an input and button that says "Add Item"

//////////////////Step 1////////////////////
// Create a new array called 'faveColors' and set it your three favorite colors as strings.

// CODE HERE
let faveColors = ['red', 'white', 'blue']
//////////////////Step 2////////////////////
// Create an object called 'me' that has these keys: firstname, superHeroName, homeTown, superPowers, superPowerXP, profileImage. 

// The firstName key should be your name as a string. 

// The superHeroName key should be something fun, feel free to jazz it up e.g. "Bodacious Bryan". 

// The homeTown key should be your home town. 

// The superPowers key should be an array of your three super powers as a string. e.g. ['skateboarding', 'crime fighting', 'crime inciting']

//  The superPowerXP key will be a method that returns a random number between 1-100. Use Math.floor(Math.random() * 100) + 1 

// The profileImage key will return this url `https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg`.

// CODE HERE
let me = {
firstName: 'Tyler',
superHeroName: 'Superdewd',
homeTown: 'slc',
superPowers: ['skateboarding', 'uppercut', 'sexyness'],
superPowerEXP(){
    Math.floor(Math.random() * 100) + 1
    return me.superPowerXP
},
profileImage:"https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg"
}
//////////////////Step 3////////////////////
// Create three variables to hold some data off your me object. The first variable should be 'regularName' that is the value of your firstName on the me objece next variable is 'superName' which is the value of superHeroName on the me object. Last is 'homeTown' which will be the value of homeTown on the me object

// CODE HERE
let regularName = me.firstName
let superName = me.superHeroName
let homeTown = me.homeTown

//////////////////Step 4////////////////////
//Create a function called 'setColor' that takes in one param called arr. Just to make sure that we only ever have three colors, use splice to trim the array to 3 colors. 

// Next, create a for loop to loop over the array. If any of the colors you chose is 'blue', change it's value to '#4D4DFF' which is just a m
//ore appealing color of blue. Outside of the for loop but still inside of setColor, invoke the function called background which will take in three arguments. 
//These arguments should be each item of your array. This is a function we created for you to set the background colors.

// CODE HERE
function setColor(arr){
    for(let i = 0; i<arr.length; i++){
    if(arr == 'blue'){
        return '#4D4DFF'
    }
    background(item,item2,item3)
    }
}

//////////////////Step 5////////////////////
//Create a function called 'setPowers' that takes in arr as a parameter. Loop over the arr param and run a function called createLi(), which will take each item of the array as an agument.
// The createLi function is a function we created to set the data on the screen. It outside the scope of this project

// CODE HERE

function setPowers(arr){
for(let i = 0; i<arr.length; i++){
    createLi(i)
}
}
//////////////////Step 6////////////////////
//Lastly, create a function called redactInfo that will take in an obj as a paramter. Let's imagine our super hero needs
// to go undercover and we need to remove all info about them. That is what this function will do.
// Loop over the object and change each keys value to 'redacted'.
// Outside of the loop but still in the redactInfo function, run the function redacted() which is a function we created that will update the text on the screen.


function redacted(me){
    for(let key in me){
      return key = 'redacted'
    }
    redacted()
  }
// CODE HERE