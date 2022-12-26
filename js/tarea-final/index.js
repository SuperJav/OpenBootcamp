let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion1 = {
        lat: -25.363,
        lng: 131.044
    }
    const posicion2 = {
        lat: 48.849336802644466,
        lng: 2.3247081284893483
    }
    const posicion3 = {
        lat: 39.40114940456869,
        lng:  -103.02426084308487
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    })

    marker = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Posición Inicial"
    })
    //
    map = new google.maps.Map(document.getElementById("map2"), {
        zoom: 4,
        center: posicion2
    })

    marker = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Posición Inicial"
    })
    //
    map = new google.maps.Map(document.getElementById("map3"), {
        zoom: 4,
        center: posicion3
    })

    marker = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Posición Inicial"
    })
    
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}