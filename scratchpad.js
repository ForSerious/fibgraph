/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function fibHelper(n)
{
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}

function pellHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pell");

    // leaf nodes aka. base case
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else {
        var left = pellHelper(n - 1);
        left.value = left.value * 2;
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " pell-left");

        var right = pellHelper(n - 2);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " pell-right");

        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

function triHelper(n)
{
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "tri");

    // leaf nodes aka. base case
    if (n < 3)
    {
        if (n === 0)
        {
            value = 0;
        }
        else if (n === 1)
        {
            value = 0;
        }
        else if (n === 2)
        {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Tri(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else
    {
        var left = triHelper(n - 1);
        var clas = left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " tri-left");

        var mid = triHelper(n - 2);
        var clas = mid.html.getAttribute("class");
        mid.html.setAttribute("class", clas + " tri-mid");

        var right = triHelper(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " tri-right");

        value = left.value + mid.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Tri(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var fib = function (n, node) {
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

var pell = function (n, node) {
    var tree = pellHelper(n)
    node.appendChild(tree.html);
    //node.style = "display: inline-block;";
    node.setAttribute("id", "pell");
}

var tri = function (n, node) {
    var tree = triHelper(n)
    node.appendChild(tree.html);
    //node.style = "display: inline-block;";
    node.setAttribute("id", "tri");
}

var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 12700px;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +//
    "#tri {" +
	"	display: inline-block;" +
	"	width: 12700px;" +
	"}" +
	"" +
	".tri {" +
	"	background-color: rgba(255,0,0,0.1);" +
	"}" +
	"" +
	".tri-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".tri-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
    ".tri-mid {" +
	"	float;" +/////////It worked!
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
    "#pell {" +
	"	display: inline-block;" +
	"	width: 12700px;" +
	"}" +
	"" +
	".pell {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".pell-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".pell-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +//
	"" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

document.title = "Sequ\xE9cias.";

// IIFE = Immediately-invoked function expression
// An anonymous function which we create, invoke, then throw away.
// It exists to meet these aims:
//   0) Avoid clobbering an existing variable named "div" in the global namespace. I don't have
//      another variable called "div" today, but this protects my webpage in the event that I
//      later incorporate other JavaScript programs from elsewhere.
//   1) Collect a few related program statements and keep them together in a single unit.
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

fib(11, document.querySelector('.red'))


// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var blueDiv = divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'pell');
var greenDiv = divMakerMaker('green', 'tri');

//blueDiv();
yellowDiv();
greenDiv();

//fib(5, document.querySelector('.blue'));
pell(11, document.querySelector('.yellow'));
tri(11, document.querySelector('.green'));