keyCode = document.getElementById("code");
keyName = document.getElementById("key");
keyWhich = document.getElementById("which");


keys = document.querySelectorAll('[class^="key-size"]');
document.addEventListener("keydown", (evt) => {

    keyCode.textContent = evt.code;
    keyName.textContent = evt.key;
    keyWhich.textContent = evt.which;
    console.log(evt)
    Array.prototype.forEach.call(keys, callback);

    function callback(element, iterator) {

        if ((element.id).toUpperCase() === (evt.code).toUpperCase()) {
            console.log(iterator, element.id);
            element.style.backgroundColor = "red";

        }
    }
})

document.addEventListener("keyup", (evt) => {

    keyCode.textContent = evt.code;

    Array.prototype.forEach.call(keys, callback);

    function callback(element, iterator) {

        if ((element.id).toUpperCase() == (evt.code).toUpperCase()) {
            console.log(iterator, element.id);
            element.style.backgroundColor = "rgb(45, 45, 45)";
        }
    }
})