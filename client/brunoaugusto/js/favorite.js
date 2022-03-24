import paginationControl from "./pagination.js"
let favoritos = JSON.parse(localStorage.getItem('Favoritos')) || []

export default function favorite(event){
    
    event.target.classList.toggle('fa-solid')
    event.target.classList.toggle('fa-regular')
    const li = event.target.parentElement.parentElement.parentElement
    if(event.target.classList.contains('fa-solid') && favoritos.includes(event.target.parentElement.innerText) != true){
        const tituloFavorito = event.target.parentElement.innerText
         
        favoritos.push(tituloFavorito)
        localStorage.setItem('Favoritos',JSON.stringify(favoritos))
    }else if(localStorage.getItem('Favoritos').includes(event.target.parentElement.innerText)){
         const tituloFavorito = event.target.parentElement.innerText
        let favoritosFiltrado = favoritos.filter((element)=>{
            return element != tituloFavorito
        })
        favoritos = favoritosFiltrado
        localStorage.setItem('Favoritos',JSON.stringify(favoritos)) 
        
        
    }
    
    
}

const botaoFavoritos = document.querySelector('[data-favoritos]')
botaoFavoritos.addEventListener('click',()=>{
    let tituloFavoritos = JSON.parse(localStorage.getItem('Favoritos'))
    let data = JSON.parse(localStorage.getItem('data'))
    
    let noticias = data.filter((element)=>{
        if(tituloFavoritos.includes(element.title)){
            console.log(element)
            return element
        }
    })

    
    paginationControl(noticias) // as noticias tao aparecendo repetidas pq a api ta trazendo noticias com o mesmo nome (devido a api2)

})



