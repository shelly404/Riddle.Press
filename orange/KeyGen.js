//////////We thank the wonderful authors on stackoverflow.com (DixonD, Felix Saperelli, etc) and w3schools.com for their work on cookies,(which are frankly beyond me) that allow}this open source privacy platform to exist.
////alert(makekey(20));
//var rand= window.crypto.getRandomValues(rand);
////alert(rand);
function readCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
        if (!ca[i].indexOf(name))
            return ca[i].replace(name, '');
}

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

var masterpassword;
// w3schools.com
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
function checkCookie() {
//alert("checking...")
    var username=getCookie("hasused");
    if (username!="") {
    
        //alert("done")
    }else{
    setCookie("hasused", "yup", 1235)

//window.location.replace("Tutorial.html")

      
                                
        
    }
}
//checkCookie();
// masterpassword=prompt("Please enter your master password to use Orange Encipher", "");

var nametime = $.jStorage.get("nametime", "Select correspondent")
//var nametime=$.jStorage.get('nametime');
 //masterpassword=prompt("Please enter your master password to use Orange Encipher", "");
function loader(){
$.jStorage.reInit()
document.getElementById('chooseperson').className ='slideLeft';
document.getElementById('body').style.display='none';
document.getElementById('chooseperson').style.display='block';
//////alert(document.cookie);
var tstc=$.jStorage.get("Charlie Nicholas Phitime");
////alert(tstc);
////alert(nametime);
var firstnames=[];
for (i=0; i<20; i++){
var p=i*20;
////alert(p);
	firstnames[i]=nametime.substr(p, 20);
	////alert(firstnames[i]);
	v=i+1;
	var v=v.toString();
	v="person"+v;
	////alert(v);
	document.getElementById(v).innerHTML=firstnames[i];
}
}
var namster;
function picker(numbe){
numbe=numbe.toString();
numbe="person"+numbe;
////alert(numbe);
 namster=document.getElementById(numbe).innerHTML;
////alert(namster);
var keypre=$.jStorage.get(namster);
////alert(keypre);
var key2=decipher(masterpassword,keypre)
////alert(key2)
key=key2;
percount=$.jStorage.get(namster+'time');
////alert(percount);
var percountplus=percount+1;
////alert(percountplus);
$.jStorage.deleteKey(nametime+'time');
var adu=namster+"time";
////alert(adu);
$.jStorage.set(adu, percountplus);
document.getElementById('chooseperson').className ='slideLeft';
document.getElementById('body').style.display='block';
document.getElementById('chooseperson').style.display='none';
}
////alert(firstnames);


function openterm(){
document.getElementById('terminal').style.display="block";

}
function closeterm(){
document.getElementById('terminal').style.display="none";

}




function checkanswer(responce, answer) {
	return responce.toUpperCase().trim()==answer.toUpperCase().trim()
	
}
var make=false;
var password;
var keyy;
var p=0;

