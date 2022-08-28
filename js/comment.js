function commetApi (){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then (data => commentsDisplay(data))
}

function commentsDisplay (data){
    const commentPost = document.getElementById('comment-post');
    console.log(commentPost)
    for(commentData of data){
        const div = document.createElement('div');
        div.style.backgroundColor = 'skyBlue'
        div.style.padding = '10px'
        div.style.marginBottom = '10px'
        div.innerHTML = `
            <h1>user id: ${commentData.id}</h1>
            <h3>name:${commentData.name}</h3>
            <p>email:${commentData.email}</p>
        `;
        commentPost.appendChild(div)
    }
}
commetApi()