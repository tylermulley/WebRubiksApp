// OLD METHOD
		// CORNER SOLVING

			//Swaps A location with P location on the cube
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

			// function processCornerPiece(color1, color2, color3){
			// 	var colors = [["rgb(255, 165, 0)", "Orange"],["rgb(255, 0, 0)", "Red"], ["rgb(0, 128, 0)", "Green"], ["rgb(0, 0, 255)", "Blue"], ["rgb(255, 255, 0)", "Yellow"], ["rgb(255, 255, 255)", "White"]];
			// 	var colorOne = "";
			// 	var colorTwo = "";
			// 	var colorThree = "";

				

			// 	for (i = 0; i < colors.length; i++){
			// 		if (colors[i][0] == color1){
			// 			colorOne = colors[i][1];
			// 		}
			// 	}
			// 	for (i = 0; i < colors.length; i++){
			// 		if (colors[i][0] == color2){
			// 			colorTwo = colors[i][1];
			// 		}
			// 	}

			// 	for (i = 0; i < colors.length; i++){
			// 		if (colors[i][0] == color3){
			// 			colorThree = colors[i][1];
			// 		}
			// 	}

			// 	var unsolved = cornersSolved();

			// 	if (colorOne == "White"){
			// 		if (colorTwo == "Green"){return "U";}
			// 		else if (colorTwo == "Orange"){return "V";}
			// 		else if (colorTwo == "Blue"){return "W";}
			// 		else if (colorTwo == "Red"){return "X"};
					
			// 	}
			// 	else if (colorOne == "Yellow"){
			// 		if (colorTwo == "Green"){
			// 			if(unsolved.length > 0){
			// 				return(unsolved[0]);
			// 			}
			// 		}
			// 		else if (colorTwo == "Red"){return "B";}
			// 		else if (colorTwo == "Blue"){return "C";}
			// 		else if (colorTwo == "Orange"){return "D";}
			// 	}
			// 	else if (colorOne == "Orange"){
			// 		if (colorTwo == "Green"){return "I";}
			// 		else if (colorTwo == "Yellow"){return "J";}
			// 		else if (colorTwo == "Blue"){return "K";}
			// 		else if (colorTwo == "White"){return "L";}
			// 	}
			// 	else if (colorOne == "Red"){
			// 		if (colorTwo == "Blue"){return "Q";}
			// 		else if (colorTwo == "Yellow"){
			// 			if(unsolved.length > 0){
			// 				return(unsolved[0]);
			// 			}
			// 		}
			// 		else if (colorTwo == "Green"){return "S";}
			// 		else if (colorTwo == "White"){return "T";}
			// 	}
			// 	else if (colorOne == "Green"){
			// 		if (colorTwo == "Red"){
			// 			if(unsolved.length > 0){
			// 				return(unsolved[0]);
			// 			}
			// 		}
			// 		else if (colorTwo == "Yellow"){return "F";}
			// 		else if (colorTwo == "Orange"){return "G";}
			// 		else if (colorTwo == "White"){return "H";}
			// 	}
			// 	else if (colorOne == "Blue"){
			// 		if (colorTwo == "Orange"){return "M";}
			// 		else if (colorTwo == "Yellow"){return "N";}
			// 		else if (colorTwo == "Red"){return "O";}
			// 		else if (colorTwo == "White"){return "P";}
			// 	}

			// };

			function cornersSolved(){
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
				if (white1 != white){unsolved.push('U');}	
				else if(green9 != green){unsolved.push('U');}

				// bottom back right
				if (white3 != white){unsolved.push('V');}
				else if(blue7 != blue){unsolved.push('V');}

				// bottom front right
				if (white9 != white){unsolved.push('W');}
				else if(blue9 != blue){unsolved.push('W');}

				// bottom front left
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

				var solved = false;


				if (cornersSolved().length == 0){
					solved = true;
				}
				
				while (!solved){

					if (cornersSolved().length == 0){solved = true;}

					var A = $(yellowSide[0]).css('background-color');
					var E = $(greenSide[0]).css('background-color');
					var R = $(redSide[2]).css('background-color');

					cornerSolve(processCornerPiece(A, E, R));
				}

				console.log("SHOULD BE SOLVED")

				// var A = $(yellowSide[0]).css('background-color');
				// var E = $(greenSide[0]).css('background-color');
				// var R = $(redSide[2]).css('background-color');

				// cornerSolve(processCornerPiece(A, E, R));

			};

			// Solves or repositions one corner piece given the position of the color
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
						RPrime(); F();
						cornerAlgorithm();
						FPrime(); R();
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

		// EDGE SOLVING

			function JPerm(){
				R(); U2(); RPrime(); UPrime(); R(); U2(); 
				LPrime(); U(); RPrime(); UPrime(); L(); 
			};

			function TPerm(){
				R(); U(); RPrime(); UPrime(); RPrime(); F(); R2(); UPrime(); 
				RPrime(); UPrime(); R(); U(); RPrime(); FPrime(); 
			};

			function LPerm(){
				RPrime(); U2(); R(); U(); RPrime(); U2Prime(); 
				L(); UPrime(); R(); U(); LPrime(); 
			};


			function solveEdges(){
				var blueSide = $(".blue .pieces").children();
				var greenSide = $('.green .pieces').children();
				var redSide = $('.red .pieces').children();
				var orangeSide = $('.orange .pieces').children();
				var yellowSide = $('.yellow .pieces').children();
				var whiteSide = $('.white .pieces').children();

				// var solved = false;


				// if (cornersSolved().length == 0){
				// 	solved = true;
				// }
				
				// while (!solved){

				// 	if (cornersSolved().length == 0){solved = true;}

				// 	var A = $(yellowSide[0]).css('background-color');
				// 	var E = $(greenSide[0]).css('background-color');
				// 	var R = $(redSide[2]).css('background-color');

				// 	cornerSolve(processCornerPiece(A, E, R));
				// }

				// console.log("SHOULD BE SOLVED")

				var K = $(orangeSide[7]).css('background-color');
				var U = $(whiteSide[1]).css('background-color');


				console.log(processEdgePiece(U, K));
				edgeSolve(processEdgePiece(U, K));

			};

			function edgesSolved(){
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

				//Edges
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

				// top back middle
				if (yellow2 != yellow){unsolved.push('A');}
				else if(red2 != red){unsolved.push('A');}

				// top right
				if (yellow6 != yellow){unsolved.push('B');}
				else if(blue2 != blue){unsolved.push('B');}

				// top front middle
				if (yellow8 != yellow){unsolved.push('C');}
				else if(orange2 != orange){unsolved.push('C');}

				// top left
				if (yellow4 != yellow){unsolved.push('D');}
				else if(green2 != green){unsolved.push('D');}

				
				// bottom right
				if (white6 != white){unsolved.push('V');}
				else if(blue8 != blue){unsolved.push('V');}

				console.log(white8 + ' ' + white + ' ' + red8 + ' ' + red);
				// bottom front middle
				if (white8 != white){unsolved.push('W');}
				else if(red8 != red){unsolved.push('W');}

				// bottom front left
				if (white4 != white){unsolved.push('X');}
				else if(green8 != green){unsolved.push('X');}

				// middle front left
				if (orange4 != orange){unsolved.push('L');}
				else if(green6 != green){unsolved.push('L');}

				// middle front right
				if (orange6 != orange){unsolved.push('J');}
				else if(blue4 != blue){unsolved.push('J');}

				// middle back left
				if (red6 != red){unsolved.push('R');}
				else if(green4 != green){unsolved.push('R');}

				// middle back right
				if (red4 != red){unsolved.push('T');}
				else if(blue6 != blue){unsolved.push('T');}

				return unsolved;

			};

			function processEdgePiece(color1, color2){
				var colors = [["rgb(255, 165, 0)", "Orange"],["rgb(255, 0, 0)", "Red"], ["rgb(0, 128, 0)", "Green"], ["rgb(0, 0, 255)", "Blue"], ["rgb(255, 255, 0)", "Yellow"], ["rgb(255, 255, 255)", "White"]];
				var colorOne = "";
				var colorTwo = "";


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

				console.log(colorOne + " " + colorTwo);

				var unsolved = edgesSolved();
				console.log(unsolved);

				if (colorOne == "White"){
					if (colorTwo == "Green"){return "X";}
					else if (colorTwo == "Orange"){
						if(unsolved.length > 0){
							return(unsolved[0]);
						}
					}
					else if (colorTwo == "Blue"){return "V";}
					else if (colorTwo == "Red"){return "W"};
					
				}
				else if (colorOne == "Yellow"){
					if (colorTwo == "Green"){
						return "D";
					}
					else if (colorTwo == "Red"){return "A";}
					else if (colorTwo == "Blue"){return "B";}
					else if (colorTwo == "Orange"){return "C";}
				}
				else if (colorOne == "Orange"){
					if (colorTwo == "Green"){return "L";}
					else if (colorTwo == "Yellow"){return "I";}
					else if (colorTwo == "Blue"){return "J";}
					else if (colorTwo == "White"){
						if(unsolved.length > 0){
							return(unsolved[0]);
						}
					}
				}
				else if (colorOne == "Red"){
					if (colorTwo == "Blue"){return "T";}
					else if (colorTwo == "Yellow"){
						return "Q";
					}
					else if (colorTwo == "Green"){return "R";}
					else if (colorTwo == "White"){return "S";}
				}
				else if (colorOne == "Green"){
					if (colorTwo == "Red"){
						return "H";
					}
					else if (colorTwo == "Yellow"){return "E";}
					else if (colorTwo == "Orange"){return "F";}
					else if (colorTwo == "White"){return "G";}
				}
				else if (colorOne == "Blue"){
					if (colorTwo == "Orange"){return "P";}
					else if (colorTwo == "Yellow"){return "M";}
					else if (colorTwo == "Red"){return "N";}
					else if (colorTwo == "White"){return "O";}
				}

			};

			function edgeSolve(position){
				switch(position){
					case 'A':
						M2();
						break;
					case 'B':
						RPrime(); U(); R(); UPrime();
						M2();
						U(); RPrime(); UPrime(); R();
						break;
					case 'C':
						U2(); MPrime(); 
						U2(); MPrime(); 
						break;
					case 'D':
						L(); UPrime(); LPrime(); U(); 
						M2(); 
						UPrime(); L(); U(); LPrime(); 
						break;
					case 'E':
						B(); LPrime(); BPrime(); 
						M2(); 
						B(); L(); BPrime(); 
						break;
					case 'F':
						B(); L2(); BPrime(); 
						M2(); 
						B(); L2(); BPrime(); 
						break;
					case 'G':
						B(); L(); BPrime(); 
						M2(); 
						B(); LPrime(); BPrime(); 
						break;
					case 'H':
						LPrime(); B(); L(); BPrime(); 
						M2(); 
						B(); LPrime(); BPrime(); L(); 
						break;
					case 'I':
						D(); MPrime(); U(); R2(); 
						UPrime(); M(); U(); R2();
						UPrime(); DPrime(); M2(); 
						break;
					case 'J':
						U(); R(); UPrime(); 
						M2(); 
						U(); RPrime(); UPrime(); 
						break;
					case 'K':
						M2();
						break;
					case 'L':
						UPrime(); LPrime(); U(); 
						M2(); 
						UPrime(); L(); U(); 
						break;
					case 'M':
						BPrime(); R(); B(); 
						M2(); 
						BPrime(); RPrime(); B(); 
						break;
					case 'N':
						R(); BPrime(); RPrime(); B(); 
						M2(); 
						BPrime(); R(); B(); RPrime(); 
						break;
					case 'O':
						BPrime(); RPrime(); B(); 
						M2(); 
						BPrime(); R(); B(); 
						break;
					case 'P':
						BPrime(); R2(); B();
						M2(); 
						BPrime(); R2(); B(); 
						break;
					case 'Q':
						BPrime(); R(); B(); U(); R2(); UPrime(); 
						M2(); 
						U(); R2(); UPrime(); BPrime(); RPrime(); B(); 
						break;
					case 'R':
						UPrime(); L(); U(); 
						M2(); 
						UPrime(); LPrime(); U(); 
						break;
					case 'S':
						M2(); 
						D(); U(); R2(); UPrime(); 
						MPrime(); 
						U(); R2(); UPrime(); 
						M(); 
						DPrime(); 
						break;
					case 'T':
						U(); RPrime(); UPrime(); 
						M2(); 
						U(); R(); UPrime(); 
						break;
					case 'U':
						M2();
						break;
					case 'V':
						U(); R2(); UPrime(); 
						M2(); 
						U(); R2(); UPrime(); 
						break;
					case 'W':
						M(); U2(); 
						M(); U2(); 
						break;
					case 'X':
						UPrime(); L2(); U(); 
						M2(); 
						UPrime(); L2(); U(); 
						break;

				} 
			};