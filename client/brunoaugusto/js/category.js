
import paginationControl from "./pagination.js"

function category(){
   const data = JSON.parse(localStorage.getItem("data"))
   const divCategory = document.querySelector('[data-categorias]')
    let categories = data.map((element)=>{
        
        let categoryName = element.categories.map(element => {
            
            return element.name
        })

        
        return categoryName
    })
    let values = categories.toString()
    
    let uniqCategories = values.split(',').filter((element)=>{
        return element != '' 
    })
    uniqCategories = [... new Set(uniqCategories)].sort()
    
    uniqCategories.forEach(element => {
    const button = document.createElement('button')
    button.classList.add('categoria')
    button.innerHTML = `${element}`
    divCategory.appendChild(button)
    
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
            paginationControl(a)
        })
    })
    
}

