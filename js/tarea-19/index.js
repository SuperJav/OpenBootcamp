
const parrafos =document.querySelectorAll(".parrafo")
const seccions=document.querySelectorAll(".seccion")

parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart",e=>{
        console.log("Estoy arrastrando  el parrafo: "+ parrafo.innerText);
        parrafo.classList.add("dragging")
        e.dataTransfer.setData("id",parrafo.id)
        const elemento_fantasma=document.querySelector(".imagen-fantasma")
        e.dataTransfer.setDragImage(elemento_fantasma,0,0)

    })

    parrafo.addEventListener("dragend",()=>{
        //console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")

    })
    
})
    seccions.forEach(seccion=>{
        seccion.addEventListener("dragover",event=>{
            event.preventDefault()
            event.dataTransfer.dropEffect="copy"
            //console.log("Drag Over");
        })
        seccion.addEventListener("drop",event=>{
            console.log("Drop");
           const id_parrafo= event.dataTransfer.getData("id")
           const parrafo=document.getElementById(id_parrafo)
           seccion.appendChild(parrafo)
           
        })
    })

    function fase1(pEvento) {
        pEvento.dataTransfer.setData( "text/plain", pEvento.target.id);
    }
    
    function fase2(pEvento) {
        pEvento.preventDefault();
    }
    
    function fase3(pEvento) {
        pEvento.preventDefault();
        document.getElementById( pEvento.dataTransfer.getData("text") ).remove();
        
    }


