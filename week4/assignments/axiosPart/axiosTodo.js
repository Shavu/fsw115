axios.get("http://api.bryanuniversity.edu/travis_manners01/list/")
.then(result => {
    result.data.forEach(function(e, i) {
        let paragraph = document.createElement("ol");
        document.body.appendChild(paragraph);

        let description = document.createElement("li");
        document.body.appendChild(description);

        paragraph.textContent = result.data[i].name;
        description.textContent = result.data[i].description;


        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through"
        });

        description.addEventListener('click', function() {
            description.style.textDecoration = "line-through"
        });

    });
})

.catch(error => console.log(error))





    // .then(response => console.log(response))