// question in a javascript object 

var first = [
				{
					"question":"How many color are in the rainbow ?",
					"option1":"8",
					"option2":"7",
					"option3":"5",
					"option4":"4",
					"answer":2,
				},
         		{
					"question":"how many kilobyte makes 1 megabyte ?",
					"option1":"10",
					"option2":"512",
					"option3": "700",
					"option4": "1024",
					"answer":4,
				},
				{
					"question":"which from these is not a type of hacker ?",
					"option1":"BlackHat",
					"option2":"Developers",
					"option3": "GreyHat",
					"option4": "WhiteHat",
					"answer":2,
				},
				{
					"question":"Admin is short form that is used for ?",
					"option1":"Administrator",
					"option2":"Administrative",
					"option3": "Administration",
					"option4": "None of them",
					"answer":1,
				},
				{
					"question":"Which is the latest version of PHP ?",
					"option1":"9.0",
					"option2":"6.3",
					"option3": "7.0",
					"option4": "7.2",
					"answer":4,
				},
				{
					"question":"How many parts of movie fast and furious has made ?",
					"option1":"2",
					"option2":"8",
					"option3": "9",
					"option4": "6",
					"answer":2,
				},
				{
					"question":"Which device is used to check a human body temprature?",
					"option1":"stethoscope",
					"option2":"gyroscope",
					"option3": "thermometer",
					"option4": "None of them",
					"answer":3,
				},
				{
					"question":"Which of the following countries has signed a 'Non-Aggression Pact' with Sudan ?",
					"option1":"South Africa",
					"option2":"Kenya",
					"option3": "Uganda",
					"option4": "South Sudan",
					"answer":4,
				},
				{
					"question":"World Day for Water is observed on which of the following dates ?",
					"option1":"22 August",
					"option2":"22 March",
					"option3": "22 October",
					"option4": "22 July",
					"answer":2,
				},
				{
					"question":"Meryl Streep who was awarded one of the Oscar Awards 2012, is a famous. ",
					"option1":"Actress",
					"option2":"Film Director",
					"option3": "Songwriter",
					"option4": "Screen play writer",
					"answer":1,
				},
				{
					"question":"Which of the following does not produce hormone ?",
					"option1":"Heart",
					"option2":"Kidney",
					"option3": "Gastro-intestinal tract",
					"option4": "None of these",
					"answer":4,
				},
				{
					"question":"The speaker of the Lok Sabha appoints who among the following ?",
					"option1":"Leader of Opposition",
					"option2":"Prime minister",
					"option3": "Anglo-Indian community",
					"option4": "Deputy comissionar",
					"answer":1,
				},
				{
					"question":"The man who is specialist in wine making is called as ?",
					"option1":"Wenologist",
					"option2":"Grapologist",
					"option3": "Oenologist",
					"option4": "None of them",
					"answer":3,
				},
				{
					"question":"Who is the father of Tissue Culture ?",
					"option1":"Gautheret",
					"option2":"Haberlandt",
					"option3": "Bonner",
					"option4": "Laibach",
					"answer":2,
				},
				{
					"question":"Nobel Prize is established in ?",
					"option1":"1931",
					"option2":"1911",
					"option3":"1901",
					"option4":"1951",
					"answer":3,
				},
				

			]

var speech = window.speechSynthesis;
var qindex = 0;               // question index variable
var score = 0;                // score variable
var songIndex = 0;            // background music variable
var fiftyLife = 'on';         // By default 50-50 life line is available
var apLife = 'on';		      // By default Audience pole life line is available
//console.log(qindex);

 

var ques = document.getElementById('output');
var option1 = document.getElementById('op1');
var option2 = document.getElementById('op2');
var option3 = document.getElementById('op3');
var option4 = document.getElementById('op4');
var rd1 = document.getElementById('radio1');
var rd2 = document.getElementById('radio2');
var rd3 = document.getElementById('radio3');
var rd4 = document.getElementById('radio4');


