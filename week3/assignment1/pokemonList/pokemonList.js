const xhr =  new XMLHttpRequest()
xhr.open("GET" ,"https://pokeapi.co/api/v2/pokemon", true)
xhr.send()

xhr.opreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responeText)
        let data = JSON.parse(xhr.responseText)
    } //  else if(xhr.readyState === 4 && xhr.status !== 200){
    //     console.log(xhr.responeText)
    // }
}