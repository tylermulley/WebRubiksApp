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

//Swaps A with P on the cube
function cornerAlgorithm(){
	R(); 
	UPrime(); 
	RPrime();
	UPrime();
	R();
	U();
	RPrime();
	FPrime();
	R();
	U();
	RPrime();
	UPrime();
	RPrime();
	F();
	R();

};

function processCornerPiece(color1, color2, color3){
	var colors = [["rgb(255, 165, 0)", "Orange"],["rgb(255, 0, 0)", "Red"], ["rgb(0, 128, 0)", "Green"], ["rgb(0, 0, 255)", "Blue"], ["rgb(255, 255, 0)", "Yellow"], ["rgb(255, 255, 255)", "White"]];
	var colorOne = "";
	var colorTwo = "";
	var colorThree = "";

	

	for (i = 0; i < colors.length; i++){
		if (colors[i][0] == color1){
			colorOne = colors[i][1];
		}
	}
	for (i = 0; i < colors.length; i++){
		if (colors[i][0] == color2){
			colorTwo = colors[i][1];
		}
	}

	for (i = 0; i < colors.length; i++){
		if (colors[i][0] == color3){
			colorThree = colors[i][1];
		}
	}

	console.log(colorOne + " " + colorTwo + " " + colorThree);

	var unsolved = cornersSolved();

	if (colorOne == "White"){
		if (colorTwo == "Green"){return "U";}
		else if (colorTwo == "Orange"){return "V";}
		else if (colorTwo == "Blue"){return "W";}
		else if (colorTwo == "Red"){return "X"};
		
	}
	else if (colorOne == "Yellow"){
		if (colorTwo == "Green"){
			console.log(unsolved);
			if(unsolved.length > 0){
				return(unsolved[0]);
			}
		}
		else if (colorTwo == "Red"){return "B";}
		else if (colorTwo == "Blue"){return "C";}
		else if (colorTwo == "Orange"){return "D";}
	}
	else if (colorOne == "Orange"){
		if (colorTwo == "Green"){return "I";}
		else if (colorTwo == "Yellow"){return "J";}
		else if (colorTwo == "Blue"){return "K";}
		else if (colorTwo == "White"){return "L";}
	}
	else if (colorOne == "Red"){
		if (colorTwo == "Blue"){return "Q";}
		else if (colorTwo == "Yellow"){
			console.log(unsolved);
			if(unsolved.length > 0){
				return(unsolved[0]);
			}
		}
		else if (colorTwo == "Green"){return "S";}
		else if (colorTwo == "White"){return "T";}
	}
	else if (colorOne == "Green"){
		if (colorTwo == "Red"){
			console.log(unsolved);
			if(unsolved.length > 0){
				return(unsolved[0]);
			}
		}
		else if (colorTwo == "Yellow"){return "F";}
		else if (colorTwo == "Orange"){return "G";}
		else if (colorTwo == "White"){return "H";}
	}
	else if (colorOne == "Blue"){
		if (colorTwo == "Orange"){return "M";}
		else if (colorTwo == "Yellow"){return "N";}
		else if (colorTwo == "Red"){return "O";}
		else if (colorTwo == "White"){return "P";}
	}

};

