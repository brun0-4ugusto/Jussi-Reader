import listaNoticias from "./api.js";

async function cacheLocal(data){
    localStorage.setItem('data', JSON.stringify(data))
    
}

cacheLocal(await listaNoticias())

export default async function itemOrder(data){
    localStorage.setItem('order', JSON.stringify(data))
    
}

itemOrder(await listaNoticias())