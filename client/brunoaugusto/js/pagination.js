import listaNoticias from "./api.js";
import render from "./readData.js";

export default async function paginationControl(data){
    const divPagination = document.querySelector('[data-pagination]')
    divPagination.innerHTML =""
    let numeroPaginas = (data.length/6).toFixed()
    for(let i = 0; i < numeroPaginas; i++){
        const span = document.createElement('span')
        span.innerHTML = i + 1
        divPagination.appendChild(span)
    }
    const paginas = divPagination.querySelectorAll('span')
    let arrayDividido = []
    paginas.forEach((element)=>{
        
            
            
            const divisoes = 6
            for(let i =0;i<data.length;i+=divisoes){
               let chunk = data.slice(i,i+divisoes)
               arrayDividido.push(chunk)
           }
           
           ///render(arrayDividido[divPagination.dataset.pagination])
            element.addEventListener('click', (element)=>{
            const numerodaPagina = (element.currentTarget.innerHTML - 1)
            divPagination.dataset.pagination = numerodaPagina
            
            
           render(arrayDividido[divPagination.dataset.pagination])
        })
    })
    render(arrayDividido[divPagination.dataset.pagination])
}

paginationControl(await listaNoticias())