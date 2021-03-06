import listaNoticias from "./api.js";

import paginationControl from "./pagination.js"


const title = document.querySelector('[data-title]')

title.addEventListener('click', orderByTitle)
const date = document.querySelector('[data-date]')
date.addEventListener('click', orderByDate)

function orderByTitle(){
    //const data = await listaNoticias()
    const data = JSON.parse(localStorage.getItem("order"))

    function order(element1, element2){
        if(element1.title < element2.title){
            return -1
        }
        if(element1.title > element2.title){
            return 1
        }
        return 0
    }
    const dataSorted = data.sort(order)
    
    paginationControl(dataSorted)
}

function orderByDate(){
    //const data = await listaNoticias()
    const data = JSON.parse(localStorage.getItem("order"))
    
    function order(element1, element2){
        if(element1.date_published < element2.date_published){
            return -1
        }
        if(element1.date_published > element2.date_published){
            return 1
        }
        return 0
    }
    const dataSorted = data.sort(order)
    
    paginationControl(dataSorted)
}