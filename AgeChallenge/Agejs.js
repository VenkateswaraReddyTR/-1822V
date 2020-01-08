function Clickme(){
    var yob=prompt("Enter your year of birth...:");
    var resultt=(2020-yob)*365;
    var h1=document.createElement('h1');
    var anser=document.createTextNode("you are "+resultt+" days old ");
    h1.setAttribute('id','resultt');
    h1.appendChild(anser);
    document.getElementById('result').appendChild(h1);
}


function reset(){
    document.getElementById('resultt').remove();
}