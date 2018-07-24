function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function whichElement(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }    
    alert("You clicked on a project.");
}

var today = new Date();
var year = today.getFullYear();



var el = document.getElementById('copyright');
el.innerHTML = '<p>Copyright &copy; Ben Aitcheson' + year + '</p>';