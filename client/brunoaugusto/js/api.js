const apis = [`https://jussi-reader.netlify.app/.netlify/functions/news-one`,`https://jussi-reader.netlify.app/.netlify/functions/news-two`]


export default async function listaNoticias(){
    
    let news = []
    for(let i = 0; i< apis.length; i++){
        const resp = await fetch(apis[i])
        const respJson = await resp.json()
        
       Object.entries(respJson)[0][1].forEach(element => {
           news.push(element)
       });
       
        
    }
    
    return news
    
    
}
