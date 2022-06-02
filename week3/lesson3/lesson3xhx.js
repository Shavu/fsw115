const xhr = new XMLHttpRequest() 
//examples => //Method     //url                        //Async?
    xhr.open("GET","https://swapi.dev/api/people" , true)
    // xhr.send()
    
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.reqsonseText)
            let data = JSON.parse(xhr.responseText)
            // console.log(data)
            // showData(data)  // NOT A GOOD Pratice 
            showData(data.results)
        } else if (xhr.readyState == 4 && xhr.status !== 200){
            console.log(xhr.responseText)
        }
    }

function showData(data){
    console.log(data)
    for( let i = 0; i < data.length; i++){
        const charactor  = document.createElement("h1")
        charactor.textContent = data[i].name
        // charactor.textContent = data.name
        document.body.appendChild(charactor)
    }
}
 
    

