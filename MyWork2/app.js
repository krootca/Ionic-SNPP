window.onload = function () {
    var textSearch = document.getElementById("textSearch");
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var alertTrigger = document.getElementById('liveAlertBtn');
    var wrapper = document.createElement('div');
    var btn_clears = document.getElementById("btn_clears");
    var btn_remove = document.getElementById("btn_remove");
    var myStorage = window.localStorage;
    var localSave = document.getElementById("localSave");
    if (btn_clears) {
        btn_clears.addEventListener("click", function handleClick(event) { textSearch["value"] = ""; });
    }
    if (localSave) {
        if (localStorage.getItem("MyLanguage") == null) {
            localSave.innerHTML = '<strong style="color:red">No hay datos guardados</strong><br><br>';
        }
        else {
            localSave.innerHTML = '<strong style="color:red">' + localStorage.getItem("MyLanguage") + '</strong><br><br>';
        }
    }
    ;
    if (btn_remove) {
        btn_remove.addEventListener("click", function handleClick(event) { localStorage.removeItem("MyLanguage"); localSave.innerHTML = '<strong style="color:red">No hay datos guardados</strong><br><br>'; });
    }
    ;
    function alerts(message, type) {
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        alertPlaceholder.append(wrapper);
    }
    ;
    if (alertTrigger) {
        alertTrigger.addEventListener('click', function () {
            alerts('Se ha guardado el dato <strong style="color:red">' + textSearch["value"] + '</strong> de forma local en <a href="data.html">data</a>!', 'success');
            myStorage.setItem('MyLanguage', textSearch["value"]);
            textSearch["value"] = "";
        });
    }
    ;
};
function viewSettings() {
    document.getElementById('MySettings').setAttribute("style", "color: black;position: absolute;display: inherit;top:230px;left:35%");
}
;
function CloseSettings() {
    document.getElementById('MySettings').setAttribute("style", "color: black;position: absolute;display: none;top:230px;left:35%");
}
;
/***Carlos Samuel Work 3***/
/*---VARS---*/
var oration;
var myString = "Hello Teacher";
var myNum = 1;
var myBoolean = true;
oration = "All in one: \"".concat(myString, ", ").concat(myNum, ", ").concat(myBoolean, "\" ");
console.log("\n------VARS----------\n" + oration + "\n---------------");
/*---ARRAY---*/
var myArray = [
    "Walter White",
    "Jesse Pinkman",
    "Mike Ehrmantraut",
    "Saul Goodman"
];
var heisenberg = myArray[0];
console.log("\n-------ARRAY TOTAL: " + myArray.length + "-------\n" + myArray);
console.log("\n" + heisenberg);
console.log("-------ADD TO ARRAY END ITEM--------");
myArray.push("Gus Fring");
console.log(myArray);
console.log("-------NUMBERS-------------");
var myArray_numbers = [1, 2, 3, 4];
console.log(myArray_numbers);
console.log("------REMOVE END ITEM----------");
myArray_numbers.pop();
console.log(myArray_numbers);
/*FUNCTION ARRAY TS*/
console.log("-------FUNCTION ARRAY------");
var myNames = ["johnny depp", "Amber Heard"];
function addName(name) {
    if (name != null || name.length >= 1) {
        myNames.push(name); /*THIS EXECUTE WHEN I CALL THE FUNCTION*/
        console.log(myNames);
    }
    else {
        console.log("Error: Please write one word");
    }
}
;
console.log(myNames);
addName("Elon Musk");
/*-------CONSTRUCTOR---------*/
var MyCar = /** @class */ (function () {
    function MyCar(name, onCar, doorsopen, doors) {
        this.model = "CarlInc";
        this.name = name;
        this.doors = doors ? doors : 4;
        this.doorsopen = doorsopen;
        this.onCar = onCar;
    }
    ;
    MyCar.prototype.callmycar = function () {
        if (this.doorsopen == true && this.onCar == true) {
            return "Can't call the car, please off the motor.";
        }
        else if (this.doorsopen == true && this.onCar == false) {
            return "Can't call the car, please close the doors.";
        }
        else {
            return "Found call car, the car have: " + this.doors + " doors and the name is " + this.name + " and the model is " + this.model;
        }
    };
    ;
    return MyCar;
}());
;
var newCar = new MyCar("Rolls-Royce Phatom", true, true, 4);
var newCar2 = new MyCar("FORD", false, true, 2);
var newCar3 = new MyCar("Chevrolet Impala", true, false);
console.log("---------MY CONSTRUCTOR--------");
console.log(newCar, newCar.callmycar());
console.log(newCar2, newCar2.callmycar());
console.log(newCar3, newCar3.callmycar());
console.log("------------------------------");
