const getData = async () =>{
    try{
        const response = await axios.get("https://swapi.dev/api/people/1")
        const homeworld = await axios.get("https://swapi.dev/api/planets/1/")
        const film = await axios.get('https://swapi.dev/api/films/1/')
        displayDataToDom(response, homeworld, film)
    }
    catch(error){
        console.log(error)
    }
}

getData()

function displayDataToDom(response, homeworld, film){
    // console.log(homeworld)

    const person = document.querySelector("#names")
    person.textContent = `Name: ${response.data.name}`
    document.body.appendChild(person)

    const home = document.querySelector("#homeworld")
    home.textContent = `Home World: ${homeworld.data.name}`
    document.body.appendChild(home)

    const epi = document.querySelector("#episode")
    epi.textContent = `Movie: ${film.data.title}`
    document.body.appendChild(epi)
    
}