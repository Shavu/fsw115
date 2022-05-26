Example of array of names. 
var powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan",
    "Billy Carnston"
]


 creating code for 1 name on the list. 
 var rangersList = document.getElementById("rangers")
 var newName = documnet.createElement("li")
 newName.textContecnt = powerRangers[0]  <== This will hardcode it. 
 rangerList.append(newName)


using a for loop (using .length allows you to add more names to the above list )
for (var i = 0; i < powerRangers.length; i++) {
    var newName = documnet.createElement("li")
 newName.textContecnt = powerRangers[i]  
 rangerList.append(newName)
}

now using inner.HTML
for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li> " + powerRangers[i] + "</li>" ]
}


Example of taking the above strings into  objects 
var powerRangers = [
   { name :"Jason Lee Scott", color: "Red"},
   { name : "Kimberly Hart", color: "Pink"},
   { name :"Zack Taylor", color: "Black"},
   { name : "Trini Kwan", color: "Yellow"},
   { name : "Billy Carnston", color: "Blue"},
   { name : "Tommy Oliver", color: "Green"}
]

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innertHTML += "<li> " + powerRangers[i] + "</li>" ]
}