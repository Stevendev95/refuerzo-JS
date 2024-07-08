document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const themeToggleButton = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;
                postElement.appendChild(postTitle);

                const postBody = document.createElement('p');
                postBody.textContent = post.body;
                postElement.appendChild(postBody);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