// Print the questions one by one


function loadQuestion(index)
{
	ques.textContent = first[index].question;
	option1.textContent = first[index].option1;
	option2.textContent = first[index].option2;
	option3.textContent = first[index].option3;
	option4.textContent = first[index].option4;
	//quesPlay();
	setTimeout(audio(), 3000);	
}
loadQuestion(qindex);

// Speak every Question and answer

var voiceArr = [];
function audio()
{
	if(voiceArr!=null)
	{
		voiceArr = speech.getVoices();
		var voiceQues = new SpeechSynthesisUtterance(first[qindex].question);
		var voiceOp1 = new SpeechSynthesisUtterance('Your options are ! a ' + first[qindex].option1);
		var voiceOp2 = new SpeechSynthesisUtterance(', b ' + first[qindex].option2);
		var voiceOp3 = new SpeechSynthesisUtterance(', c ' + first[qindex].option3);
		var voiceOp4 = new SpeechSynthesisUtterance(', or d ' + first[qindex].option4+ ' !');
		voiceQues.lang = 'en-US';
		voiceQues.rate = 0.7;
		voiceOp1.rate = 0.7;
		voiceOp2.rate = 0.7;
		voiceOp3.rate = 0.7;
		voiceOp4.rate = 0.7;
		speech.speak(voiceQues);
		speech.speak(voiceOp1);
		speech.speak(voiceOp2);
		speech.speak(voiceOp3);
		speech.speak(voiceOp4);
	}
}

if(speech.onvoiceschanged !== undefined)
	{
		speech.onvoiceschanged = audio;
	}



// check the answer is correct or not

function checkAns()
{
	var userAns = document.querySelector('input[type=radio]:checked');	
	if(userAns.value == first[qindex].answer)
	{
		var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
		var scorebrd = document.getElementById(scoreArr[score]);	
		scorebrd.style.background = 'lime';
		
		if(score > 0)
		{
			var defbrd = document.getElementById(scoreArr[score-1]);
			defbrd.style.background = '#390F4E';
		}
		
		score++;
		speech.cancel();
		bgRand();
		correctPlay();
		defcolor();
		qindex++;
		userAns.checked=false;
	}
	else
	{
		wrongAns();
		quit();
	}
	
	if(qindex == 15)
	{
		document.getElementById('main').style.display = 'none';
		document.getElementById('lifeline').style.display = 'none';
		document.getElementById('priceboard').style.display = 'none';
		var winscreen = document.getElementById('lastwinn');		
		winscreen.style.display="block";
		var x = document.createElement("AUDIO");
	    x.setAttribute("id", "myVideo");
	    var z = document.createElement("SOURCE");
	    z.setAttribute("src", "audio/won.mp3");
	    z.setAttribute("type", "audio/mpeg");
	    z.setAttribute("autoplay", "autoplay");
	    x.appendChild(z);

	    x.autoplay = true;
	    document.body.appendChild(x);

	}
	setTimeout(function(){loadQuestion(qindex)}, 4000) ;	
}



// Works when user quit or choose a wrong answer 

function quit()
{
		var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
		var scorebrd = document.getElementById(scoreArr[score-1]);
		

		document.getElementById('main').style.display = 'none';
		document.getElementById('lifeline').style.display = 'none';
		document.getElementById('priceboard').style.display = 'none';
		var winscreen = document.getElementById('wonscreen');
		var winDet = document.getElementById('wonDet');
		winDet.textContent ="YOU WON "+ scorebrd.innerHTML;
		winscreen.style.display = 'block';
		speech = 0;
		songIndex = 200;		
}


