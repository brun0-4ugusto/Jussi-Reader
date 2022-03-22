import listaNoticias from "./api.js";
import render from "./readData.js";
import paginationControl from "./pagination.js"


const title = document.querySelector('[data-title]')
title.addEventListener('click', orderByTitle)
const date = document.querySelector('[data-date]')
date.addEventListener('click', orderByDate)

async function orderByTitle(){
    const data = await listaNoticias()
    
    function order(elemento1, elemento2){
        if(elemento1.title < elemento2.title){
            return -1
        }
        if(elemento1.title > elemento2.title){
            return 1
        }
        return 0
    }
    const dataOrdernado = data.sort(order)
    
    paginationControl(dataOrdernado)
}

async function orderByDate(){
    const data = await listaNoticias()
    
    function order(elemento1, elemento2){
        if(elemento1.date_published < elemento2.date_published){
            return -1
        }
        if(elemento1.date_published > elemento2.date_published){
            return 1
        }
        return 0
    }
    const dataOrdernado = data.sort(order)
    
    paginationControl(dataOrdernado)
}