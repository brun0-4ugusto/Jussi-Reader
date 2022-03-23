let favoritos = []
export default function favorite(event){
    event.target.classList.toggle('fa-solid')
    event.target.classList.toggle('fa-regular')
    
    if(event.target.classList.contains('fa-solid') && favoritos.includes(event.target.parentElement.innerText) != true){
        const tituloFavorito = event.target.parentElement.innerText
        favoritos.push(tituloFavorito)
        localStorage.setItem('Favoritos',JSON.stringify(favoritos))
    }else if(localStorage.getItem('Favoritos').includes(event.target.parentElement.innerText)){
         const tituloFavorito = event.target.parentElement.innerText
         favoritos = JSON.parse(localStorage.getItem('Favoritos'))
        let favoritosFiltrado = favoritos.filter((element)=>{
            return element != tituloFavorito
        })
        favoritos = favoritosFiltrado
        localStorage.setItem('Favoritos',JSON.stringify(favoritos)) 
        
        
    }
    
    
}



