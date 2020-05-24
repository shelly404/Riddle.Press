	var updatetrue=1;
	var prng = uheprng();	// instantiate our uheprng for requesting input2
	var eventCount = 0;		// this counts events to introduce a (small) bit of additional entropy
	var i,s = '';				// general purpose local vars

			// startup our periodic rehasher
periodicRehash();	
	// this 'Generate' function is called whenever the user presses the "Generate Random Numbers" button on the web page.
	// it takes the currently displayed contents of the "SeedKey" region to initialize the UHEPRNG into a known state,
	// then generates the user-specified number of pseudo-random numbers having the requested range (0 to n-1).
	function Generate() {
	//alert('Please be patient. The key will appear when we are done.');
		var display = '';																	// this is the string that we'll be placing into the PRN display DIV
		var range = 26;				// pull the form's parameters for our generation
		var count = 100000;
		var digits = Math.floor( Math.LOG10E * Math.log( range-1 ) ) + 1;	// maximum number of digits in the "range"

		// perform some preliminary parameter sanity checking
		if ( range <= 1 ) display += '<p><center>The "Range" specified must be at least "2" so that values can be 0 or 1 &#8212; thus 2 values.</center></p>';
		if ( count == 0 ) display += '<p><center>The "Count" of random values requested must be at least 1.</center></p>';
		if ( display == '' ) {
			// we are about to generate our input2, so we capture the current "SeedKey"
			// from the webpage's form field and use it to setup our PRNG
			prng.initState();																// init the PRNG and its private hash function
			prng.hashString( document.getElementById( 'seedkey' ).value );
			// with the PRNG initialized into a known starting state by the provided SeedKey
			// we now pull the requested number of pseudo-random numbers from our the generator
			for ( i = 0; i < count; i++ ) {					// iterate through, concatenating input2 to the 'display' string
				s = prng(range).toString();					// call our PRNG and convert the return to a string
				while ( s.length < digits ) s = '0' + s;	// left-zero pad the result out to the maximum length of digits
				if(s=="00"){s="q"}
				if(s=="01"){s="w"}
				if(s=="02"){s="e"}
				if(s=="03"){s="r"}
				if(s=="04"){s="t"}
				if(s=="05"){s="y"}
				if(s=="06"){s="u"}
				if(s=="07"){s="i"}
				if(s=="08"){s="o"}
				if(s=="09"){s="p"}
				if(s=="10"){s="a"}
				if(s=="11"){s="s"}
				if(s=="12"){s="d"}
				if(s=="13"){s="f"}
				if(s=="14"){s="g"}
				if(s=="15"){s="h"}
				if(s=="16"){s="j"}
				if(s=="17"){s="k"}
				if(s=="18"){s="l"}
				if(s=="19"){s="z"}
				if(s=="20"){s="x"}
				if(s=="21"){s="c"}
				if(s=="22"){s="v"}
				if(s=="23"){s="b"}
				if(s=="24"){s="n"}
				if(s=="25"){s="m"}

		
				display += s + '';								// concatenate the new string onto our growing 'display' string
			}
		}
		// with all of the numbers collected, place the final '' string into the 'input2' DIV
		//alert(display);
		document.getElementById( 'input2' ).value = display;
		// now that we've populated the DIV, show what we have done
		//document.getElementById( 'prndiv' ).style.display = 'block';
	}	

	// this 'Remove' function is called whenever the user presses either of the "Remove Random Numbers" buttons
	// accompanying the random number display.  It simply sets the random number's DIV style to "display:none"
	// and also removes the numbers from the DIV's HTML, thus freeing whatever memory might have been used.
	function Remove() {
		// remove the DIV from our page
		//document.getElementById( 'prndiv' ).style.display = 'none';
		// and remove the text from the DIV after hiding it
		document.getElementById( 'input2' ).innerHTML = '';
	}

	// this 'addEntropy' function calls the UHEPRNG's built-in hashing function with whatever (optional)
	// arguments it is provided, plus a count, the current time and a random value from the local browser
	// as a means of pouring additional entropy into the UHEPRNG's internal state.
	// Note that the invocation of the UHEPRNG initializes the PRNG with a large amount of initial entropy.
	function addEntropy() {

		prng.addEntropy();
		var prngState = prng.string(256);				// obtain 256 random printable characters
		for ( var s='',i=0; i < 8; i++ ) {					// for displaying, break the 256-chars into 8 lines of 32
			if ( i ) s += String.fromCharCode(10);			// firefox needs a CR/LF at the end of each 32-character line
			s += prngState.substr(i*32,32);					// concatenate the string pieces into a larger composite
		}
		//alert(s);
		document.getElementById( 'seedkey' ).value = s;	// display the updated result in the webform
	}

	// this bit of "eye candy" is called upon page load and simply recalls itself five times per second. as
	// long as the "Randomize the Seed Key" option is enabled, it calls 'addEntropy()' to scramble the SeedKey
	function periodicRehash() {
	setTimeout( periodicRehash, 100 );	// re-call THIS function after the indicated interval
	
		if ( updatetrue==0 ){
		addEntropy();
		//alert('entropy');
		 }
		}