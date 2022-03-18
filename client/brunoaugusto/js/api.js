const apis = [`https://jussi-reader.netlify.app/.netlify/functions/news-one`,`https://jussi-reader.netlify.app/.netlify/functions/news-two`]


export default async function listaNoticias(){
    
    
    try{
    let news = await Promise.all(apis.map(async (api)=>{
        
        
            const resp = await fetch(api)
            const respJson = await resp.json()
            let noticias = await Object.entries(respJson)[0][1].map((element)=>{
                return element
            })
            return noticias
    }))
    
    
    news =[...news[0],...news[1]]
    
    return news
}catch(err){
    console.log(`ERRO no fetch: ${err}`)
    const respCache = JSON.parse(localStorage.getItem("data"))
    console.log(respCache)
    if(respCache === null){
        const ul = document.querySelector('.lista__container')
        ul.innerHTML = '<li class="lista__container__noticia--erro">houston, we got a problem</li>'
    }else{
        return respCache
    }
    
}

    
    
   
    
}