function cornersSolved(piece){
	var unsolved = [];
	var orange = "rgb(255, 165, 0)";
	var red = "rgb(255, 0, 0)";
	var green = "rgb(0, 128, 0)";  
	var blue = "rgb(0, 0, 255)";
	var yellow = "rgb(255, 255, 0)";
	var white = "rgb(255, 255, 255)";

	var blueSide = $(".blue .pieces").children();
	var greenSide = $('.green .pieces').children();
	var redSide = $('.red .pieces').children();
	var orangeSide = $('.orange .pieces').children();
	var yellowSide = $('.yellow .pieces').children();
	var whiteSide = $('.white .pieces').children();

	//corners
		var yellow1 = $(yellowSide[0]).css('background-color');
		var yellow2 = $(yellowSide[1]).css('background-color');
		var yellow3 = $(yellowSide[2]).css('background-color');
		var yellow4 = $(yellowSide[3]).css('background-color');
		var yellow6 = $(yellowSide[5]).css('background-color');
		var yellow7 = $(yellowSide[6]).css('background-color');
		var yellow8 = $(yellowSide[7]).css('background-color');
		var yellow9 = $(yellowSide[8]).css('background-color');

		var white1 = $(whiteSide[0]).css('background-color');
		var white2 = $(whiteSide[1]).css('background-color');
		var white3 = $(whiteSide[2]).css('background-color');
		var white4 = $(whiteSide[3]).css('background-color');
		var white6 = $(whiteSide[5]).css('background-color');
		var white7 = $(whiteSide[6]).css('background-color');
		var white8 = $(whiteSide[7]).css('background-color');
		var white9 = $(whiteSide[8]).css('background-color');


		var red1 = $(redSide[0]).css('background-color');
		var red2 = $(redSide[1]).css('background-color');
		var red3 = $(redSide[2]).css('background-color');
		var red4 = $(redSide[3]).css('background-color');
		var red6 = $(redSide[5]).css('background-color');
		var red7 = $(redSide[6]).css('background-color');
		var red8 = $(redSide[7]).css('background-color');
		var red9 = $(redSide[8]).css('background-color');


		var orange1 = $(orangeSide[0]).css('background-color');
		var orange2 = $(orangeSide[1]).css('background-color');
		var orange3 = $(orangeSide[2]).css('background-color');
		var orange4 = $(orangeSide[3]).css('background-color');
		var orange6 = $(orangeSide[5]).css('background-color');
		var orange7 = $(orangeSide[6]).css('background-color');
		var orange8 = $(orangeSide[7]).css('background-color');
		var orange9 = $(orangeSide[8]).css('background-color');


		var blue1 = $(blueSide[0]).css('background-color');
		var blue2 = $(blueSide[1]).css('background-color');
		var blue3 = $(blueSide[2]).css('background-color');
		var blue4 = $(blueSide[3]).css('background-color');
		var blue6 = $(blueSide[5]).css('background-color');
		var blue7 = $(blueSide[6]).css('background-color');
		var blue8 = $(blueSide[7]).css('background-color');
		var blue9 = $(blueSide[8]).css('background-color');


		var green1 = $(greenSide[0]).css('background-color');
		var green2 = $(greenSide[1]).css('background-color');
		var green3 = $(greenSide[2]).css('background-color');
		var green4 = $(greenSide[3]).css('background-color');
		var green6 = $(greenSide[5]).css('background-color');
		var green7 = $(greenSide[6]).css('background-color');
		var green8 = $(greenSide[7]).css('background-color');
		var green9 = $(greenSide[8]).css('background-color');

	console.log("before: " + unsolved);
	// top back right
	if (yellow3 != yellow){unsolved.push('B');}
	else if(blue3 != blue){unsolved.push('B');}

	// top front right
	if (yellow9 != yellow){unsolved.push('C');}
	else if(blue1 != blue){unsolved.push('C');}

	// top front left
	if (yellow7 != yellow){unsolved.push('D');}
	else if(green3 != green){unsolved.push('D');}

	// bottom back left
	console.log(white1 + " " + white + " " + green9 + " " + green);
	if (white1 != white){unsolved.push('U');}
	else if(green9 != green){unsolved.push('U');}

	// bottom back right
	console.log(white3 + " " + white + " " + blue7 + " " + green);
	if (white3 != white){unsolved.push('V');}
	else if(blue7 != blue){unsolved.push('V');}

	// bottom front right
	console.log(white9 + " " + white + " " + blue9 + " " + green);
	if (white9 != white){unsolved.push('W');}
	else if(blue9 != blue){unsolved.push('W');}

	// bottom front left
	console.log(white7 + " " + white + " " + green7 + " " + green);
	if (white7 != white){unsolved.push('X');}
	else if(green7 != green){unsolved.push('X');}

	return unsolved;


};
function solveCorners(){
	var blueSide = $(".blue .pieces").children();
	var greenSide = $('.green .pieces').children();
	var redSide = $('.red .pieces').children();
	var orangeSide = $('.orange .pieces').children();
	var yellowSide = $('.yellow .pieces').children();
	var whiteSide = $('.white .pieces').children();

	// Piece at top back left
	var A = $(yellowSide[0]).css('background-color');
	var E = $(greenSide[0]).css('background-color');
	var R = $(redSide[2]).css('background-color');

	cornerSolve(processCornerPiece(A, E, R));
};

//Solves or repositions one corner piece given the position of the color
function cornerSolve(position){
	switch(position){
		case 'A':
			cornerAlgorithm();
		case 'B':
			R(); DPrime();
			cornerAlgorithm();
			D(); RPrime()
			;
			break;
		case 'C':
			F();
			cornerAlgorithm();
			FPrime();
			break;
		case 'D':
			F(); RPrime();
			cornerAlgorithm();
			R(); FPrime();
			break;
		case 'E':
			cornerAlgorithm();
		case 'F':
			F2();
			cornerAlgorithm();
			F2();
			break;
		case 'G':
			D2(); R();
			cornerAlgorithm();
			RPrime(); D2();
			break;
		case 'H':
			D2();
			cornerAlgorithm();
			D2();
			break;
		case 'I':
			FPrime(); D();
			cornerAlgorithm();
			DPrime(); F();
			break;
		case 'J':
			F2(); D();
			cornerAlgorithm();
			DPrime(); F2();
			break;
		case 'K':
			F(); D();
			cornerAlgorithm();
			DPrime(); FPrime();
			break;
		case 'L':
			D();
			cornerAlgorithm();
			DPrime();
			break;
		case 'M':
			RPrime();
			cornerAlgorithm();
			R();
			break;
		case 'N':
			R2();
			cornerAlgorithm();
			R2();
			break;
		case 'O':
			R();
			cornerAlgorithm();
			RPrime();
			break;
		case 'P':
			cornerAlgorithm();
			break;
		case 'Q':
			RPrime();
			cornerAlgorithm();
			R();
			break;
		case 'R':
			cornerAlgorithm();
		case 'S':
			DPrime(); R();
			cornerAlgorithm();
			RPrime(); D();
			break;
		case 'T':
			DPrime(); 
			cornerAlgorithm();
			D();
			break;
		case 'U':
			FPrime();
			cornerAlgorithm();
			F();
			break;
		case 'V':
			DPrime(); FPrime();
			cornerAlgorithm();
			F(); D();
			break;
		case 'W':
			D2(); FPrime();
			cornerAlgorithm();
			F(); D2();
			break;
		case 'X':
			D(); FPrime();
			cornerAlgorithm();
			F(); DPrime();
			break;

	} 
};

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
// When page opens this starts
$(document).ready(function() {

 	
});
























