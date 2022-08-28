function post (){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res=>res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    for(post of data){
       const PElement = document.getElementById('postNow');
       const p = document.createElement('p');
       p.innerText = post.body;
       PElement.appendChild(p)
    }
}