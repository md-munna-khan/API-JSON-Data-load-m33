function loadPosts(){
   fetch ('https://jsonplaceholder.typicode.com/posts') 
   .then(res => res.json())    
   .then(data => displayPosts(data))  
}

function displayPosts (posts){
const postContainer = document.getElementById("posts-container")
    for(const post of posts){
       const postDiv = document.createElement('div')
       postDiv.classList.add("post")
       console.log(post)
       postDiv.innerHTML= `
       <h3>user${post.id}</h3>
       <h4>post:${post.title}</h4>
       <p>post Description: ${post.description}</p>
       
       `;
       postContainer.appendChild(postDiv)
    }
    
}
loadPosts();
