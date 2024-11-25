
    let Api = "https://jsonplaceholder.typicode.com/photos";
    let wrapper = document.querySelector('.wrapper');

    console.log(Api);
    fetch(Api)
        .then(malumot => malumot.json())
        .then(baza => {
            let limit15Data = baza.slice(0, 15);
            console.log(limit15Data);

            limit15Data.map(v => {
                let div = document.createElement('div');
                div.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');
                div.innerHTML = `
                    <figure>
                        <img src="${v.url}" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>${v.title}</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                `;
                wrapper.appendChild(div);
            });
        });

