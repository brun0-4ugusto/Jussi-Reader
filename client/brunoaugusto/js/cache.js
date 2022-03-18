import listaNoticias from "./api.js";

async function cacheLocal(data){
    localStorage.setItem('data', JSON.stringify(data))
    
}

cacheLocal(await listaNoticias())