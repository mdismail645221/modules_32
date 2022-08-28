function fetchButton (){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

function displayUser (data){
    for( let user of data){
        // console.log(user.name)
        const ul = document.getElementById('name');
        const li = document.createElement('li');
        li.innerText = user.name 
        ul.appendChild(li)
    }
}

