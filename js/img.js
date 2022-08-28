function photo (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

function displayPhoto (data){
    const imgPostArea = document.getElementById('img-post-area');
    for(let photo of data){
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>User ID: ${photo.id}  </h3>
            <P>Title: ${photo.title} </P>
            <P>Title: ${photo.url} </P>
            <img src="${photo.thumbnailUrl}" alt="">
        `;
        imgPostArea.appendChild(div)
    }
}

photo()