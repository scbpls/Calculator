function insert(x) {
    document.forms[0].text.value = document.forms[0].text.value + x;
}

function backspace() {
    var data = document.forms[0].text.value;
    document.forms[0].text.value = data.substring(0, data.length - 1);
}

function equal() {
    var data = document.forms[0].text.value;
    if (data) {
        document.forms[0].text.value = eval(data);
    }
}

function clean() {
    document.forms[0].text.value = "";
}