function voiceCommand()
{
	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognoition = new SpeechRecognition();
	recognoition.interimResults = false;
	recognoition.addEventListener('result', e =>{
		const transcript = Array.from(e.results)
		   .map(result => result[0])
		   .map(result => result.transcript)
		   .join('')
		console.log(transcript);
	
		if(transcript.includes('be final answer') || transcript.includes('BA final answer'))
		{
			var ansSelected = rd2.value;
			checkDiv2();	
			if(ansSelected == first[qindex].answer)
			{
				option2.checked ==true;
				var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
				var scorebrd = document.getElementById(scoreArr[score]);	
				scorebrd.style.background = 'lime';
		
				if(score > 0)
				{
					var defbrd = document.getElementById(scoreArr[score-1]);
					defbrd.style.background = '#390F4E';
				}
			
				score++;
				bgRand();
				correctPlay();
				defcolor();
				qindex++;
				setTimeout(function(){loadQuestion(qindex)}, 4000) ;	

			}
		
			else
			{
				wrongAns();
				quit();
			}
		}

		if(transcript.includes('A final answer'))
		{
			var ansSelected = rd1.value;
			if(ansSelected == first[qindex].answer)
			{
				var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
				var scorebrd = document.getElementById(scoreArr[score]);	
				scorebrd.style.background = 'lime';
		
				if(score > 0)
				{
					var defbrd = document.getElementById(scoreArr[score-1]);
					defbrd.style.background = '#390F4E';
				}
			
				score++;
				bgRand();
				correctPlay();
				defcolor();
				qindex++;
				setTimeout(function(){loadQuestion(qindex)}, 4000) ;	

			}
		
			else
			{
				wrongAns();
				quit();
			}
		}

		if(transcript.includes('C final answer') || transcript.includes('see final answer') || transcript.includes('CA final answer'))
		{
			var ansSelected = rd3.value;
			if(ansSelected == first[qindex].answer)
			{
				var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
				var scorebrd = document.getElementById(scoreArr[score]);	
				scorebrd.style.background = 'lime';
		
				if(score > 0)
				{
					var defbrd = document.getElementById(scoreArr[score-1]);
					defbrd.style.background = '#390F4E';
				}
			
				score++;
				bgRand();
				correctPlay();
				defcolor();
				qindex++;
				setTimeout(function(){loadQuestion(qindex)}, 4000) ;	

			}
		
			else
			{
				wrongAns();
				quit();
			}
		}


		if(transcript.includes('d final answer') || transcript.includes('the final answer'))
		{
			var ansSelected = rd4.value;
			if(ansSelected == first[qindex].answer)
			{
				var scoreArr = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelwe','thirteen','fourteen','fifteen'];
				var scorebrd = document.getElementById(scoreArr[score]);	
				scorebrd.style.background = 'lime';
		
				if(score > 0)
				{
					var defbrd = document.getElementById(scoreArr[score-1]);
					defbrd.style.background = '#390F4E';
				}
			
				score++;
				bgRand();
				correctPlay();
				defcolor();
				qindex++;
				setTimeout(function(){loadQuestion(qindex)}, 4000) ;	

			}
		
			else
			{
				wrongAns();
				quit();
			}
		}
	});
	recognoition.addEventListener('end',recognoition.start);
	recognoition.start();
	
}
voiceCommand();


// Play Audio when answer is true

function correctPlay() 
{
    var x = document.createElement("AUDIO");
    x.setAttribute("id", "myVideo");
    var z = document.createElement("SOURCE");
    z.setAttribute("src", "audio/right_ans.mp3");
    z.setAttribute("type", "audio/mpeg");
    z.setAttribute("autoplay", "autoplay");
    x.appendChild(z);

    x.autoplay = true;
    document.body.appendChild(x);
}

// Play Audio When answer is wrong

function wrongAns() {
    var x = document.createElement("AUDIO");
    x.setAttribute("id", "myVideo");
    var z = document.createElement("SOURCE");
    z.setAttribute("src", "audio/wrong_ans.mp3");
    z.setAttribute("type", "audio/mpeg");
    z.setAttribute("autoplay", "autoplay");
    x.appendChild(z);

    x.autoplay = true;
    document.body.appendChild(x);
}

