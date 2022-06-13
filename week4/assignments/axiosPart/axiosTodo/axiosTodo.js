axios.get("http://api.bryanuniversity.edu/travis_manners01/list/")
.then(result => {
    result.data.forEach(function(e, i) {
        let title = document.createElement("ol");
        document.getElementById("name").appendChild(title);
        
        let description = document.createElement("ol");
        document.getElementById("name").appendChild(description);

        title.textContent = result.data[i].name;
        description.textContent = result.data[i].description;

        title.addEventListener('click', function() {
            title.style.textDecoration = "line-through"
        });

        description.addEventListener('click', function() {
        description.style.textDecoration = "line-through"
        });

    });
})
.catch(error => console.log(error))