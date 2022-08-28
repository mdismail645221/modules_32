// function post (){
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//     .then(res=>res.json())
//     .then(data => displayPost1(data))
// }


// function displayPost1(data){
//     for(post of data){
//         console.log(post)
//         const section = document.getElementById('post-container');
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//             <h3>user id : ${post.id} </h3>
//             <h5>title : ${post.title}</h5>
//             <p>description:${post.body} </p>

//         `;
//         section.appendChild(div)
//     }
// }

console.log('hellow')

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);

