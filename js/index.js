document.addEventListener("DOMContentLoaded", function () {
    const bookList = document.querySelector('ul#list');
    const panel = document.querySelector('div#show-panel');

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

                    btn.addEventListener('click', ()=>{
                        btn.textContent = 'LIKED!'
                    })

                })







            }
        })
});
