const getData = async () => {
    let response;
    let homeworld;
    // let film; 
    try{
        response = await axios.get("https://swapi.dev/api/people/1") 
         homeworld = await axios.get(response.data.homeworld)
         film = await axios.get(homeworld.data.films[0])
         displayDataToDom(homeworld, film)
    }
    catch(error){
        console.log(error)
    }
  
}
getData()

function displayDataToDom(homeworld) {
    console.log(homeworld)
    const h1 = document.createElement("h1")
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)
}