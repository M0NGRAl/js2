function keys(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key, object[key]);
        }
    }
}

