let obj = {
    name: "Steve",
    then: function (fn) {
        console.log(fn);
        return {
            name: "Khushi"
        };
    }
}

function scb() {
    console.log("Hello");
}
let rVal = obj.then(scb);
console.log("rVal",rVal);