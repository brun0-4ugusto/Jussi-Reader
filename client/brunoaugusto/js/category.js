import render from "./readData.js";

function category(){
   const data = JSON.parse(localStorage.getItem("data"))
   const divCategoria = document.querySelector('[data-categorias]')
    let categorias = data.map((element)=>{
        
        let nomeCategoria = element.categories.map(element => {
            
            return element.name
        })

        
        return nomeCategoria
    })
    let valores = categorias.toString()
    
    let arrayCategoriasUnicas = valores.split(',').filter((element)=>{
        return element != '' 
    })
    arrayCategoriasUnicas = [... new Set(arrayCategoriasUnicas)].sort()
    
    arrayCategoriasUnicas.forEach(element => {
    const button = document.createElement('button')
    button.classList.add('categoria')
    button.innerHTML = `${element}`
    divCategoria.appendChild(button)
    
    });
    showCategory()
}
category()

function showCategory(){
    let button = document.querySelectorAll('.categoria')
    const data = JSON.parse(localStorage.getItem("data"))
    button.forEach((e)=>{
        e.addEventListener('click',(e)=>{
            let categoria = e.currentTarget.innerHTML
            let a = data.filter((element)=>{
                let b = element.categories.filter((element)=>{
                    return element.name == categoria
                })
               if(b.length > 0){
                   return element
               }
            })
            const ul = document.querySelector('.lista__container')
            ul.innerHTML = ''
            render(a)
        })
    })
    
}



/* element.categories.forEach(element => {
    const button = document.createElement('button')
    button.classList.add('categoria')
    button.innerHTML = `${element.name}`
    divCategoria.appendChild(button)
}); */