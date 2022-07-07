// Contains a GET request
// Uses a promise based client (node.js, fetch, Axios, or custom promises)
function getData() {
    axios.get('http://api.bryanuniversity.edu/jessicasmith/list/')
        .then(response => createToDo(response.data))
        .catch(error => console.log(error))
}

getData();
// Fully styled and responsive


function createToDo(data) {
    clearData();
    for (let i = data.length - 1; i >= 0; i--) {
        let item = document.createElement('li');
        item.textContent = data[i].description;
        item.setAttribute('id', data[i]._id);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let updateButton = document.createElement('button');
        updateButton.textContent = 'Update';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        item.appendChild(checkbox);
        item.appendChild(deleteButton);
        item.appendChild(updateButton)

        document.querySelector('#oList').appendChild(item);
        checkbox.addEventListener('click', e => {
            let parentNode = e.target.parentNode;
            if (e.target.checked) {
                parentNode.style.textDecoration = 'line-through';
                axios.put(`http://api.bryanuniversity.edu/jessicasmith/list/${parentNode.id}`, { isComplete: true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                e.target.parentNode.style.textDecoration = 'none';
                axios.put(`http://api.bryanuniversity.edu/jessicasmith/list/${parentNode.id}`, { isComplete: false })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        });

        // Contains a DELETE request

        deleteButton.addEventListener('click', (e) => {
            let toDelete = e.target.parentNode;
            axios.delete(`http://api.bryanuniversity.edu/jessicasmith/list/${toDelete.id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        });
        updateButton.addEventListener('click', (e) => {
            let itemId = e.target.value;
            if (data[i].isComplete === false) {
                updateText = " Update Complete";
            } else {
                updateText = " Update Incomplete";
            }
            updateButton.id = data[i]._id;
            updateButton.value = data[i].isComplete;
            axios.put(`http://api.bryanuniversity.edu/jessicasmith/list/${itemId.id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        });
    };

    function clearData() {
        const el = document.getElementById('oList');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }


    let todoForm = document.requestForm;
    todoForm.addEventListener('submit', e => {
        e.preventDefault();
        let newTodo = {
            name: todoForm.name.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            isComplete: false
        }

        todoForm.name.value = "";
        todoForm.price.value = "";
        todoForm.description.value = "";

        // Contains a POST request

        axios.post(`http://api.bryanuniversity.edu/jessicasmith/list/`, newTodo)
            .then(res => getData())
            .catch(err => console.log(err))
    });

    // Contains a PUT request

    let newData = document.requestForm;
    newData.addEventListener('submit', e => {
        e.preventDefault();
        let updateTodo = {
            name: newData.name.value,
            price: newData.price.value,
            description: newData.description.value,
            isComplete: false
        }
        newData.name.value = "";
        newData.price.value = "";
        newData.description.value = "";

        let itemId = e.target.value;
        let itemCompleted = e.target.value;
        let isComplete = null;
        itemCompleted = "false" ? (isComplete = true) : (isComplete = false);

        axios.put(`http://api.bryanuniversity.edu/jessicasmith/list/${itemId}`, updateTodo)
            .then(res => getData())
            .catch(err => console.log(err))
    });
};
// Uses 2 different APIs
// Use 1 api to populate some portion of another api(must not be entirely hardcoded)

function fetchData(){
    let query = document.querySelector("#queryType").value;
    let item = document.querySelector("#itemID").value;
    getFromSWAPI(query, item);
};

function getFromSWAPI(query, item) {
    fetch(`https://swapi.dev/api/${query}/${item}`)
    .then(response => response.json())
    .then(data => updateInfo(data))
    .catch(err => console.warn(err))
}

function updateInfo(data) {
    const keys = Object.keys(data);
    document.querySelector("#dataLabel1").innerText = keys[0].replace(/_/g, " ");
    document.querySelector("#dataValue1").innerText = data[keys[0]];
    document.querySelector("#dataLabel2").innerText = keys[5].replace(/_/g, " ");
    document.querySelector("#dataValue2").innerText = data[keys[5]];
    console.log(data)
};