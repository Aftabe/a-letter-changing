function doSomething() {
    var str = document.getElementById('demo').innerHTML;
    var text = str.replace('language','toturial');
    document.getElementById('demo').innerHTML = text;
};

function myFunction() {
    var str1 = document.getElementById('demo1').innerHTML;
    var text1 = document.getElementById('demo1').innerHTML = str1.toUpperCase();
    
}