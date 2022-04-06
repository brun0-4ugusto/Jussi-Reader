
import paginationControl from "./pagination.js"
import itemOrder from "./cache.js"

function category(){
   const data = JSON.parse(localStorage.getItem("data"))
   const divCategory = document.querySelector('[data-categorias]')
    let categories = data.map((element)=>{
        
        let categoryName = element.categories.map(element => {
            
            return element.name
        })

        
        return categoryName
    })
    
    /* let values = categories.toString()
    
    let uniqCategories = values.split(',').filter((element)=>{
        return element != '' 
    }) */
    //uniqCategories = [... new Set(uniqCategories)].sort()
    let flatCategories = categories.flat()
    let uniqCategories = flatCategories.filter((element, index)=>{
        return flatCategories.indexOf(element) == index
    })
    
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
            let category = e.currentTarget.innerText
            
            let newsCategory = data.filter((element)=>{
                let news = element.categories.filter((element)=>{
                    return element.name == category
                })
                
               if(news.length > 0){
                   return element
               }
            })
            const ul = document.querySelector('.lista__container')
            ul.innerHTML = ''
            itemOrder(newsCategory)
            paginationControl(newsCategory)
        })
    })
    
}

