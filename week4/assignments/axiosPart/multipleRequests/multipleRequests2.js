// const { default: axios } = require("axios");

document.getElementById("submit").addEventListener("click" , getData);

function getData(){
    console.log("clicked")
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then(response => {
        console.log(response.data)
        for(let i = 0; i < response.data.length; i++){
            const array = response.data[i].description;
            const div = document.createElement("li")
            div.textContent = array;
            document.body.appendChild(div);
            div.addEventListener("click" , function(){
                div.style.textDecoration = "line-through"
            });
            
        };
    })
    .catch(error => console.log(error));
}

var mRequest =  document.createElement(div)
mRequest.textContent = ""
document.body.appendChild(mRequest)




// https://api.thecatapi.com/v1/images/search