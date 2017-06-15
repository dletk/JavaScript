/**
 * Created by DucLe on 4/10/17.
 */
var hotel = {
    name: "Quay",
    rooms: 40,
    booked: 25,
    checkAvailability: function () {
        return this.rooms - this.booked
    }
};

var elementName = document.getElementById("hotelName");
elementName.textContent = hotel.name;

var elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();