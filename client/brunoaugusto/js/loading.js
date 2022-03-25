window.addEventListener('load', removeLoading)


function removeLoading(){
    const divLoading = document.querySelector('[data-loading]')
    
    divLoading.remove()
    
}
