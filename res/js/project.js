var buttons = document.getElementsByTagName('button');

sortList(document.getElementsByClassName('grid')[0]);

function sortList(ul) {
    var new_ul = ul.cloneNode(false);
    var lis = [];
    for (var i = ul.childNodes.length; i--;)
        if(ul.childNodes[i].nodeName === 'FIGURE')
            lis.push(ul.childNodes[i]);
    lis.sort(function(a, b) {
       return parseInt(b.id , 10) - 
              parseInt(a.id , 10);
    });
    for (var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}

function hide(display) {
	var figures = document.getElementsByTagName('figure');
	for (var i = 0; i < figures.length; i++) {
		figures[i].style.display = 'none';
	}
	var figures = document.querySelectorAll(display);
	for (var i = 0; i < figures.length; i++) {
		figures[i].style.display = 'block';
	}
}

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(e) {
		switch (e.target.innerText) {
			case "ALL":
				var figures = document.getElementsByTagName('figure');
				for (var i = 0; i < figures.length; i++) {
					figures[i].style.display = 'block';
				}
				break;
			case "SOFTWARE":
				hide('.software', ['.hardware', '.misc']);
				break;
			case "HARDWARE":
				hide('.hardware', ['.software', '.misc']);
				break;
			case "MISC":
				hide('.misc', ['.hardware', '.software']);
				break;
		}
	});
}