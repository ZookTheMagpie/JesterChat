for (var i = 1; i < 7; i++)
{
    var a = document.createElement('a');
    var txt = document.createTextNode("Chamber " + i);
    
    a.appendChild(txt);
    a.title = "chamber.html?name=" + "Chamber " + i;
    a.href = "chamber.html?name=" + "Chamber " + i;
    document.body.appendChild(a);
}