import listaNoticias from "./api.js";


const title = document.querySelector('[data-title]')
title.addEventListener('click', orderByTitle)
const date = document.querySelector('[data-date]')
date.addEventListener('click', orderByDate)

async function orderByTitle(){
    const data = await listaNoticias()
    function order(title1,title2){
        if(title1.title < title2.title){
            return -1
        }
        if(title1.title > title2.title){
            return 1
        }
        return 0
    }
    const dataOrdenado = data.sort(order)
    const ul = document.querySelector('.lista__container')
    ul.innerHTML = ''
    for(let i = 0; i < dataOrdenado.length;i++){
        let noticia = dataOrdenado[i]
 
         
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
         for (let i = 0; i < noticia.categories.length; i++) {
             const spanCategoria = document.createElement('span')
             const icon = document.createElement('i')
             icon.className = 'fa-solid fa-tag'
             spanCategoria.innerHTML = noticia.categories[i].name
             divCategoria.appendChild(icon)
             divCategoria.appendChild(spanCategoria)
         }
 
         divElementos.appendChild(divCategoria)
         li.appendChild(img)
         li.appendChild(divElementos)
         
         ul.appendChild(li)
     }
   
}

async function orderByDate(){
    const data = await listaNoticias()
    function order(date1,date2){
        if(date1.date_published < date2.date_published){
            return -1
        }
        if(date1.date_published > date2.date_published){
            return 1
        }
        return 0
    }
    const dataOrdenado = data.sort(order)
    const ul = document.querySelector('.lista__container')
    ul.innerHTML = ''
    for(let i = 0; i < dataOrdenado.length;i++){
        let noticia = dataOrdenado[i]
 
         
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
         for (let i = 0; i < noticia.categories.length; i++) {
             const spanCategoria = document.createElement('span')
             const icon = document.createElement('i')
             icon.className = 'fa-solid fa-tag'
             spanCategoria.innerHTML = noticia.categories[i].name
             divCategoria.appendChild(icon)
             divCategoria.appendChild(spanCategoria)
         }
 
         divElementos.appendChild(divCategoria)
         li.appendChild(img)
         li.appendChild(divElementos)
         
         ul.appendChild(li)
     }
}

