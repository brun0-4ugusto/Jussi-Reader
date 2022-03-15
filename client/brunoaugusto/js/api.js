async function listaNoticias() {
    const resposta = await fetch(`https://jussi-reader.netlify.app/.netlify/functions/news-one`)
    return await resposta.json()
}
                          
async function render(){
    const data = await listaNoticias()
    for(let j = 0;j < Object.entries(data)[0][1].length;j++){
        const element = Object.entries(data)[0][1][j]
        const ul = document.querySelector('.lista__container')
            const li = document.createElement('li')
            const img = document.createElement('img')
            const divElementos = document.createElement('div')
            const divCategoria = document.createElement('div')

            li.classList.add('lista__container__noticia')

            img.src = element.image
            img.classList.add('lista__container__noticia__imagem')

            divElementos.classList.add('lista__container__noticia__elementos')
            divElementos.innerHTML = `<div class="lista__container__noticia__elementos--titulo"><a href="">
            <h2 class="lista__container__noticia__titulo">${element.title}</h2></a>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-heart hide"></i>
            </div>
            <span>${element.date_published}</span>
            <p>${element.excerpt}</p>`

            divCategoria.classList.add('lista__container__noticia__elementos--categoria')
            for (let i = 0; i < element.categories.length; i++) {
                const spanCategoria = document.createElement('span')
                const icon = document.createElement('i')
                icon.className = 'fa-solid fa-tag'
                spanCategoria.innerHTML = element.categories[i].name
                divCategoria.appendChild(icon)
                divCategoria.appendChild(spanCategoria)
            }

            divElementos.appendChild(divCategoria)
            li.appendChild(img)
            li.appendChild(divElementos)
            
            ul.appendChild(li)
    }
}

render()