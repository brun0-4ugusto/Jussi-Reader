import paginationControl from "./pagination.js"

const searchInput = document.querySelector('[data-search]')
searchInput.addEventListener("input", search)
async function search(){
    const cache = JSON.parse(localStorage.getItem("data"))
    let word = searchInput.value.toLowerCase()
    if(searchInput.value == ''){
        document.querySelector('[data-pagination]').classList.remove('hide')
    }
    let dataSearched = cache.map((element)=>{
       let newsTitle = element.title.toLowerCase()
        if(newsTitle.includes(word)){
            return element
        }
    })
    let dataSearchedFiltered = dataSearched.filter((element)=>{
        if(element != undefined){
            return element
        }
    })
    const ul = document.querySelector('.lista__container')
    ul.innerHTML =''
    if(dataSearchedFiltered.length != 0){
        paginationControl(dataSearchedFiltered)
        
    }else{
        ul.innerHTML = '<li class="lista__container__noticia--erro">Nada encontrado</li>'
        document.querySelector('[data-pagination]').classList.add('hide')
    }
    
    
}