document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.querySelector('ul#list');
    const panel = document.querySelector('div#show-panel');

    const currentUser = {
        id: 1,
        username: "pouros"
    }



    fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(books => {
            for (const book of books) {
                const li = document.createElement('li');
                const h4 = document.createElement('h4');
                const userUl = document.createElement('ul');

                li.className = 'book-list';
                userUl.className = 'user-list';

                h4.textContent = book['title'];

                li.appendChild(h4);
                bookList.appendChild(li);

                h4.addEventListener('click', () => {
                    panel.innerHTML = '';
                    userUl.innerHTML = '';

                    const p = document.createElement('p');
                    const img = document.createElement('img');
                    const h2 = document.createElement('h3');
                    const h3 = document.createElement('h3');
                    const btn = document.createElement('BUTTON');
                    users = book['users'];

                    img.src = book['img_url'];
                    h2.textContent = book['title'];
                    h3.textContent = book['subtitle'];
                    p.textContent = book['description'];
                    btn.textContent = 'LIKE';

                    for (user of users) {
                        if (user['username'] === currentUser.username) {
                            btn.textContent = 'LIKED!'
                        }
                        const li = document.createElement('li');

                        li.textContent = user['username'];

                        userUl.appendChild(li);

                    }

                    panel.appendChild(img);
                    panel.appendChild(h2);
                    panel.appendChild(h3);
                    panel.appendChild(p);
                    panel.appendChild(userUl);
                    panel.appendChild(btn);

                    btn.addEventListener('click', () => {
                        if (btn.textContent === 'LIKE') {
                            const li = document.createElement('li');

                            btn.textContent = 'LIKED!'
                            users.push(currentUser);

                            li.textContent = currentUser.username;
                            userUl.appendChild(li);

                            console.log(users);

                            fetch(`http://localhost:3000/books/${book['id']}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json'
                                },
                                body: JSON.stringify({
                                    'users': users
                                })

                            })


                        }
                    })

                })







            }
        })
});