function pusher1()
{
p++
////alert(p);

if(p==1){
//alert(0);
	updatetrue=0;
periodicRehash();
document.getElementById('input2').style.width="90%";

document.getElementById('seedkey').style.display="block";


document.getElementById('text').innerHTML="We will set up, for your convenience, a cookie stache that will take the hard bit out of encryption.";
document.getElementById('buttonbig').innerHTML="Click here again";

}
if(p==2){
document.getElementById('input2').value="";
document.getElementById('text').innerHTML="This process will create a key that can be used for communications between two people.";
document.getElementById('buttonbig').innerHTML="Then click here.";

}
if(p==3){
document.getElementById('input2').value="";
document.getElementById('text').innerHTML="First, do you have a key from your friend, or do need to create one? ";
document.getElementById('buttonbig').style.display="block";
document.getElementById('buttonbigtwo').style.display="block";
document.getElementById('buttonbig').style.height="15%";
document.getElementById('buttonbigtwo').style.height="15%";
document.getElementById('buttonbig').innerHTML="I have one.";
document.getElementById('buttonbigtwo').innerHTML="I need one";
}


if(p==4){
//document.getElementById('input2').value="";
document.getElementById('text').innerHTML="Paste your key into the white box.";
document.getElementById('buttonbig').innerHTML="Then click here!";
document.getElementById('buttonbig').style.height="30%";
document.getElementById('input2').style.width="100%";
		updatetrue=1;

document.getElementById('seedkey').style.display="none";
document.getElementById('buttonbigtwo').style.display="none";

}         
if(p==5){
keyy=document.getElementById('input2').value;
//alert(keyy);
document.getElementById('input2').value=pin;
document.getElementById('text').innerHTML="Please enter the password you and your friend will (or have) use(d) to encrypt this key. This should not be your master password.";
document.getElementById('buttonbig').innerHTML="Then click here!";
document.getElementById('buttonbig').style.display="block";
}    

if(p==6){

document.getElementById('text').innerHTML="Next we will apply your password to the key. This is a long process, and may take a while, so please be patient.";
document.getElementById('buttonbig').innerHTML="Ready?";

}
if(p==7){
 password=document.getElementById('input2').value;
////alert(keyy);
//alert(make);
if(make==true){
//alert("true")
//alert(keyy)
//alert(password);
var keyy2=encipher(password,keyy);
keyy2="#"+keyy2;
//alert(keyy2)
document.getElementById('input2').value=keyy2;
document.getElementById('text').innerHTML="Your key has been encrypted. Please copy this key onto a plain text document, and give it securely to your friend.";
document.getElementById('buttonbig').innerHTML="Click!";
document.getElementById('buttonbig').style.display="block";

}
else{
//alert("false");
keyy=keyy.replace("#", "");
keyy=decipher(password,keyy);

document.getElementById('text').innerHTML="Your key has been decrypted. ";
document.getElementById('buttonbig').innerHTML="Click!";
document.getElementById('input2').value=keyy;
document.getElementById('buttonbig').style.display="block";


}
}
if(p==8){
document.getElementById('input2').value=namefill;
document.getElementById('text').innerHTML="Finally, please enter your friend's name.";
document.getElementById('buttonbig').innerHTML="Then click here!";
//document.getElementById('buttonright').innerHTML="I have one";
document.getElementById('buttonbig').style.display="block";
}  
if(p==9){
var namee=document.getElementById('input2').value;
//alert(namee);
namee=trimname(namee);
//alert(namee);
var finalone=encipher(masterpassword,keyy);
finalone=finalone;
//alert(finalone);
//document.cookie="johnny=timothy";
$.jStorage.set(namee+"time", 0);
$.jStorage.set(namee, finalone);
$.jStorage.set('nametime',nametime+namee );
// Values you provide
document.getElementById('text').innerHTML="The Cookies Have Been Created and Encrypted Using Your Master Key.";
document.getElementById('buttonbig').innerHTML="Click to close.";
//document.getElementById('buttonright').innerHTML="I have one";
document.getElementById('buttonbig').style.display="block";
//document.getElementById('input2').style.display="none";
//document.getElementById('buttonright').style.display="none";	

}
if(p==10){
p=0;

document.getElementById('newperson').style.display="none";
document.getElementById('body').style.display="block";
}  
  
}
//turn plaintext into Ï€Â¬Ã¥Ë†Ëœâ€ Â´â‰ˆâ€ ;
function swapping(key){
for (i=0; i<key.length; i++){
	var charkey=key.charAt(i);
	var indexofcharkey=trans.indexOf(charkey);
	sharkey=ref.charAt(indexofcharkey);
	key.replace(charkey, sharkey);
}
return key;
}

function deswapping(key){
for (i=0; i<key.length; i++){
	var charkey=key.charAt(i);
	var indexofcharkey=ref.indexOf(charkey);
	sharkey=trans.charAt(indexofcharkey);
	key.replace(charkey, sharkey);
}
return key;
}





