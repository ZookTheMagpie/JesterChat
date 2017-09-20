for (var i = 1; i < 11; i++)
{

    var iDiv = document.createElement('div');
    iDiv.id = 'block';
    iDiv.className = 'block';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    iDiv.innerHTML = "I'm the " + i + " div";

    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';

    iDiv.appendChild(innerDiv);
}

/* The variable iDiv is still good... Just append to it.
iDiv.appendChild(innerDiv);
innerDiv.innerHTML = "I'm the inner div";*/

