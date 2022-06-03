const xhr =  new XMLHttpRequest();
xhr.open("GET" ,"https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let data = JSON.parse(xhr.responseText)
        displayData(data.results);
     } else if(this.readyState === 4 && this.status !== 200){
        console.log(xhr.responeText)
    }
}

function displayData(data) {
     data.forEach(function(element) {
        let newItem = document.createElement("h3");
        newItem.textContent = element.name;
        document.body.appendChild(newItem);
     } )
     }




