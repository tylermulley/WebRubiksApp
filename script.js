// TURINING FUNCTIONS

	// Turns Top face clockwise
	function U(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var yellowSide = $('.yellow .pieces').children();

		
		var yellow1 = $(yellowSide[0]).css('background-color');
		var yellow2 = $(yellowSide[1]).css('background-color');
		var yellow3 = $(yellowSide[2]).css('background-color');
		var yellow4 = $(yellowSide[3]).css('background-color');

		var yellow6 = $(yellowSide[5]).css('background-color');
		var yellow7 = $(yellowSide[6]).css('background-color');
		var yellow8 = $(yellowSide[7]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		$(yellowSide[0]).css("background-color", "" + yellow7 +"");
		$(yellowSide[1]).css("background-color", "" + yellow4 +"");
		$(yellowSide[2]).css("background-color", "" + yellow1 +"");
		$(yellowSide[3]).css("background-color", "" + yellow8 +"");

		$(yellowSide[5]).css("background-color", "" + yellow2 +"");
		$(yellowSide[6]).css("background-color", "" + yellow9 +"");
		$(yellowSide[7]).css("background-color", "" + yellow6 +"");
		$(yellowSide[8]).css("background-color", "" + yellow3 +"");
		
		
		for (i = 0; i < 3; i++){
			
			currentBlue = $(blueSide[i]).css('background-color');
			currentGreen = $(greenSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			$(blueSide[i]).css("background-color", "" + currentRed +"");
			$(greenSide[i]).css("background-color", "" + currentOrange +"");
			$(redSide[i]).css("background-color", "" + currentGreen +"");
			$(orangeSide[i]).css("background-color", "" + currentBlue +"");

		}

		return "U";
		
	};
	// Turns Top face counter-clockwise
	function UPrime(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var yellowSide = $('.yellow .pieces').children();

		var yellow1 = $(yellowSide[0]).css('background-color');
		var yellow2 = $(yellowSide[1]).css('background-color');
		var yellow3 = $(yellowSide[2]).css('background-color');
		var yellow4 = $(yellowSide[3]).css('background-color');

		var yellow6 = $(yellowSide[5]).css('background-color');
		var yellow7 = $(yellowSide[6]).css('background-color');
		var yellow8 = $(yellowSide[7]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		$(yellowSide[0]).css("background-color", "" + yellow3 +"");
		$(yellowSide[1]).css("background-color", "" + yellow6 +"");
		$(yellowSide[2]).css("background-color", "" + yellow9 +"");
		$(yellowSide[3]).css("background-color", "" + yellow2 +"");

		$(yellowSide[5]).css("background-color", "" + yellow8 +"");
		$(yellowSide[6]).css("background-color", "" + yellow1 +"");
		$(yellowSide[7]).css("background-color", "" + yellow4 +"");
		$(yellowSide[8]).css("background-color", "" + yellow7 +"");

		for (i = 0; i < 3; i++){
			currentBlue = $(blueSide[i]).css('background-color');
			currentGreen = $(greenSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			$(blueSide[i]).css("background-color", "" + currentOrange +"");
			$(greenSide[i]).css("background-color", "" + currentRed +"");
			$(redSide[i]).css("background-color", "" + currentBlue +"");
			$(orangeSide[i]).css("background-color", "" + currentGreen +"");
		}

		return "U'";
		
	};

	// Turns Top face 180 degrees
	function U2(){
		U();
		U();
		return "U2";
	};

	// Turns bottom face clockwise
	function D(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var whiteSide = $('.white .pieces').children();

		var white1 = $(whiteSide[0]).css('background-color');
		var white2 = $(whiteSide[1]).css('background-color');
		var white3 = $(whiteSide[2]).css('background-color');
		var white4 = $(whiteSide[3]).css('background-color');

		var white6 = $(whiteSide[5]).css('background-color');
		var white7 = $(whiteSide[6]).css('background-color');
		var white8 = $(whiteSide[7]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');

		$(whiteSide[0]).css("background-color", "" + white7 +"");
		$(whiteSide[1]).css("background-color", "" + white4 +"");
		$(whiteSide[2]).css("background-color", "" + white1 +"");
		$(whiteSide[3]).css("background-color", "" + white8 +"");

		$(whiteSide[5]).css("background-color", "" + white2 +"");
		$(whiteSide[6]).css("background-color", "" + white9 +"");
		$(whiteSide[7]).css("background-color", "" + white6 +"");
		$(whiteSide[8]).css("background-color", "" + white3 +"");

		for (i = 6; i < 9; i++){
			currentBlue = $(blueSide[i]).css('background-color');
			currentGreen = $(greenSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			$(blueSide[i]).css("background-color", "" + currentOrange +"");
			$(greenSide[i]).css("background-color", "" + currentRed +"");
			$(redSide[i]).css("background-color", "" + currentBlue +"");
			$(orangeSide[i]).css("background-color", "" + currentGreen +"");
		}
		return ("D");
	};

	// Turns bottom face counter-clockwise
	function DPrime(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var whiteSide = $('.white .pieces').children();

		var white1 = $(whiteSide[0]).css('background-color');
		var white2 = $(whiteSide[1]).css('background-color');
		var white3 = $(whiteSide[2]).css('background-color');
		var white4 = $(whiteSide[3]).css('background-color');

		var white6 = $(whiteSide[5]).css('background-color');
		var white7 = $(whiteSide[6]).css('background-color');
		var white8 = $(whiteSide[7]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');

		$(whiteSide[0]).css("background-color", "" + white3 +"");
		$(whiteSide[1]).css("background-color", "" + white6 +"");
		$(whiteSide[2]).css("background-color", "" + white9 +"");
		$(whiteSide[3]).css("background-color", "" + white2 +"");

		$(whiteSide[5]).css("background-color", "" + white8 +"");
		$(whiteSide[6]).css("background-color", "" + white1 +"");
		$(whiteSide[7]).css("background-color", "" + white4 +"");
		$(whiteSide[8]).css("background-color", "" + white7 +"");

		for (i = 6; i < 9; i++){
			currentBlue = $(blueSide[i]).css('background-color');
			currentGreen = $(greenSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			$(blueSide[i]).css("background-color", "" + currentRed +"");
			$(greenSide[i]).css("background-color", "" + currentOrange +"");
			$(redSide[i]).css("background-color", "" + currentGreen +"");
			$(orangeSide[i]).css("background-color", "" + currentBlue +"");
		}

		return ("D'");
	};

	// Turns bottom face 180 degress
	function D2(){
		D();
		D();
		return ("D2");
	};

	// Turns right face clockwise
	function R(){
		var whiteSide = $(".white .pieces").children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var blueSide = $('.blue .pieces').children();

		var blue1 = $(blueSide[0]).css('background-color');
		var blue2 = $(blueSide[1]).css('background-color');
		var blue3 = $(blueSide[2]).css('background-color');
		var blue4 = $(blueSide[3]).css('background-color');

		var blue6 = $(blueSide[5]).css('background-color');
		var blue7 = $(blueSide[6]).css('background-color');
		var blue8 = $(blueSide[7]).css('background-color');
		var blue9 = $(blueSide[8]).css('background-color');

		$(blueSide[0]).css("background-color", "" + blue7 +"");
		$(blueSide[1]).css("background-color", "" + blue4 +"");
		$(blueSide[2]).css("background-color", "" + blue1 +"");
		$(blueSide[3]).css("background-color", "" + blue8 +"");

		$(blueSide[5]).css("background-color", "" + blue2 +"");
		$(blueSide[6]).css("background-color", "" + blue9 +"");
		$(blueSide[7]).css("background-color", "" + blue6 +"");
		$(blueSide[8]).css("background-color", "" + blue3 +"");

		var red1 = $(redSide[0]).css('background-color');
		var red4 = $(redSide[3]).css('background-color');
		var red7 = $(redSide[6]).css('background-color');

		var yellow3 = $(yellowSide[2]).css('background-color'); 
		var yellow6 = $(yellowSide[5]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		for (i = 0; i < 9; i++){
			currentWhite = $(whiteSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			if (i == 2 || i == 5 || i == 8){
				$(yellowSide[i]).css("background-color", "" + currentOrange +"");
				$(orangeSide[i]).css("background-color", "" + currentWhite +"");
			}
		}

		$(whiteSide[2]).css("background-color", "" + red7 +"");
		$(whiteSide[5]).css("background-color", "" + red4 +"");
		$(whiteSide[8]).css("background-color", "" + red1 +"");

		$(redSide[0]).css("background-color", "" + yellow9 +"");
		$(redSide[3]).css("background-color", "" + yellow6 +"");
		$(redSide[6]).css("background-color", "" + yellow3 +"");

		return ("R");
	};

	// Turns right face counter-clockwise
	function RPrime(){
		var whiteSide = $(".white .pieces").children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var blueSide = $('.blue .pieces').children();

		var blue1 = $(blueSide[0]).css('background-color');
		var blue2 = $(blueSide[1]).css('background-color');
		var blue3 = $(blueSide[2]).css('background-color');
		var blue4 = $(blueSide[3]).css('background-color');

		var blue6 = $(blueSide[5]).css('background-color');
		var blue7 = $(blueSide[6]).css('background-color');
		var blue8 = $(blueSide[7]).css('background-color');
		var blue9 = $(blueSide[8]).css('background-color');

		$(blueSide[0]).css("background-color", "" + blue3 +"");
		$(blueSide[1]).css("background-color", "" + blue6 +"");
		$(blueSide[2]).css("background-color", "" + blue9 +"");
		$(blueSide[3]).css("background-color", "" + blue2 +"");

		$(blueSide[5]).css("background-color", "" + blue8 +"");
		$(blueSide[6]).css("background-color", "" + blue1 +"");
		$(blueSide[7]).css("background-color", "" + blue4 +"");
		$(blueSide[8]).css("background-color", "" + blue7 +"");

		var red1 = $(redSide[0]).css('background-color');
		var red4 = $(redSide[3]).css('background-color');
		var red7 = $(redSide[6]).css('background-color');

		var white3 = $(whiteSide[2]).css('background-color'); 
		var white6 = $(whiteSide[5]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');

		for (i = 0; i < 9; i++){
			currentYellow= $(yellowSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			if (i == 2 || i == 5 || i == 8){
				$(orangeSide[i]).css("background-color", "" + currentYellow +"");
				$(whiteSide[i]).css("background-color", "" + currentOrange +"");
			}
		}

		$(yellowSide[2]).css("background-color", "" + red7 +"");
		$(yellowSide[5]).css("background-color", "" + red4 +"");
		$(yellowSide[8]).css("background-color", "" + red1 +"");

		$(redSide[0]).css("background-color", "" + white9 +"");
		$(redSide[3]).css("background-color", "" + white6 +"");
		$(redSide[6]).css("background-color", "" + white3 +"");

		return ("R'");
		
	};

	// Turns Right face 180 degrees
	function R2(){
		R();
		R();
		return ("R2");
	};

	// Turns left face clockwise
	function L(){
		var whiteSide = $(".white .pieces").children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var greenSide = $('.green .pieces').children();

		var green1 = $(greenSide[0]).css('background-color');
		var green2 = $(greenSide[1]).css('background-color');
		var green3 = $(greenSide[2]).css('background-color');
		var green4 = $(greenSide[3]).css('background-color');

		var green6 = $(greenSide[5]).css('background-color');
		var green7 = $(greenSide[6]).css('background-color');
		var green8 = $(greenSide[7]).css('background-color');
		var green9 = $(greenSide[8]).css('background-color');

		$(greenSide[0]).css("background-color", "" + green7 +"");
		$(greenSide[1]).css("background-color", "" + green4 +"");
		$(greenSide[2]).css("background-color", "" + green1 +"");
		$(greenSide[3]).css("background-color", "" + green8 +"");

		$(greenSide[5]).css("background-color", "" + green2 +"");
		$(greenSide[6]).css("background-color", "" + green9 +"");
		$(greenSide[7]).css("background-color", "" + green6 +"");
		$(greenSide[8]).css("background-color", "" + green3 +"");

		var red3 = $(redSide[2]).css('background-color');
		var red6 = $(redSide[5]).css('background-color');
		var red9 = $(redSide[8]).css('background-color');

		var white1 = $(whiteSide[0]).css('background-color'); 
		var white4 = $(whiteSide[3]).css('background-color');
		var white7 = $(whiteSide[6]).css('background-color');

		for (i = 0; i < 9; i++){
			currentYellow= $(yellowSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			if (i == 0 || i == 3 || i == 6){
				$(orangeSide[i]).css("background-color", "" + currentYellow +"");
				$(whiteSide[i]).css("background-color", "" + currentOrange +"");
			}
		}

		$(yellowSide[0]).css("background-color", "" + red9 +"");
		$(yellowSide[3]).css("background-color", "" + red6 +"");
		$(yellowSide[6]).css("background-color", "" + red3 +"");

		$(redSide[2]).css("background-color", "" + white7 +"");
		$(redSide[5]).css("background-color", "" + white4 +"");
		$(redSide[8]).css("background-color", "" + white1 +"");

		return ("L");

	};

	// Turns left face counter-clockwise
	function LPrime(){
		var whiteSide = $(".white .pieces").children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var greenSide = $('.green .pieces').children();

		var green1 = $(greenSide[0]).css('background-color');
		var green2 = $(greenSide[1]).css('background-color');
		var green3 = $(greenSide[2]).css('background-color');
		var green4 = $(greenSide[3]).css('background-color');

		var green6 = $(greenSide[5]).css('background-color');
		var green7 = $(greenSide[6]).css('background-color');
		var green8 = $(greenSide[7]).css('background-color');
		var green9 = $(greenSide[8]).css('background-color');

		$(greenSide[0]).css("background-color", "" + green3 +"");
		$(greenSide[1]).css("background-color", "" + green6 +"");
		$(greenSide[2]).css("background-color", "" + green9 +"");
		$(greenSide[3]).css("background-color", "" + green2 +"");

		$(greenSide[5]).css("background-color", "" + green8 +"");
		$(greenSide[6]).css("background-color", "" + green1 +"");
		$(greenSide[7]).css("background-color", "" + green4 +"");
		$(greenSide[8]).css("background-color", "" + green7 +"");

		var red3 = $(redSide[2]).css('background-color');
		var red6 = $(redSide[5]).css('background-color');
		var red9 = $(redSide[8]).css('background-color');

		var yellow1 = $(yellowSide[0]).css('background-color'); 
		var yellow4 = $(yellowSide[3]).css('background-color');
		var yellow7 = $(yellowSide[6]).css('background-color');

		for (i = 0; i < 9; i++){
			currentWhite = $(whiteSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			if (i == 0 || i == 3 || i == 6){
				$(yellowSide[i]).css("background-color", "" + currentOrange +"");
				$(orangeSide[i]).css("background-color", "" + currentWhite +"");
			}
		}

		$(whiteSide[0]).css("background-color", "" + red9 +"");
		$(whiteSide[3]).css("background-color", "" + red6 +"");
		$(whiteSide[6]).css("background-color", "" + red3 +"");

		$(redSide[2]).css("background-color", "" + yellow7 +"");
		$(redSide[5]).css("background-color", "" + yellow4 +"");
		$(redSide[8]).css("background-color", "" + yellow1 +"");

		return ("L'");

	};

	// Turns Left face 180 degrees
	function L2(){
		L();
		L();
		return ("L2");
	};

	// Turns front face clockwise
	function F(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var whiteSide = $('.white .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var orangeSide = $('.orange .pieces').children();

		var orange1 = $(orangeSide[0]).css('background-color');
		var orange2 = $(orangeSide[1]).css('background-color');
		var orange3 = $(orangeSide[2]).css('background-color');
		var orange4 = $(orangeSide[3]).css('background-color');

		var orange6 = $(orangeSide[5]).css('background-color');
		var orange7 = $(orangeSide[6]).css('background-color');
		var orange8 = $(orangeSide[7]).css('background-color');
		var orange9 = $(orangeSide[8]).css('background-color');

		$(orangeSide[0]).css("background-color", "" + orange7 +"");
		$(orangeSide[1]).css("background-color", "" + orange4 +"");
		$(orangeSide[2]).css("background-color", "" + orange1 +"");
		$(orangeSide[3]).css("background-color", "" + orange8 +"");

		$(orangeSide[5]).css("background-color", "" + orange2 +"");
		$(orangeSide[6]).css("background-color", "" + orange9 +"");
		$(orangeSide[7]).css("background-color", "" + orange6 +"");
		$(orangeSide[8]).css("background-color", "" + orange3 +"");

		var yellow7 = $(yellowSide[6]).css('background-color');
		var yellow8 = $(yellowSide[7]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		var white1 = $(whiteSide[0]).css('background-color'); 
		var white2 = $(whiteSide[1]).css('background-color');
		var white3 = $(whiteSide[2]).css('background-color');

		var green3 = $(greenSide[2]).css('background-color'); 
		var green6 = $(greenSide[5]).css('background-color');
		var green9 = $(greenSide[8]).css('background-color');

		var blue1 = $(blueSide[0]).css('background-color'); 
		var blue4 = $(blueSide[3]).css('background-color');
		var blue7 = $(blueSide[6]).css('background-color');

		$(yellowSide[6]).css("background-color", "" + green9 +"");
		$(yellowSide[7]).css("background-color", "" + green6 +"");
		$(yellowSide[8]).css("background-color", "" + green3 +"");

		$(whiteSide[0]).css("background-color", "" + blue7 +"");
		$(whiteSide[1]).css("background-color", "" + blue4 +"");
		$(whiteSide[2]).css("background-color", "" + blue1 +"");

		$(greenSide[2]).css("background-color", "" + white1 +"");
		$(greenSide[5]).css("background-color", "" + white2 +"");
		$(greenSide[8]).css("background-color", "" + white3 +"");

		$(blueSide[0]).css("background-color", "" + yellow7 +"");
		$(blueSide[3]).css("background-color", "" + yellow8 +"");
		$(blueSide[6]).css("background-color", "" + yellow9 +"");

		return ("F");

	};

	// Turns front face counter-clockwise
	function FPrime(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var whiteSide = $('.white .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var orangeSide = $('.orange .pieces').children();

		var orange1 = $(orangeSide[0]).css('background-color');
		var orange2 = $(orangeSide[1]).css('background-color');
		var orange3 = $(orangeSide[2]).css('background-color');
		var orange4 = $(orangeSide[3]).css('background-color');

		var orange6 = $(orangeSide[5]).css('background-color');
		var orange7 = $(orangeSide[6]).css('background-color');
		var orange8 = $(orangeSide[7]).css('background-color');
		var orange9 = $(orangeSide[8]).css('background-color');

		$(orangeSide[0]).css("background-color", "" + orange3 +"");
		$(orangeSide[1]).css("background-color", "" + orange6 +"");
		$(orangeSide[2]).css("background-color", "" + orange9 +"");
		$(orangeSide[3]).css("background-color", "" + orange2 +"");

		$(orangeSide[5]).css("background-color", "" + orange8 +"");
		$(orangeSide[6]).css("background-color", "" + orange1 +"");
		$(orangeSide[7]).css("background-color", "" + orange4 +"");
		$(orangeSide[8]).css("background-color", "" + orange7 +"");

		var yellow7 = $(yellowSide[6]).css('background-color');
		var yellow8 = $(yellowSide[7]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		var white1 = $(whiteSide[0]).css('background-color'); 
		var white2 = $(whiteSide[1]).css('background-color');
		var white3 = $(whiteSide[2]).css('background-color');

		var green3 = $(greenSide[2]).css('background-color'); 
		var green6 = $(greenSide[5]).css('background-color');
		var green9 = $(greenSide[8]).css('background-color');

		var blue1 = $(blueSide[0]).css('background-color'); 
		var blue4 = $(blueSide[3]).css('background-color');
		var blue7 = $(blueSide[6]).css('background-color');

		$(yellowSide[6]).css("background-color", "" + blue1 +"");
		$(yellowSide[7]).css("background-color", "" + blue4 +"");
		$(yellowSide[8]).css("background-color", "" + blue7 +"");

		$(whiteSide[0]).css("background-color", "" + green3 +"");
		$(whiteSide[1]).css("background-color", "" + green6 +"");
		$(whiteSide[2]).css("background-color", "" + green9 +"");

		$(greenSide[2]).css("background-color", "" + yellow9 +"");
		$(greenSide[5]).css("background-color", "" + yellow8 +"");
		$(greenSide[8]).css("background-color", "" + yellow7 +"");

		$(blueSide[0]).css("background-color", "" + white3 +"");
		$(blueSide[3]).css("background-color", "" + white2 +"");
		$(blueSide[6]).css("background-color", "" + white1 +"");

		return ("F'");

	};

	// Turns Front face 180 degrees
	function F2(){
		F();
		F();

		return ("F2");

	}

	//Turns back face clockwise
	function B(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var whiteSide = $('.white .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();

		var red1 = $(redSide[0]).css('background-color');
		var red2 = $(redSide[1]).css('background-color');
		var red3 = $(redSide[2]).css('background-color');
		var red4 = $(redSide[3]).css('background-color');

		var red6 = $(redSide[5]).css('background-color');
		var red7 = $(redSide[6]).css('background-color');
		var red8 = $(redSide[7]).css('background-color');
		var red9 = $(redSide[8]).css('background-color');

		$(redSide[0]).css("background-color", "" + red7 +"");
		$(redSide[1]).css("background-color", "" + red4 +"");
		$(redSide[2]).css("background-color", "" + red1 +"");
		$(redSide[3]).css("background-color", "" + red8 +"");

		$(redSide[5]).css("background-color", "" + red2 +"");
		$(redSide[6]).css("background-color", "" + red9 +"");
		$(redSide[7]).css("background-color", "" + red6 +"");
		$(redSide[8]).css("background-color", "" + red3 +"");

		var yellow1 = $(yellowSide[0]).css('background-color');
		var yellow2 = $(yellowSide[1]).css('background-color');
		var yellow3 = $(yellowSide[2]).css('background-color');

		var white7 = $(whiteSide[6]).css('background-color'); 
		var white8 = $(whiteSide[7]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');

		var green1 = $(greenSide[0]).css('background-color'); 
		var green4 = $(greenSide[3]).css('background-color');
		var green7 = $(greenSide[6]).css('background-color');

		var blue3 = $(blueSide[2]).css('background-color'); 
		var blue6 = $(blueSide[5]).css('background-color');
		var blue9 = $(blueSide[8]).css('background-color');

		$(yellowSide[0]).css("background-color", "" + blue3 +"");
		$(yellowSide[1]).css("background-color", "" + blue6 +"");
		$(yellowSide[2]).css("background-color", "" + blue9 +"");

		$(whiteSide[6]).css("background-color", "" + green1 +"");
		$(whiteSide[7]).css("background-color", "" + green4 +"");
		$(whiteSide[8]).css("background-color", "" + green7 +"");

		$(greenSide[0]).css("background-color", "" + yellow3 +"");
		$(greenSide[3]).css("background-color", "" + yellow2 +"");
		$(greenSide[6]).css("background-color", "" + yellow1 +"");

		$(blueSide[2]).css("background-color", "" + white9 +"");
		$(blueSide[5]).css("background-color", "" + white8 +"");
		$(blueSide[8]).css("background-color", "" + white7 +"");

		return ("B");
	};

	//Turns back face counter-clockwise
	function BPrime(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var whiteSide = $('.white .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();

		var red1 = $(redSide[0]).css('background-color');
		var red2 = $(redSide[1]).css('background-color');
		var red3 = $(redSide[2]).css('background-color');
		var red4 = $(redSide[3]).css('background-color');

		var red6 = $(redSide[5]).css('background-color');
		var red7 = $(redSide[6]).css('background-color');
		var red8 = $(redSide[7]).css('background-color');
		var red9 = $(redSide[8]).css('background-color');

		$(redSide[0]).css("background-color", "" + red3 +"");
		$(redSide[1]).css("background-color", "" + red6 +"");
		$(redSide[2]).css("background-color", "" + red9 +"");
		$(redSide[3]).css("background-color", "" + red2 +"");

		$(redSide[5]).css("background-color", "" + red8 +"");
		$(redSide[6]).css("background-color", "" + red1 +"");
		$(redSide[7]).css("background-color", "" + red4 +"");
		$(redSide[8]).css("background-color", "" + red7 +"");

		var yellow1 = $(yellowSide[0]).css('background-color');
		var yellow2 = $(yellowSide[1]).css('background-color');
		var yellow3 = $(yellowSide[2]).css('background-color');

		var white7 = $(whiteSide[6]).css('background-color'); 
		var white8 = $(whiteSide[7]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');

		var green1 = $(greenSide[0]).css('background-color'); 
		var green4 = $(greenSide[3]).css('background-color');
		var green7 = $(greenSide[6]).css('background-color');

		var blue3 = $(blueSide[2]).css('background-color'); 
		var blue6 = $(blueSide[5]).css('background-color');
		var blue9 = $(blueSide[8]).css('background-color');

		$(yellowSide[0]).css("background-color", "" + green7 +"");
		$(yellowSide[1]).css("background-color", "" + green4 +"");
		$(yellowSide[2]).css("background-color", "" + green1 +"");

		$(whiteSide[6]).css("background-color", "" + blue9 +"");
		$(whiteSide[7]).css("background-color", "" + blue6 +"");
		$(whiteSide[8]).css("background-color", "" + blue3 +"");

		$(greenSide[0]).css("background-color", "" + white7 +"");
		$(greenSide[3]).css("background-color", "" + white8 +"");
		$(greenSide[6]).css("background-color", "" + white9 +"");

		$(blueSide[2]).css("background-color", "" + yellow1 +"");
		$(blueSide[5]).css("background-color", "" + yellow2 +"");
		$(blueSide[8]).css("background-color", "" + yellow3 +"");

		return ("B'");

	};

	//Turns back face 180 degrees
	function B2(){
		B();
		B();
		return ("B2");
	}

	// Turns Middle counter-clockwise
	function MPrime(){
		var orangeSide = $('.orange .pieces').children();
		var whiteSide = $('.white .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var redSide = $('.red .pieces').children();

		var red8 = $(redSide[7]).css('background-color');
		var white8 = $(whiteSide[7]).css('background-color');

		for (i = 0; i < 9; i++){
			currentWhite = $(whiteSide[i]).css('background-color');
			currentYellow = $(yellowSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			if (i == 1){

				$(yellowSide[i]).css("background-color", "" + currentOrange +"");
				$(orangeSide[i]).css("background-color", "" + currentWhite +"");
				$(redSide[7]).css("background-color", "" + currentYellow +"");
				$(whiteSide[7]).css("background-color", "" + currentRed +"");

			}
			else if (i == 4){

				$(yellowSide[i]).css("background-color", "" + currentOrange +"");
				$(orangeSide[i]).css("background-color", "" + currentWhite +"");
				$(redSide[i]).css("background-color", "" + currentYellow +"");
				$(whiteSide[i]).css("background-color", "" + currentRed +"");

			}
			else if (i == 7){

				$(yellowSide[i]).css("background-color", "" + currentOrange +"");
				$(orangeSide[i]).css("background-color", "" + white8 +"");
				$(redSide[1]).css("background-color", "" + currentYellow +"");
				$(whiteSide[1]).css("background-color", "" + red8 +"");
			}
		}

		return "MPrime";
	};
 
	// Turns middle face 180 degrees 
	function M2(){
		MPrime();
		MPrime();

		return "M2";
	};

	// Turns Middle clockwise
	function M(){
		MPrime();
		MPrime();
		MPrime();

		return "M";
	};

	function LW(){
		L();
		M();

		return "LW";
	};

	function LWPrime(){
		LPrime();
		MPrime();

		return "LW'";
	};


	function DW(){
		D();

		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();


		for (i = 3; i < 6; i++){
			currentBlue = $(blueSide[i]).css('background-color');
			currentGreen = $(greenSide[i]).css('background-color');
			currentRed = $(redSide[i]).css('background-color');
			currentOrange = $(orangeSide[i]).css('background-color');

			$(blueSide[i]).css("background-color", "" + currentOrange +"");
			$(greenSide[i]).css("background-color", "" + currentRed +"");
			$(redSide[i]).css("background-color", "" + currentBlue +"");
			$(orangeSide[i]).css("background-color", "" + currentGreen +"");
		}
		return ("D");

	};

	function DWPrime(){
		DW();
		DW();
		DW();

	};
	

// GENERAL FUNCTIONS

	function reset(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var whiteSide = $('.white .pieces').children();

		for (i = 0; i < 9; i++){
			$(yellowSide[i]).css("background-color", "rgb(255, 255, 0)");
			$(whiteSide[i]).css("background-color", "rgb(255, 255, 255)");
			$(blueSide[i]).css("background-color", "rgb(0, 0, 255)");
			$(greenSide[i]).css("background-color", "rgb(0, 128, 0)");
			$(redSide[i]).css("background-color", "rgb(255, 0, 0)");
			$(orangeSide[i]).css("background-color", "rgb(255, 165, 0)");
		}

	};

	function scramble(){

		reset();

		var counter = 0;
		var lastRand = 0;
		var madeMove = false
		var moves = "";

		while (counter < 25){
			madeMove = false;

	 		var randNum = Math.floor((Math.random() * 6) + 1);

	 		if (randNum == 1 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = U();}
	 			else if (randNum2 == 2){move = UPrime();}
	 			else if (randNum2 == 3){move = U2();}
	 			madeMove = true;
	 		}
	 		else if (randNum == 2 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = D();}
	 			else if (randNum2 == 2){move = DPrime();}
	 			else if (randNum2 == 3){move = D2();}
	 			madeMove = true;
	 		}
	 		else if (randNum == 3 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = R();}
	 			else if (randNum2 == 2){move = RPrime();}
	 			else if (randNum2 == 3){move = R2();}
	 			madeMove = true;
	 		}
	 		else if (randNum == 4 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = L();}
	 			else if (randNum2 == 2){move = LPrime();}
	 			else if (randNum2 == 3){move = L2();}
	 			madeMove = true;
	 		}
	 		else if (randNum == 5 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = F();}
	 			else if (randNum2 == 2){move = FPrime();}
	 			else if (randNum2 == 3){move = F2();}
	 			madeMove = true;
	 		}
	 		else if (randNum == 6 && !(lastRand == randNum)){
	 			var randNum2 = Math.floor((Math.random() * 3) + 1);
	 			if (randNum2 == 1){move = B();}
	 			else if (randNum2 == 2){move = BPrime();}
	 			else if (randNum2 == 3){move = B2();}
	 			madeMove = true;
	 		}
	 		

	 		var lastRand = randNum;

	 		if (madeMove){counter++; moves = moves + " " + move;}

	 	}

	 	console.log(moves);

	 	$("#text").remove();
	 	$("#scramble-text").prepend("<p id='text'> Scramble:" + moves + "  </p>");

	};



var orange = "rgb(255, 165, 0)";
var red = "rgb(255, 0, 0)";
var green = "rgb(0, 128, 0)";  
var blue = "rgb(0, 0, 255)";
var yellow = "rgb(255, 255, 0)";
var white = "rgb(255, 255, 255)";

// SOLVE CROSS

	function findWhiteEdge(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var whiteSide = $('.white .pieces').children();


		
		for (i = 1; i < 9; i = i + 2){
			if ($(blueSide[i]).css('background-color') == white){
				return $(blueSide[i]);
			}

			if ($(greenSide[i]).css('background-color') == white){
				return $(greenSide[i]);
			}

			if ($(redSide[i]).css('background-color') == white){
				return $(redSide[i]);
			}

			if ($(orangeSide[i]).css('background-color') == white){
				return $(orangeSide[i]);
			}

			if ($(yellowSide[i]).css('background-color') == white){
				return $(yellowSide[i]);
			}
			
		}


		return -1;

	};

	function findUnsolvedCrossPieces(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();

		var unsolved = [];

		if (!($(blueSide[7]).css("background-color") == blue)){
			unsolved.push(blue);
		}
		if (!($(greenSide[7]).css("background-color") == green)){
			unsolved.push(green);
		}
		if (!($(redSide[7]).css("background-color") == red)){
			unsolved.push(red);
		}
		
		return unsolved;

	};

	function solveCrossPiece(){

		parent = findWhiteEdge().parent().parent().attr('class');
		position = findWhiteEdge().index();

		if (parent == 'yellow'){
			if (position == 1){ U2(); F2(); }
			else if (position == 3){ UPrime(); F2(); }
			else if (position == 5){ U(); F2(); }
			else if (position == 7){ F2(); }
		}
		else if (parent == 'green'){
			if (position == 1){ L(); FPrime(); LPrime(); }
			else if (position == 3){ L2(); FPrime(); L2(); }
			else if (position == 5){ FPrime(); }
			else if (position == 7){ LPrime(); FPrime(); L(); }
		}
		else if (parent == 'orange'){
			if (position == 1){ F(); D(); RPrime(); DPrime(); FPrime();}
			else if (position == 3){ DPrime(); L(); D(); }
			else if (position == 5){ D(); RPrime(); DPrime(); }
			else if (position == 7){ FPrime(); D(); RPrime(); DPrime(); F(); }
		}
		else if (parent == 'blue'){
			if (position == 1){ RPrime(); F(); R(); }
			else if (position == 3){ F(); }
			else if (position == 5){ R2(); F(); R2(); }
			else if (position == 7){  R(); F(); RPrime(); }
		}
		else if (parent == 'red'){
			if (position == 1){ B(); DPrime(); LPrime(); D(); BPrime();}
			else if (position == 3){ DPrime(); R(); D(); }
			else if (position == 5){ DPrime(); LPrime(); D(); }
			else if (position == 7){ B(); D(); LPrime(); DPrime(); BPrime(); }
		}

		DPrime();

	};

	function orientCrossPiece(){

			var orangeSide = $('.orange .pieces').children();

			color = $(orangeSide[7]).css("background-color");

			if (color == orange && findUnsolvedCrossPieces().length > 0){
				color = findUnsolvedCrossPieces()[0]
			}

			if (color == green){ F2(); U(); L2(); UPrime(); F2();}
			else if (color == blue){ F2(); UPrime(); R2(); U(); F2();}
			else if (color == red){ F2(); U2(); B2(); U2(); F2(); }	

	};

	function solveCross(){

		while(findWhiteEdge() != -1){

			solveCrossPiece();
		}

		var counter = 0;

		while (findUnsolvedCrossPieces().length > 0){
			orientCrossPiece();
			counter ++;

			if (counter > 10){
				console.log("ERROR");
				break;
			}
		}
	
	};


//SOLVE FIRST LAYER
	
	function findWhiteCorner(){
		var blueSide = $(".blue .pieces").children();
		var greenSide = $('.green .pieces').children();
		var redSide = $('.red .pieces').children();
		var orangeSide = $('.orange .pieces').children();
		var yellowSide = $('.yellow .pieces').children();
		var whiteSide = $('.white .pieces').children();

		var counter = 0;

		while(true){
			console.log("FIND");

			var blueSide = $(".blue .pieces").children();
			var greenSide = $('.green .pieces').children();
			var redSide = $('.red .pieces').children();
			var orangeSide = $('.orange .pieces').children();

			for (i = 0; i < 3; i = i + 2){
				if ($(blueSide[i]).css('background-color') == white){
					return $(blueSide[i]);
				}
				if ($(greenSide[i]).css('background-color') == white){
					return $(greenSide[i]);
				}
				if ($(redSide[i]).css('background-color') == white){
					return $(redSide[i]);
				}
				if ($(orangeSide[i]).css('background-color') == white){
					return $(orangeSide[i]);
				}
				
			}

			U2();

			var whiteSide = $('.white .pieces').children();

			if($(whiteSide[0]).css('background-color') != white){
				LPrime(); UPrime(); L();
			}
			else if($(whiteSide[2]).css('background-color') != white){
				R(); U(); RPrime();
			}
			else if($(whiteSide[6]).css('background-color') != white){
				L(); UPrime(); LPrime();
			}
			else if($(whiteSide[8]).css('background-color') != white){
				RPrime(); U(); R();
			}

			counter++;

			if (counter > 50){
				break;
			}

		}

		return;

	};


	function bottomSolved(){

		var whiteSide = $('.white .pieces').children();

		for (i = 0; i < 9; i++){
			if($(whiteSide[i]).css('background-color') != white){
				return false
			}
		}

		return true;

	};

	function solveCornerPiece(){

		parent = findWhiteCorner().parent().parent().attr('class');

		position = findWhiteCorner().index();

		var keepGoing = true;

		var counter = 0;

		var newParent = "";

		while(keepGoing){

			var blueSide = $(".blue .pieces").children();
			var greenSide = $('.green .pieces').children();
			var redSide = $('.red .pieces').children();
			var orangeSide = $('.orange .pieces').children();

			if (position == 0){

				if (parent == 'red' && $(blueSide[2]).css('background-color') == blue){ B(); U(); BPrime(); keepGoing = false; }
				else if (parent == 'blue' && $(orangeSide[2]).css('background-color') == orange){ R(); U(); RPrime(); keepGoing = false; }
				else if(parent == 'orange' && $(greenSide[2]).css('background-color') == green){ F(); U(); FPrime(); keepGoing = false; }
				else if (parent == 'green' && $(redSide[2]).css('background-color') == red){ L(); U(); LPrime(); keepGoing = false; }
				else { 
					U(); 
					if (parent == 'red'){newParent = 'blue';}
					else if (parent == 'blue'){newParent = 'orange';}
					else if (parent == 'orange'){newParent = 'green';}
					else if (parent == 'green'){newParent = 'red';}

					parent = newParent;
				}

			}
			else if (position == 2){

				if (parent == 'red' && $(greenSide[0]).css('background-color') == green){ BPrime(); UPrime(); B(); keepGoing = false; }
				else if (parent == 'blue' && $(redSide[0]).css('background-color') == red){ RPrime(); UPrime(); R(); keepGoing = false; }
				else if(parent == 'orange' && $(blueSide[0]).css('background-color') == blue){ FPrime(); UPrime(); F(); keepGoing = false; }
				else if (parent == 'green' && $(orangeSide[0]).css('background-color') == orange){ LPrime(); UPrime(); L(); keepGoing = false; }
				else {
					U(); 
					if (parent == 'red'){newParent = 'blue';}
					else if (parent == 'blue'){newParent = 'orange';}
					else if (parent == 'orange'){newParent = 'green';}
					else if (parent == 'green'){newParent = 'red';}

					parent = newParent; 

					counter ++;

					if (counter = 3){
						 keepGoing = false;
					}
				}

			}

		}

	};

	function solveFirstLayer(){

		var counter = 0;

		while (!bottomSolved()){
			solveCornerPiece();

			counter ++;

			if (counter > 20){
				break;
			}

		}

		// solveCornerPiece();

	};


function solve(){

	solveCross();
	solveFirstLayer();

};

// When page opens this starts
$(document).ready(function() {


});
























