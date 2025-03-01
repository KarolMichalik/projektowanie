function napisz(x){
    var wartosc = x.value;

    var div = document.getElementById('ekran');

    div.innerHTML = div.innerHTML+wartosc;

    console.log(wartosc);
}

function oblicz(x){
    var div = document.getElementById('ekran');
    var suma= eval(div.innerHTML);

    div.innerHTML= suma;
}
function clear(){
    div.innerHTML = "";
    document.getElementById('ekran')=div;
    
}
function delate(){
    var div = document.getElementById('ekran');
    var delate = delate-wartosc;
    
}

