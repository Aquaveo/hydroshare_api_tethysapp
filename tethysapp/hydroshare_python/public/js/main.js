// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
//     }).addTo(mymap);

const clickevent = (event) => {
    var r = confirm("Are you sure ?")
    if (r==false){
        event.preventDefault()
    }
}

var addbutton = document.querySelector("[name=add-button]")
addbutton.addEventListener('click', clickevent);

var createbutton = document.querySelector("[name=create-button]")
createbutton.addEventListener('click', clickevent);


var deletebutton = document.querySelector("[name=delete-button]")
deletebutton.addEventListener('click', clickevent);