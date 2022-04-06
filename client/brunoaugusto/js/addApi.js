import paginationControl from "./pagination.js"
import itemOrder from "./cache.js"
const formApi = document.querySelector('[data-addApi]')
formApi.addEventListener('submit', async (e)=>{
    try{
        e.preventDefault()
    const urlApi = document.querySelector('[data-urlApi]').value
    const resp = await fetch(urlApi)
    const respJson = await resp.json()
    let noticia = await Object.entries(respJson)[0][1].map((element)=>{
        return element
    })
    itemOrder(noticia)
    paginationControl(noticia)
    }catch{
        alert('Por Favor insira uma API com formato JSON válido')
    }
    
})