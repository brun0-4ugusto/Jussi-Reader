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
            
            
           render(newsChunk[divPagination.dataset.pagination])
        })
    })
    
    render(newsChunk[divPagination.dataset.pagination])
}

paginationControl(await listaNoticias())