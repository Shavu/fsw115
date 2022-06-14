// const { default: axios } = require("axios");

document.getElementById("submit").addEventListener("click" , getData);

function getData(){
    // console.log("clicked")
    axios.get("http://api.bryanuniversity.edu/travis_manners01/list/")
    .then(response => {
        console.log(response.data)
        for(let i = 0; i < response.data.length; i++){
            const array = response.data[i].title;
            const div = document.createElement("li")
            div.textContent = array;
            document.body.appendChild(div);
            div.addEventListener("click" , function(){
                div.style.textDecoration = "line-throught"
            });
            
        };
    })
    .catch(error => console.log(error));
}

var mRequest =  document.createElement("div")
mRequest.textContent = ""
document.body.appendChild(mRequest)






// var newP = document.createElement('p')
// newP.textContent = 'Bryan University is AWEOMSE!'
// document.body.appendChild(newP)