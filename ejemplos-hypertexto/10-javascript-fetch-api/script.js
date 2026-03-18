// JavaScript Fetch API - External Script

// 1. GET Simple - Fetch User
function fetchUser() {
    let div = document.getElementById('result-user');
    div.innerHTML = '<p class="loading">⏳ Cargando...</p>';

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            console.log('Status:', response.status);
            if (!response.ok) throw new Error('Error en la solicitud http');
            return response.json();
        })
        .then(data => {
            div.innerHTML = `
                <div class="result-box">
                    <h3>${data.name}</h3>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Teléfono:</strong> ${data.phone}</p>
                    <p><strong>Website:</strong> ${data.website}</p>
                </div>
            `;
        })
        .catch(error => {
            div.innerHTML = `<div class="error">❌ Error: ${error.message}</div>`;
        });
}

// 2. GET with Parameters
function fetchDynamicUser() {
    let userId = document.getElementById('user-id').value;
    let div = document.getElementById('result-dynamic');
    div.innerHTML = '<p class="loading">⏳ Cargando usuario #' + userId + '...</p>';

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            div.innerHTML = `<div class="user-card">
                <h3>👤 ${data.name}</h3>
                <p>ID: ${data.id}</p>
                <p>Email: ${data.email}</p>
                <p>Ciudad: ${data.address.city}</p>
            </div>`;
        })
        .catch(error => {
            div.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}

// 3. GET - List of Posts
function fetchPosts() {
    let div = document.getElementById('result-posts');
    div.innerHTML = '<p class="loading">⏳ Cargando posts...</p>';

    // Use ?_limit=5 to get only 5 items (JSONPlaceholder parameter)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(posts => {
            let html = '';
            posts.forEach(post => {
                html += `
                    <div class="post-item">
                        <h3>Post #${post.id}: ${post.title}</h3>
                        <p>${post.body}</p>
                        <small>Por Usuario #${post.userId}</small>
                    </div>
                `;
            });
            div.innerHTML = html;
        })
        .catch(error => {
            div.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}

// 4. POST - Create a New Post
function createPost() {
    let title = document.getElementById('post-title').value;
    let body = document.getElementById('post-body').value;
    let div = document.getElementById('result-create-post');

    if (!title || !body) {
        div.innerHTML = '<div class="error">❌ Por favor, completa título y contenido</div>';
        return;
    }

    div.innerHTML = '<p class="loading">⏳ Enviando post...</p>';

    // POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1
        })
    })
        .then(response => response.json())
        .then(data => {
            div.innerHTML = `
                <div class="result-box">
                    <h3>✅ Post Creado!</h3>
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Título:</strong> ${data.title}</p>
                    <p><strong>Contenido:</strong> ${data.body}</p>
                    <p><em>Nota: Es un mock, no se guarda permanentemente</em></p>
                </div>
            `;
            document.getElementById('post-title').value = '';
            document.getElementById('post-body').value = '';
        })
        .catch(error => {
            div.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}

// 5. Async/Await (Modern Syntax)
async function fetchComments() {
    let div = document.getElementById('result-async');
    div.innerHTML = '<p class="loading">⏳ Cargando comentarios...</p>';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const comments = await response.json();
        
        let html = '<h3>Comentarios:</h3>';
        comments.forEach(comment => {
            html += `
                <div class="post-item">
                    <p><strong>${comment.name}</strong></p>
                    <p>${comment.body}</p>
                    <small>Por: ${comment.email}</small>
                </div>
            `;
        });
        div.innerHTML = html;
        
    } catch (error) {
        div.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

// 6. Parallel Requests (Promise.all)
function fetchMultiple() {
    let div = document.getElementById('result-parallel');
    div.innerHTML = '<p class="loading">⏳ Cargando...</p>';

    // Promise.all executes both requests in parallel
    Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json())
    ])
        .then(([user1, user2]) => {
            div.innerHTML = `
                <div class="user-card">
                    <h3>${user1.name}</h3>
                    <p>Email: ${user1.email}</p>
                </div>
                <div class="user-card">
                    <h3>${user2.name}</h3>
                    <p>Email: ${user2.email}</p>
                </div>
            `;
        })
        .catch(error => {
            div.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        });
}

// 7. Error Handling
function requestWithError() {
    let div = document.getElementById('result-error');
    div.innerHTML = '<p class="loading">⏳ Intentando...</p>';

    fetch('https://jsonplaceholder.typicode.com/users/999')  // ID does not exist
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                div.innerHTML = '<div class="error">❌ Usuario no encontrado</div>';
            } else {
                div.innerHTML = `<div class="result-box">${JSON.stringify(data)}</div>`;
            }
        })
        .catch(error => {
            div.innerHTML = `
                <div class="error">
                    <h3>❌ Error Capturado</h3>
                    <p>${error.message}</p>
                </div>
            `;
        });
}
