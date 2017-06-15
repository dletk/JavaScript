/**
 * Created by DucLe on 4/11/17.
 */
var hotel = {
    name: "Park",
    rooms: 120,
    booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elPool = document.getElementById("pool");
elPool.className = hotel.pool;

var elGym = document.getElementById("gym");
elGym.className = hotel.gym;

// var naviga = window.navigator;
//
// console.log(naviga.geolocation.getCurrentPosition(function (position) {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// }));

