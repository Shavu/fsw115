//Promise Chaining
//url: https://swapi.dev/api/people/1

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// axios.get("https://swapi.dev/api/people/1")
// .then(res => console.log(res.data))
// .catch(err => console.log(err))


// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//     const homeworlUrl = res.data.homeworld
//     console.log(homeworlUrl)
//     return axios.get(homeworlUrl)
// })
// .then(response => console.log(response))
// // .then(response => axios.get(response.data.films[0]))
// // .then(res => console.log(res.data))
// .catch(err => console.log(err))

//Async - Await
//url:https://swapi.dev/api/people/1

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

function displayDataToDom(homeworld){
    console.log(homeworld)
    const h1 = document.createElement("h1")
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    // const h2 = document.createElement("h2")
    // h2.textContent = film.data.title
    // document.body.appendChild(h2)

    // const p = document.createElement("p")
    // p.textContent = film.data.title
    // document.body.appendChild(p)
}



  // axios.get("https://swapi.dev/api/people/1")
    // const response = await axios.get("https://swapi.dev/api/people/1") 
    // console.log(result)

// .then (res => {
//     const homeworlUrl = res.data.homeworld
//     console.log(homeworlUrl)
//     return axios.get(homeworlUrl)
// })
// .then(response => axios.get(response.data.films[0]))
// .then(res => console.log(res.data))
// .catch(err => console.log(err))