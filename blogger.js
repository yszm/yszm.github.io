
var n = new Date().getTime();

// لجلب عنوان الموقع
function getSiteUrl(){return document.location.href.match(/\:(.*?)\./i)[1].replace("//", "");}

// لجلب ما بداخل الكائنات الخاصه بي
function getYszmElement(a,g){return g.substring(g.lastIndexOf('['+a+']')+a.length+2,g.lastIndexOf('[/'+a+']'));}

// لاضافة الفووتر
document.body.innerHTML += '<style>.footer'+n+'{color: #fff;font-size:12px;font-family:arial;text-align: center;background-color:#282828;padding:11px 0;}.footer'+n+' a{color: #fff;}.footer'+n+' a:hover{color:#81b441;}</style><div class="footer'+n+'"><div class="container">	all copyright <a href="'+ document.location.href +'">'+ getData('siteName','get') +'</a> '+ new Date().getFullYear() +' | Made with <i class="fa fa-heart" style="color:#f00;" aria-hidden="true"></i> by <a href="https://www.facebook.com/yszm.zeidan">YSZM</a></div></div>';

// لقفل الكود من التعديل
function lockInspect(){
var gAction=window.innerWidth+19>window.outerWidth&&window.innerHeight+120>window.outerHeight?0:1;
if(gAction){document.body.innerHTML='Inspect Is on';}
}lockInspect();

// لجلب طول الصفحه
function outoHeight(v,a){
getElement(v).style.minHeight = window.innerHeight-a+"px";
}outoHeight("warb",40);


//-----------------------------------------------------------
/*

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) { // Prevent Ctrl+U        
        return false;
    }
});

// لمنع استخادم الزر الايمن للموس

$(document).on("contextmenu", function (e) {        
    e.preventDefault();
});

*/
//-----------------------------------------------------------

$(window).resize(function() {
lockInspect();
outoHeight("warb",40);
});





// استدعاء نظام التحكم 
$.get('https://yszm.github.io/blogger.html',function(data){


var getData=getYszmElement(getSiteUrl(),data);
    if(getYszmElement('run',getData)=='yes'){
		var run="you are in.";
    }else{
		var run="you are no't in.";
	}


getElement("yszmTest").innerHTML=run;



});























var getOuterWidth = window.outerWidth;
var getInnerWidth = window.innerWidth;

var getOuterHeight = window.outerHeight;
var getInnerHeight = window.innerHeight;





// getInnerWidth + " -> " +  getOuterWidth + "</br>" + getInnerHeight + " -> " +  getOuterHeight + "</br>" + gAction;



function getElement(v){return document.getElementById(v);}

function openMenu() {
		var x = getElement('LinkList1');
		var y = getElement('LinkList2');
	if (x.style.display === 'block') {
		x.style.display = 'none';
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

function getData(a,b){
	var g=getElement('getTextBody').innerHTML;
	if(b=='get'){
		return g.substring(g.lastIndexOf('['+a+']')+a.length+2,g.lastIndexOf('[/'+a+']'));
	}else{
		getElement(b).innerHTML=g.substring(g.lastIndexOf('['+a+']')+a.length+2,g.lastIndexOf('[/'+a+']'));
	}
}
getData('size','size');
getData('file','file');

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("link");
    if (user != "") {
		// user come back.

		var skipTime = '10';





		

		time=skipTime,r=getElement("btnDownload"),tmp=time;

		setInterval(function(){

			var c=tmp--,m=(c/60)>>0,s=(c-m*60)+'';

			if(s>1){
				r.innerHTML='<i class="fa fa-clock-o" aria-hidden="true"></i> Waiting '+s
				tmp!=0||(tmp=time);

				getElement("btnDownload").onclick = null;

			}else{
				r.innerHTML='Download File <i class="fa fa-download"></i>';
              	getElement("btnDownload").onclick = function goToTheLink(){window.location=getData('link','get');};
			}

		},1000);

		getElement("HTML11").style.display = "block";

		

    } else {
		// new user.
		
    	getElement("btnGroupGetLink").style.display = "block";
		
    }
}

function getLink(){
		
	user = getData('link','get');
	
	if (user != "" && user != null) {
		setCookie("link", user, 60);
		window.location=getElement('timesTampLink').href;
    }
   
	



	//var yszm=getElement('timesTampLink').href;
	
	//document.getElementById('get-link').innerHTML = yszm;




}







