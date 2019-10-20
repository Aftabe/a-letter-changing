function doSomething() {
    var str = document.getElementById('demo').innerHTML;
    var text = str.replace('language','toturial');
    document.getElementById('demo').innerHTML = text;
}