class ElectricalAppliance{
    constructor(){
        this.connect = function () {
            console.log("Connected to electrical");
        }
        this.disconnect = function () {
            console.log("Disconnected from electrical");
        }
    }
}


class Microwave extends ElectricalAppliance{
    constructor(price){
        super()
        this.price = price
        this.work = function () {
            console.log('work');
        }
        this.stop  = function () {
            console.log('stop');
        }
    }
}


class Kettle extends ElectricalAppliance{
    constructor(price) {
        super();
        this.price = price
        this.work = function () {
            console.log('work');
        }
        this.stop = function () {
            console.log('stop');
        }
    }
}

const microwave = new Microwave(49);
console.log(microwave.work());