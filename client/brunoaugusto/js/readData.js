import listaNoticias from "./api.js";

async function render(data){
    let render = await Promise.all(data.map((noticia)=>{
        const ul = document.querySelector('.lista__container')
        const li = document.createElement('li')
        const img = document.createElement('img')
        const divElementos = document.createElement('div')
        const divCategoria = document.createElement('div')


        li.classList.add('lista__container__noticia')
        img.src = noticia.image
        img.classList.add('lista__container__noticia__imagem')
        
        divElementos.classList.add('lista__container__noticia__elementos')
        divElementos.innerHTML = `<div class="lista__container__noticia__elementos--titulo"><a href="${noticia.url}">
        <h2 class="lista__container__noticia__titulo">${noticia.title}</h2></a>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-heart hide"></i>
        </div>
        <span>${noticia.date_published}</span>
        <p>${noticia.excerpt}</p>`

        divCategoria.classList.add('lista__container__noticia__elementos--categoria')
        noticia.categories.forEach(categoria => {
            const spanCategoria = document.createElement('span')
            const icon = document.createElement('i')
            icon.className = 'fa-solid fa-tag'
            spanCategoria.innerHTML = categoria.name
            divCategoria.appendChild(icon)
            divCategoria.appendChild(spanCategoria)
        });
        
        divElementos.appendChild(divCategoria)
        li.appendChild(img)
        li.appendChild(divElementos)
        
        ul.appendChild(li)

    })) 
}

render(await listaNoticias())