function pusher2(){
//document.getElementById('input2').value="";
var collkey="";
p++;
if(p==4){

//document.getElementById('buttonbig').innerHTML="Click here!";
document.getElementById('text').innerHTML="Here ya go!";
document.getElementById('buttonbig').style.display="block";
document.getElementById('seedkey').style.display="block";
	//alert('Generating key. This may take a while.');
	//updatetrue=0;	
	periodicRehash();
	
	Generate();
	//var hashit=document.getElementById('input2').value;

		//updatetrue=1;
	//document.getElementById('seedkey').style.display="none";
	
make=true;
document.getElementById('buttonbig').innerHTML="Click here!";
document.getElementById('text').innerHTML="Here ya go!";
document.getElementById('buttonbig').style.display="block";
document.getElementById('buttonbigtwo').style.display="none";
document.getElementById('buttonbig').style.height="30%";
document.getElementById('input2').style.width="100%";
		updatetrue=1;

document.getElementById('seedkey').style.display="none";

}   

	}
function trimname(namee){
namee=namee+"--------------------------------------";
var mane="";
for(i=0; i<20; i++){
	mane=mane+namee.charAt(i);
}
namee=mane;
return namee;
}




var t;
var pin=chance.word({syllables: 4})
////alert(pin);
var namefill=chance.name({middle:true});
////alert(namefill);
function rancharac(){
	chance= new Chance();
var charactic=chance.integer({min: 0, max: 32}) 
 charactic=ciphertext.charAt(charactic);
 return charactic;
}
/*function makekey(length){
var key="";
//alert('Please hold down the enter key for about a minute while your key is generated. Start now.');
for(i=0;i<length; i++){
////alert("Keep holding : "+i+" of 500");

var charactic=rancharac();
key=key+charactic;
}
return key;
}
*/
var y=0;
function newperson(){
y++
if (y==1){
	document.getElementById('newperson').className ='slideUp';
	document.getElementById('newperson').style.display='block';
	document.getElementById('body').style.display='none';
	document.getElementById('text').innerHTML='Lets add some folks to your acquaintance list.';

}
if (y>1){

pusher1();
}
}


var clicker1=false;
function readable(){
if(enorde==true){
if(clicker1==false){
////alert('false');
	clicker1=true;
	var text=document.getElementById('output').innerHTML;
	////alert(text);
	document.getElementById('readit').className ='slideLeft';
	document.getElementById('readit').style.display='block';
	document.getElementById('body').style.display='none';
	document.getElementById('readit').innerHTML=text;
	return;
	}
	
if(clicker1==true){
clicker1=false;
////alert('true')
	document.getElementById('readit').className ='slideLeft';
	document.getElementById('readit').style.display='none';
	document.getElementById('body').style.display='block';
	return;
	}
}
else{
	sendMail();
}
}

function sendMail()  {
var sendtext=document.getElementById('output').innerHTML

   var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("Without security, there can be no freedom of information, and no true democracy.")
             + "&body=" + escape(sendtext)
    ;

    window.location.href = link;} 
function deleter(){
	$.jStorage.flush()
	document.getElementById('chooseperson').className ='slideLeft';
document.getElementById('body').style.display='block';
document.getElementById('chooseperson').style.display='none';
}
function enterpass(){
	masterpassword=document.getElementById("masterpass").value;
	//alert(masterpassword);
	if(masterpassword=="" || masterpassword==null){
	masterpassword="";
		document.getElementById("introtext").innerHTML="You haven't typed anything! Please Enter Your Master Password."
	}
	else{
		document.getElementById("starter").style.display="none";
			document.getElementById('body').className ='slideRight';
	document.getElementById('body').style.display='block';

	}
}
function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            document.getElementById('introenter').click();
        }
    }
    window.onload = function(){
  var text_input = document.getElementById ('masterpass');
  text_input.focus ();
  text_input.select ();
}