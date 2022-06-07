// Fetch
// url: "https://rickandmortyapi.com/api/charactor"

fetch("https://rickandmortyapi.com/api/charactor") 
.then(res => res.json())
.then(res => {
    for(let i = 0; i < res.results.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = res.results[i].name
        document.body.appendChild(h1)
    }
})
.catch(err => console.log(err))