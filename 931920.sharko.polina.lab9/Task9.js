a = '';
b = '';
out = document.querySelector('#out');
out2 = document.querySelector('#out2');
out.value = 0;

click = (event) => {
    content = event.target.textContent;
    switch (content) {
        case '/':
			a=' / '
			break;
        case '*':
			a =' * ';
			break;
        case '-':
			a=' - ';
			break;
        case '+':
			a = ' + ';
			break;
        case 'C':
			b = '';
			a = '';
            break;
        case '←':
			tmp = b.substring(b.length - 2, b.length-1);
			if(tmp == ' '){
			b = b.substring(0, b.length-1);}
			a= b.substring(b.length - 2, b.length-1);
			b = b.substring(0, b.length - 2);
            break;
        case '=':
            a = eval(b);
            b = '';
            break;
        case '.':
			a = '.';
			break;
        default:
            a = a + event.target.textContent;
			}
	if(a==''){out.value=0;}
	else{
	out.value = a;}
	out2.value=b;
	b+=a;
	a='';
};

document.querySelectorAll("td").forEach(element => {
    element.addEventListener("click", click);
}) 