// Play the background music effects

function bgRand()
{

	var susArr = ['audio/bg.mp3','audio/bg2.mp3','audio/bg3.mp3','audio/bg4.mp3'];
	var x = document.createElement("AUDIO");
    x.setAttribute("id", "myVideo");
    var z = document.createElement("SOURCE");
    z.setAttribute("src", susArr[songIndex]);
    z.setAttribute("type", "audio/mpeg");
    x.setAttribute("autoplay", "autoplay");
    z.loop = true;
    x.volume=0.1;
    x.appendChild(z);
    x.autoplay = true;
    document.body.appendChild(x);	
    songIndex++;
}

// 50-50 life line

function lifeFifty()
{
	if(fiftyLife=='on')
	{
		var ans = first[qindex].answer;	
		//console.log(ans);
		if(ans == 1)
		{
			option1.textContent = first[qindex].option1;	
			option2.textContent = ' ';	
			option3.textContent = ' ';
			option4.textContent = first[qindex].option4;	
		}
		if(ans == 2)
		{
			option1.textContent = ' ';	
			option2.textContent = first[qindex].option2;	
			option3.textContent = ' ';
			option4.textContent = first[qindex].option4;	
		}
		if(ans == 3)
		{
			option1.textContent = ' ';	
			option2.textContent = first[qindex].option2;	
			option3.textContent = first[qindex].option3;
			option4.textContent = ' ';	
	
		}
		if(ans == 4)
		{
			option1.textContent = first[qindex].option1;	
			option2.textContent = ' ';	
			option3.textContent = ' ';
			option4.textContent = first[qindex].option4;	
		
		}
		fiftyLife = 'off'; // After using 50-50 lifeline makes it unavailable for reuse;
	  	var img = document.getElementById('50');
		img.src = "image/50used.png";
	
	}
}

// Audience Pole lifeline ( Chart.js is used )

var canvas = document.getElementById('mychart').getContext('2d');
function audiencePole()
{
	var canvas = document.getElementById('mychart').getContext('2d');
	var ans = first[qindex].answer;
	if(apLife == 'on')
	{
		document.getElementById('chartCont').style.display="block";
	
		if(ans == 1)
		{
			var chart = new Chart(canvas, {
			type : 'bar',
			data:{
			labels:['A','B','C','D'],
			datasets:[{
					label:'options',
					data:[
						60,
						20,
						15,
						5,
					],
						backgroundColor:'orange'
					}],
				},
			});
		}
		if(ans == 2)
		{
			var chart = new Chart(canvas, {
			type : 'bar',
			data:{
			labels:['A','B','C','D'],
			datasets:[{
					label:'options',
					data:[
						20,
						70,
						5,
						5,
						100,
					],
						backgroundColor:'orange'
					}],
				},
			});
		}
		if(ans == 3)
		{
			var chart = new Chart(canvas, {
			type : 'bar',
			data:{
			labels:['A','B','C','D'],
			datasets:[{
					label:'options',
					data:[
						20,
						18,
						50,
						12,
					],
						backgroundColor:'orange'
					}],
				},
			});
		}
		if(ans == 4)
		{
			var chart = new Chart(canvas, {
			type : 'bar',
			data:{
			labels:['A','B','C','D'],
			datasets:[{
					label:'options',
					data:[
						18,
						20,
						12,
						50,
					],
						backgroundColor:'orange'
					}],
				},
			});
		}
		apLife = 'off'; // makes the audience pole lifeline unavailable for reuse
		var img = document.getElementById('ap');
		img.src = "image/apused.png";
	}
}

// Closing the chart popup after using audience pole lifeline

function closeChart()
{
	document.getElementById('chartCont').style.display="none";
}

//
//
//
//
//
//
//*** END ***
//
//
//
//
//
//