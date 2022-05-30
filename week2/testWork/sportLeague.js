// fetch('https://api-football-standings.azharimm.site/leagues')
//   .then(response => response.json())
//   .then(data => document.write(data));

// const Nteams  = ["Steelers" , "Browns" , "Bengals", "Ravens", "OldBrowns"];

// function teams (Nteams) {
//   return Nteams.length[i];
  
// }
// console.log(Nteams)

// const turtles = ["Raphael", "Michelangelo", "Leonardo", "Donatello"]

// function turtlePower(turtles) {
//   return turtles.length[i]
// }
// document.getElementById("demo").innerHTML = turtles.length();


const person2 = {
	firstName: "Travis",
    lastName: "Manners",
    age: "53",
    id: 4522,
    fullName : function() { 
		return this.firstName + " " + this.lastName + " " + this.age;   
   }
}

// Display data from the object:
document.getElementById("demo").innerHTML = person2.fullName();

  
