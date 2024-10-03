function ElectricalAppliance(weigh) {
    this.connect = function () {
        console.log("Connected to electrical");
    }
    this.disconnect = function () {
        console.log("Disconnected from electrical");
    }
}


function Microwave(price){
    this.price = price
    this.work = function () {
        console.log('work');
    }
    this.stop  = function () {
        console.log('stop');
    }
}


function Kettle(price){
    this.price = price
    this.work = function () {
        console.log('work');
    }
    this.stop = function () {
        console.log('stop');
    }
}

Microwave.prototype = new ElectricalAppliance()
Kettle.prototype = new ElectricalAppliance()

const microwav1 = new Microwave(12)
const ketle1 = new Kettle(13)
console.log(ketle1)
const microwav2 = new ElectricalAppliance(12)
console.log(microwav2)