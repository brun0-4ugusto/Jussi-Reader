const apis = [`https://jussi-reader.netlify.app/.netlify/functions/news-one`,`https://jussi-reader.netlify.app/.netlify/functions/news-two`]


export default async function listaNoticias(){
    
    
    
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
    
    
   
    
}

/* let news = []
    for(let i = 0; i< apis.length; i++){
        const resp = await fetch(apis[i])
        const respJson = await resp.json()
        
       Object.entries(respJson)[0][1].forEach(element => {
           news.push(element)
       });
       
        
    }
    
    return news */