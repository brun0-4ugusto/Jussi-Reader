import listaNoticias from "./api.js";
import render from "./readData.js";

export default async function paginationControl(data){
    const divPagination = document.querySelector('[data-pagination]')
    divPagination.innerHTML =""
    let minimumPageNumber = (data.length/6).toFixed() < 1 ? 1 : (data.length/6).toFixed()
    for(let i = 0; i < minimumPageNumber; i++){
        const span = document.createElement('span')
        span.innerHTML = i + 1
        divPagination.appendChild(span)
    }
    const pageSpan = divPagination.querySelectorAll('span')
    let newsChunk = []
    pageSpan.forEach((element)=>{
        
            
            
            const elementsByPage = 6
            for(let i =0;i<data.length;i+=elementsByPage){
               let chunk = data.slice(i,i+elementsByPage)
               newsChunk.push(chunk)
           }
           
           
            element.addEventListener('click', (element)=>{
            const pageNumber = (element.currentTarget.innerHTML - 1)
            divPagination.dataset.pagination = pageNumber
            
            currentPage()
           render(newsChunk[divPagination.dataset.pagination])
        })
    })
    
    divPagination.dataset.pagination = 0
    currentPage()
    render(newsChunk[divPagination.dataset.pagination])
}

paginationControl(await listaNoticias())

function currentPage(){
    const divPagination = document.querySelector('[data-pagination]')
    let divPaginationId = divPagination.dataset.pagination
    const pageSpan = divPagination.querySelectorAll('span')
    console.log(divPaginationId)
    console.log(pageSpan)
    pageSpan.forEach(element =>{
        if((element.innerText - 1) == divPaginationId){
            element.classList.add('clicked')
        }else{
            element.classList.remove('clicked')
        }
    })
}

