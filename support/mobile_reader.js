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
// 					---- not in the mobile version of the site!
//					var right_panel = document.getElementById(page_number.toString()+"_right"); 
// 					word_index = content_filler(right_panel,words,word_index)
					
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
// 				---- no chapter headings in the mobile site.
/*
				for(i=0;i<sections.length;i++){
					section_title = ""
					for(j=sections[i][0]+1;j<sections[i][1];j++){
// 						console.log("adding "+words[j])
						section_title+=words[j]+" "
					}
					document.getElementById("tree").innerHTML+="<div id='section"+i+"' class = 'chapter' onclick='chapter_navigator("+sections[i][2]+")'>"+section_title+"</div>"
					console.log(section_title)

				}
				
*/
				highlight_heading(1)
				
			}
