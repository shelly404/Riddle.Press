function removeinval(string){
for(i=0; i<string.length; i++){
	Sstring=string.replace('?', 'rt');
}

var allowed="qwertyuiopasdfghjklzxcvbnm`1234567890-=~!@#$%_{}|^&*;':"+'",./<> ?()[]/[\n\r]/g';
for (i=0; i<string.length;i++){
	var currchar=string.charAt(i);
	var bet=allowed.indexOf(currchar);
	if(bet==-1){
	//alert('invalid character:'+currchar);
	
		string=string.replace(currchar, "(unknown character)")
	
	}
}
for (i=0; i<string.length; i++){
	string=string.replace(/[\n\r]/g, 'qnlq');
string=string.replace(" ", "qfwx");
string=string.replace(",", "qwex");
string=string.replace(".", "qerx");
string=string.replace("?", "qrtx");
string=string.replace("/", "qtyx");
string=string.replace("<", "qyux");
string=string.replace(">", "quix");
string=string.replace(";", "qiox");
string=string.replace(":", "qopx");
string=string.replace('"', "qasx");
string=string.replace("'", "qsdx");
string=string.replace("{", "qfgx");
string=string.replace("}", "qghx");
string=string.replace("[", "qhjx");
string=string.replace("]", "qjkx");
string=string.replace("|", "qklx");
string=string.replace("!", "qlzx");
string=string.replace("@", "qzxx");
string=string.replace("#", "qxcx");
string=string.replace("$", "qcvx");
string=string.replace("%", "qvbx");
string=string.replace("^", "qbnx");
string=string.replace("&", "qdfx");
string=string.replace("*", "qnmx");
string=string.replace("(", "qfax");
string=string.replace(")", "qwsx");
string=string.replace("-", "qedx");
string=string.replace("_", "qrfx");
string=string.replace("+", "qtgx");
string=string.replace("=", "qyhx");
string=string.replace("`", "qujx");
string=string.replace("~", "qikx");
string=string.replace("1", "qolx");
string=string.replace("2", "qazx");
string=string.replace("3", "qfpx");
string=string.replace("4", "qwox");
string=string.replace("5", "qeix");
string=string.replace("6", "qrux");
string=string.replace("7", "qtux");
string=string.replace("8", "qzmx");
string=string.replace("9", "qxnx");
string=string.replace("0", "qcbx");
}
return string;
}
function putinval(string){
var allowed="abcdefghijklmnopqrstuvwxyz";
for (i=0; i<string.length;i++){
	var currchar=string.charAt(i);
	var bet=string.search(currchar);
	if(bet==-1){
	//alert('invalid character');
		return "";
	}
}
for(i=0; i<string.length; i++){
		string=string.replace('qnlq', "<br>");
string=string.replace("qdfx", "&");
string=string.replace("qfwx", " ");
string=string.replace("qwex", ",");
string=string.replace("qerx", ".");
string=string.replace("qrtx", "?");
string=string.replace("qtyx", "/");
string=string.replace("qyux", "<");
string=string.replace("quix", ">");
string=string.replace("qiox", ";");
string=string.replace("qopx", ":");
string=string.replace("qasx", '"');
string=string.replace("qsdx", "'");
string=string.replace("qfgx", "{");
string=string.replace("qghx", "}");
string=string.replace("qhjx", "[");
string=string.replace("qjkx", "]");
string=string.replace("qklx", "|");
string=string.replace("qlzx", "!");
string=string.replace("qzxx", "@");
string=string.replace("qxcx", "#");
string=string.replace("qcvx", "$");
string=string.replace("qvbx", "%");
string=string.replace("qbnx", "^");
string=string.replace("qnmx", "*");
string=string.replace("qfax","(");
string=string.replace("qwsx", ")");
string=string.replace("qedx", "-");
string=string.replace("qrfx", "_");
string=string.replace("qtgx", "+");
string=string.replace("qyhx", "=");
string=string.replace("qujx", "`");
string=string.replace("qikx", "~");
string=string.replace("qolx", "1");
string=string.replace("qazx", "2");
string=string.replace("qfpx", "3");
string=string.replace("qwox", "4");
string=string.replace("qeix", "5");
string=string.replace("qrux", "6");
string=string.replace("qtux", "7");
string=string.replace("qzmx", "8");
string=string.replace("qxnx", "9");
string=string.replace("qcbx","0" );
}
return string;

}
