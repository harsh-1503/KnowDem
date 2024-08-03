/*
This function is to speak load message
*/

// function delay(ms) {
 
// 	return new Promise(resolve => setTimeout(resolve,ms));

// }
// function testTimer() {
	
// 	console.log("Test Question has asked");
// 	return;
// }
function mBotSpeak(id,state) 
{
  
//   const voices = speechSynthesis.getVoices();
//   var data;
//   for (let i = 0; i < voices.length; i++) {
//         if(i==2) {
// 		   data = voices[i];
// 		   break;
// 		}
//   }
//   alert(voices.length);
//   if (voices.length !== 0) {
// 	msg = new SpeechSynthesisUtterance();
// 	msg.voice = voices[0];
//   }

//  var mBotSpeakObj = new SpeechSynthesisUtterance();
//   mBotSpeakObj.voice = data;
//   console.log(data);

  var mBotSpeakObj = new SpeechSynthesisUtterance();

  var mBotSpeakObj_Q1 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q2 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q3 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q4 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q5 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q6 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q7 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q8 = new SpeechSynthesisUtterance();
  var mBotSpeakObj_Q9 = new SpeechSynthesisUtterance();

  var mBotSpeakObj_Report = new SpeechSynthesisUtterance();




  if(state == 'start') {
	  

		switch(id) 
		{
			case "homePageBody" : 
			mBotSpeakObj.text = "Welcome to KnowDem. This Application is to know the level of Dementia through the assessment of a person. Please click start button to start the Assessment "; 
			window.speechSynthesis.speak(mBotSpeakObj); 
			break;

			// case "testPageBody" : 
			// mBotSpeakObj.text = "There are 6 Questions. Please answer them orally. You will get 1 Second to answer"; 
			// window.speechSynthesis.speak(mBotSpeakObj); 
			// break;

			//1
			case "q1PageBody" :
			mBotSpeakObj_Q1.text = "Qustion Number 1, What year is it ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q1); 
			break;

			//2
			case "q2PageBody" :
			mBotSpeakObj_Q2.text = "Qustion Number 2, What month is it ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q2); 
			break;

			//3
			case "q3PageBody" :
			mBotSpeakObj_Q3.text = "Qustion Number 3, What time is it to the nearest hour ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q3); 
			break;

			//4
			case "q4PageBody" :
			mBotSpeakObj_Q4.text = "Qustion Number 4, Count back from 20 to 1 ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q4); 
			break;

			//5
			case "q5PageBody" :
			mBotSpeakObj_Q5.text = "Qustion Number 5, Say month of the year in Reverse order ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q5); 
			break;
			
			//6
			case "q6PageBody" :
			mBotSpeakObj_Q6.text = "Qustion Number 6, Tell me name & address I gave you earlier ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q6); 
			break;

			//7
			case "q7PageBody" :
			mBotSpeakObj_Q7.text = "Qustion Number 7, Please listen carefully, I am going to say three words, That I want you to repeat back to me now and try to remember.The words are : Garden, Sunrise, Chair ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q7); 
			break;

			//8
			case "q8PageBody" :
			mBotSpeakObj_Q8.text = "Qustion Number 8, What are the three words I asked you to remember? Record the word list and the answers below ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q8); 
			break;

							
			//9
			case "q9PageBody" :
			mBotSpeakObj_Q9.text = "Qustion Number 9, Identify the images shown below ?"; 
			window.speechSynthesis.speak(mBotSpeakObj_Q9); 
			break;
	
				
			case "reportPageBody" : 
			mBotSpeakObj_Report.text = "Your at the Fourth stage of Dementia which is Mild Stage of Dementia."; 
			window.speechSynthesis.speak(mBotSpeakObj_Report); 
			break;


			
		} 
	  
	  
	}
	
	  if(state == 'stop') {
	  
	      
		mBotSpeakObj.volume = 0;
	  
	  
	}

  }  


