const { default: axios } = require("axios");


// axios.get("https://api.thecatapi.com/v1/images/search")
function toDoList(res){    res.data.forEach(function(e, i) {
    let title = document.createElement("ol");
    document.body.appendChild(title);

    let description = document.createElement("li");
    document.body.appendChild(description);

    title.textContent = res.data[i].name;
    description.textContent = res.data[i].description;


    title.addEventListener('click', function() {
        title.style.textDecoration = "line-through"
    });

    description.addEventListener('click', function() {
        description.style.textDecoration = "line-through"
    });

});
}
// .catch(error => console.log(error))
//     console.log(res)
// }
function cat2Api(catApi){
    const url = catApi.data[0].url
    axios.get(url)
}

async function getData() {
    const catApi = axios.get('https://api.thecatapi.com/v1/images/search');
    const bryanApi = axios.get("http://api.bryanuniversity.edu/travis_manners01/list/");
    await axios.all([catApi, bryanApi]).then(axios.spread(function(res1, res2) {
        cat2Api(res1)
        toDoList(res2)
    
      }));
}
getData()



//     result.data.forEach(function(e, i) {
//         let title = document.createElement("ol");
//         document.body.appendChild(title);

//         let description = document.createElement("li");
//         document.body.appendChild(description);

//         title.textContent = result.data[i].name;
//         description.textContent = result.data[i].description;


//         title.addEventListener('click', function() {
//             title.style.textDecoration = "line-through"
//         });

//         description.addEventListener('click', function() {
//             description.style.textDecoration = "line-through"
//         });

//     });
// })
// .catch(error => console.log(error))





    // .then(response => console.log(response))