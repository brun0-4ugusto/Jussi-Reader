import paginationControl from "./pagination.js"
const formApi = document.querySelector('[data-addApi]')
formApi.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const urlApi = document.querySelector('[data-urlApi]').value
    const resp = await fetch(urlApi)
    const respJson = await resp.json()
    let noticia = await Object.entries(respJson)[0][1].map((element)=>{
        return element
    })
    paginationControl(noticia)
})