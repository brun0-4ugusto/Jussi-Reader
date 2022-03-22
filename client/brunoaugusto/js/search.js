import listaNoticias from "./api.js";
import render from "./readData.js";
import paginationControl from "./pagination.js"

const searchInput = document.querySelector('[data-search]')
searchInput.addEventListener("input", search)
async function search(){
    const cache = JSON.parse(localStorage.getItem("data"))
    let palavra = searchInput.value.toLowerCase() 
    let arrayPesquisado = cache.map((element)=>{
       let titulo = element.title.toLowerCase()
        if(titulo.includes(palavra)){
            return element
        }
    })
    let arrayFiltrado = arrayPesquisado.filter((element)=>{
        if(element != undefined){
            return element
        }
    })
    const ul = document.querySelector('.lista__container')
    ul.innerHTML =''
    if(arrayFiltrado.length != 0){
        paginationControl(arrayFiltrado)
        document.querySelector('[data-pagination]').classList.remove('hide')
    }else{
        ul.innerHTML = '<li class="lista__container__noticia--erro">Nada encontrado</li>'
        document.querySelector('[data-pagination]').classList.add('hide')
    }
    
    
}