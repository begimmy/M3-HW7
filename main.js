const userWrapper = document.getElementById('users-wrapper');
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data)=>{
            data.forEach((item)=>{
                userWrapper.innerHTML +=
                   `<div class='column' >
                    
                    <h2 class="user-card-title">Name: ${item.name}</h3>
                    <p class="user-card-text">Username: <span class="bold">${item.username}</span></p>
                    <p class="user-card-text">Email: <span class="bold">${item.email}</span></p>
                    <p class="user-card-text">ID: <span class="bold">${item.id}</span></p>
                    <hr>
                    
                </div>`
            })
        })