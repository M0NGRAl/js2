function ownProps(object, prop) {
    if (object.hasOwnProperty(prop)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}