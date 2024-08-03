/** */ 
//import { mBotSpeak } from "./mBotSpeak";
function mBotDo(event, elementId, state) {

console.log("mBotDo called");
    switch(event) 
    {
       //First Page.
       case 'load': mBotSpeak(elementId,state); break;

       //Assessment Page(s).
    //    case 'q1' : mBotSpeak(elementId, state); break;
    //    case 'q2' : mBotSpeak(elementId, state); break;
    //    case 'q3' : mBotSpeak(elementId, state); break;
    //    case 'q4' : mBotSpeak(elementId, state); break;
    //    case 'q5' : mBotSpeak(elementId, state); break;
    //    case 'q6' : mBotSpeak(elementId, state); break;
    //    case 'q7' : mBotSpeak(elementId, state); break;
    //    case 'q8' : mBotSpeak(elementId, state); break;
    //    case 'q9' : mBotSpeak(elementId, state); break;
    //    case 'q10' : mBotSpeak(elementId, state); break;

       //Report Page.
       case 'loadReport' : mBotSpeak(elementId, state); break;

       default : break;

    }


    
}
