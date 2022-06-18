
function getData() {
    axios.get('http://api.bryanuniversity.edu/travis_manners01/list/')
        .then(response => createToDo(response.data))
        .catch(error => console.log(error))
}

getData();


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
                axios.put(`http://api.bryanuniversity.edu/travis_manners01/list//${parentNode.id}`, { isComplete: true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                e.target.parentNode.style.textDecoration = 'none';
                axios.put(`http://api.bryanuniversity.edu/travis_manners01/list/${parentNode.id}`, { isComplete: false })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        });
        deleteButton.addEventListener('click', (e) => {
            let toDelete = e.target.parentNode;
            axios.delete(`http://api.bryanuniversity.edu/travis_manners01/list/${toDelete.id}`)
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
            axios.put(`http://api.bryanuniversity.edu/travis_manners01/list/${itemId.id}`)
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

        axios.post(`http://api.bryanuniversity.edu/travis_manners01/list/`, newTodo)
            .then(res => getData())
            .catch(err => console.log(err))
    });

    //PUT Data

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

        axios.put(`http://api.bryanuniversity.edu/travis_manners01/list/${itemId}`, updateTodo)
            .then(res => getData())
            .catch(err => console.log(err))
    });
};