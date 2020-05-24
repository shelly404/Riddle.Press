	
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
//             alert('left');
            flip_back(page_number)
            break;
        case 38:
//             alert('up');
            break;
        case 39:
//             alert('right');
            flip_forward(page_number)
            break;
        case 40:
//             alert('down');
            break;
    }
};
			
			function isOverflown(element) { //Many thanks, Micnic.
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
			function flip_back(current_page_number){
				if(current_page_number=='1'){
					return false;
				}
				current_page_number=Number(current_page_number)
				var current_page = document.getElementById('page'+current_page_number);
				current_style = current_page.style.cssText ;
				current_page.style.cssText = current_style + 'animation: slide-right-out 0.5s forwards;-webkit-animation: slide-right-out 0.5s forwards;';
			window.setTimeout("flip_back_in("+current_page_number+")",500);

			}
			function flip_back_in(current_page_number){
				current_page_number=Number(current_page_number)
				document.getElementById('page'+current_page_number).style.display='none'
				previous_page_number = current_page_number-1
				var previous_page = document.getElementById('page'+previous_page_number)
				previous_page.style.display="flex"
				current_style = previous_page.style.cssText ;
				previous_page.style.cssText = current_style + 'animation: slide-right-in 0.5s forwards;-webkit-animation: slide-right-in 0.5s forwards;';
				page_number = previous_page_number
				highlight_heading(page_number)

			}
			
			function flip_forward(current_page_number){
				future_page_number = Number(current_page_number)+1
				if(words.length-1==word_index||document.getElementById("page"+future_page_number.toString())==null){
					return false;
				}
				current_page_number=Number(current_page_number)
				var current_page = document.getElementById('page'+current_page_number);
				current_style = current_page.style.cssText ;
				current_page.style.cssText = current_style + 'animation: slide-left-out 0.5s forwards;-webkit-animation: slide-left-out 0.5s forwards;';
			window.setTimeout("flip_forward_in("+current_page_number+")",500);

			}
			
			function flip_forward_in(current_page_number){
				//get rid of the old page
				current_page_number=Number(current_page_number)
				document.getElementById('page'+current_page_number).style.display='none'
				
				page_number = current_page_number+1
		
				var next_page = document.getElementById("page"+page_number);

				next_page.style.display="flex";
				current_style = next_page.style.cssText ;
				next_page.style.cssText = current_style + 'animation: slide-left-in 0.5s forwards;-webkit-animation: slide-left-in 0.5s forwards;';	
				highlight_heading(page_number)
			
				
			}
			
			
			function chapter_navigator(to_page){
				console.log(page_number)
				current_page_number=Number(page_number)
				var current_page = document.getElementById('page'+current_page_number);
				current_style = current_page.style.cssText ;
				current_page.style.cssText = current_style + 'animation: fade-out 1s forwards;-webkit-animation: fade-out 1s forwards;';
				window.setTimeout("chapter_in("+to_page+")",1000);

			}
			function chapter_in(page_to){
				//get rid of the old page
				current_page_number=Number(current_page_number)
				document.getElementById('page'+current_page_number).style.display='none'
				
				page_number = Number(page_to)
		
				var next_page = document.getElementById("page"+page_number);
				next_page.style.display="flex";
				current_style = next_page.style.cssText ;
				next_page.style.cssText = current_style + 'animation: fade-in 1s forwards;-webkit-animation: fade-in 1s forwards;';
				highlight_heading(page_to)
				
			}
			function highlight_heading(page_number){
				//returns the heading under which the current page falls.
				var i=0; 
				while(page_number>=sections[i][2]&&page_number<sections[sections.length-1][2]){
					console.log(sections[i][2]);
					i++;
				}
				let heading_specified = i-1
				if(page_number>=sections[sections.length-1][2]){
					heading_specified = sections.length-1
				}
				document.getElementById('section'+heading_specified).classList.add('current_section');
				
				
				for(b=0;b<sections.length;b++){
					if(b==heading_specified){
						document.getElementById('section'+b).style.backgroundColor='#063c58';
// 						document.getElementById('section'+b).style.color='black';
					}
					else{
						document.getElementById('section'+b).style.backgroundColor='transparent';
						document.getElementById('section'+b).style.color='beige';

					}
				}
				return i-1;
			}
			
			var page_number = 1;
			var word_index = 0;
			var words = [];
			var sections = [];
			
			function unleash_the_kraken(){
				full_text = document.getElementById("FULL_CONTENT").innerHTML;
				full_text = full_text.replace(/[\r\n]+/g," <br> ").replace(new RegExp('<h1>', 'g')," <h1> ").replace(new RegExp('</h1>', 'g')," </h1> ").replace(new RegExp('<p>', 'g')," </br> ").replace(new RegExp('</p>', 'g'),"");
				words = full_text.split(" ");
				
				//create chapter headings
				var loopy_words = words;
				var closer_tally = 0
				while(loopy_words.indexOf("<h1>")!=-1){
					var opener = loopy_words.indexOf("<h1>");
// 					console.log('opener found: '+opener);
					var closer = loopy_words.indexOf("</h1>");
// 					console.log('closer found: '+closer);
					sections.push([opener+closer_tally,closer+closer_tally]);
					loopy_words = loopy_words.slice(closer+1,loopy_words.length);
					closer_tally += closer+1
// 					console.log(loopy_words)
// 					console.log(loopy_words.indexOf("<h1>"));
				}
 				console.log(sections);


				//this guy counts the number of headings we've identified.
				// all seen is triggered when (duh) they've all been seen.
				var headings_seen = 0
				var all_seen=false;
				
				while(word_index<words.length-1){
/*
					if(page_number>50){
						break;
					}
*/
// 					console.log("the current is "+ word_index+" versus "+words.length)
					// insert the raw page block, with appropriately labeled sections
					var pages = document.getElementById("reader").innerHTML;
					document.getElementById("reader").innerHTML = pages+document.getElementById("STANDARD_PAGE").innerHTML.replace(/NUM/g, page_number.toString())
					
					//make the page visible, but with 0 opacity (he he he)
					document.getElementById("page"+page_number).style.display="flex";
					document.getElementById("page"+page_number).style.opacity="0";
	
					
					//put content in the left page panel
					var left_panel = document.getElementById(page_number.toString()+"_left");
					word_index = content_filler(left_panel,words,word_index)
					//put content in the right panel
					var right_panel = document.getElementById(page_number.toString()+"_right");
					word_index = content_filler(right_panel,words,word_index)
					
					//change the width of the status bar
					word_ratio = word_index/words.length*100;
					document.getElementById("page_status"+page_number.toString()).style.width=word_ratio.toString()+"%";
					
					//take out the display
					document.getElementById("page"+page_number).style.display="none";
					document.getElementById("page"+page_number).style.opacity="1";
					
					//assess how many headings (if any) lie on this page
					
					while(sections[headings_seen][0]<word_index&&!all_seen){
// 						console.log("We've found a heading on page number "+page_number+" with sections_seen="+headings_seen);
						sections[headings_seen].push(page_number);
						headings_seen++;
// 						console.log(headings_seen+" "+sections.length);
						if(headings_seen>=sections.length){
// 							console.log("about to break");
							headings_seen=0;
							all_seen = true;
						}
					}
					
					//increment the page number.
					page_number++
				}
				document.getElementById("page1").style.display="flex";
				page_number=1
				
				
				// insert the chapter headings in the sidebar, complete with links.
				for(i=0;i<sections.length;i++){
					section_title = ""
					for(j=sections[i][0]+1;j<sections[i][1];j++){
// 						console.log("adding "+words[j])
						section_title+=words[j]+" "
					}
					document.getElementById("tree").innerHTML+="<div id='section"+i+"' class = 'chapter' onclick='chapter_navigator("+sections[i][2]+")'>"+section_title+"</div>"
					console.log(section_title)

				}
				
				highlight_heading(1)
				
			}
			
			
			
			function content_filler(element,words,word_index){
				//console.log(element)
				brackets_open = 0;
				while(!isOverflown(element)){
					if(word_index>=words.length-1){
						break;
					}
					appender = "";
					appender+=words[word_index]+" ";
					//console.log(words[word_index])
					
					if(words[word_index].indexOf("<br>")==-1){ //We exclude <br>s and <p>s, as these are bound to be broken in normal text.
						if(words[word_index].indexOf("<")>-1){
							while(words[word_index].indexOf("</")==-1){
								//console.log("searching for the closing bracket")
								word_index++
								if(word_index==words.length-1){
									break;
								}
								//console.log(words[word_index])
								appender+=words[word_index]+" ";
							}
						}	
					}
					//node = document.createTextNode(words[word_index]+" ")
					element.innerHTML += appender;
					word_index++;
				}
				return word_index;
			}
			