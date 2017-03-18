
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

function pellHelper(n)
{
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pell");

    // leaf nodes aka. base case
    if (n < 2)
    {
        if (n === 0)
        {
            value = 0;
        }
        else if (n === 1)
        {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else
    {
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

var fib = function (n, node)
{
	var tree = fibHelper(n)
		node.appendChild(tree.html);
		//node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
}

var pell = function (n, node)
{
    var tree = pellHelper(n)
    node.appendChild(tree.html);
    //node.style = "display: inline-block;";
    node.setAttribute("id", "pell");
}

var tri = function (n, node)
{
    var tree = triHelper(n)
    node.appendChild(tree.html);
    //node.style = "display: inline-block;";
    node.setAttribute("id", "tri");
}

/*var fibButton = function (me)
{
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = slider.value;
    fib(value, form.parentNode);
}

var fibSlider = function (me)
{
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'Fib(' + me.value + ')';
}*/

var style = document.createElement('style');
style.textContent = 
	"#fib {" +
	"	display: inline-block;" +
	"	width: 12550px;" +
	"}" +
	"" +
	".fib {" +
	"	background-color: rgba(15,15,15,0.1);" +
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
	"	width: 29000px;" +
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
	"	width: 13350px;" +
	"}" +
	"" +
	".pell {" +
	"	background-color: rgba(0,255,0,0.1);"+
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

document.body.appendChild(style);
var linkText = document.createTextNode("my title text");

var addLinkToBody = function (tDisplay, lLink, theDiv)
{
    return function ()
    {
        var linker = document.createElement('a');
        linker.appendChild(tDisplay);
        //a.title = tDisplay;
        linker.href = lLink;
        theDiv.appendChild(linker);
    }
}

var addTextToP = function (tDisplay, theP, theBool)
{
    {
        theP.appendChild(tDisplay);
        if(theBool)
        {
            theP.appendChild(document.createElement('br'));
        }
    }
}

document.title = "Sequ\xE9cias.";

var verDiv = document.createElement('div');
var yonText = document.createElement('p');
var redLink = addLinkToBody(document.createTextNode("red box"), "https://oeis.org/A000045", yonText);
var bluLink = addLinkToBody(document.createTextNode("blue box"), "https://oeis.org/A000129", yonText);
var greLink = addLinkToBody(document.createTextNode("green box"), "https://oeis.org/A000073", yonText);
yonText.textContent = 'On this page, the ';
redLink();
addTextToP(document.createTextNode(' shows a tree representation of the Fibonacci sequence to the 11th time.'), yonText, true);
addTextToP(document.createTextNode('The '), yonText, false);
bluLink();
addTextToP(document.createTextNode(' shows one of the Pell sequence to the 11th time.'), yonText, true);
addTextToP(document.createTextNode('Lastly, the '), yonText, false);
greLink();
addTextToP(document.createTextNode(' shows one of the Tribonacci sequence to the 11th time.'), yonText, true);
addTextToP(document.createTextNode('Enjoy!'), yonText, false);
verDiv.appendChild(yonText);
document.body.appendChild(verDiv);

var fibButton = function (me)
{
    var form = me.parentNode;
    var slider = form.querySelector('input');
    var value = slider.value;
    fib(value, form.parentNode);
}

var fibSlider = function (me)
{
    var form = me.parentNode;
    var button = form.querySelector('button');
    button.textContent = 'Fib(' + me.value + ')';
}

/*var divMakerMaker = function (color, id)
{
    return function ()
    {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
}

var RedDiv = divMakerMaker('red', 'fib');
var BlueDiv = divMakerMaker('blue', 'pell');
var greenDiv = divMakerMaker('green', 'tri');

RedDiv();
BlueDiv();
greenDiv();*/

var showChange = function (num, id, func)
{
    document.getElementById(id).innerHTML = func +"(" + num + ")";
}

var clearDiv = function(node)
{
    var vDiv = document.getElementById(node);
    while(vDiv.hasChildNodes())
    {
        vDiv.removeChild(vDiv.lastChild);
    }
}
var fillFib = function(value,node)
{
    clearDiv(node);
    var vNum = document.getElementById(value);
    fib(vNum.value, document.getElementById(node));
}
var addSlider = function(toWhat)
{
    var vSlid = document.createElement('input');
    vSlid.setAttribute('type', 'range');
    vSlid.setAttribute('min', 0);
    vSlid.setAttribute('max', 11);
    vSlid.setAttribute('value', 5);
    vSlid.setAttribute('step', 1);
    vSlid.setAttribute('id', toWhat.id + 'Slid');
    vSlid.setAttribute('onchange', showChange(this.value,this.id))
    toWhat.appendChild(vSlid);
    var vButan = document.createElement('button');
    vButan.setAttribute('id', toWhat.id + 'btn');
    vButan.setAttribute('type', 'button');
    var vWhat;
    if(toWhat.id == "fib")
    {
        vWhat = fib;
    }
    if(toWhat.id == "pell")
    {
        vWhat = pell;
    }
    if(toWhat.id == "tri")
    {
        vWhat = tri;
    }

    vButan.setAttribute('_onclick_', vWhat())

}
/*var addForm = function(theDiv)
{
    var vForm = document.createElement('form');
    addSlider(vForm);
    theDiv.appendChild(vForm);
}*/

//addForm(document.querySelector('.red'));

/*fib(11, document.querySelector('.red'))
pell(11, document.querySelector('.blue'));
tri(11, document.querySelector('.green'));*/