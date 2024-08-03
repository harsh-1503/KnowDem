var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#myInput")

// var instructions = $("#instructions")

var temporaryContent = '';

var finalContent = '';

var content = '';

var input, filter, ul, li, a, i, txtValue;

var searchString  = "";

var finalString = "";

recognition.continuous = true

// recognition is started

recognition.onstart = function() {

 instructions.text("Voice Recognition is On")

}

recognition.onspeechend = function() {

 instructions.text("No Activity")

}

recognition.onerror = function() {
alert("an error has occured");
instructions.text("Try Again")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript
  
console.log(transcript);

 content += transcript
 var textarea = document.getElementById('myInput')
 textarea.innerHTML=  content;

//  textarea.val(content)


    str = document.getElementById("myInput").value;
    str = str.replace(".","");

    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var resTxt = this.responseText;
              var listOfDocuments =  resTxt.split(",");
              var documentListInHTML = "";
              var docName = "";
              var docPath = "";
              var detail = "";
              for(var i=0; i<listOfDocuments.length; i++) {
                detail = listOfDocuments[i].split(";");
                docName = detail[0];
                docPath = detail[1];
                if(docName !=="") {
                  documentListInHTML += "<li><a href='docs/"+docPath+"'>"+docName+"</a></li>"; 
                }
              }
            document.getElementById("myUL").innerHTML = documentListInHTML;
          }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
      }

}

// $("#start-btn").click(function(event) {

//  recognition.start()

// })

window.addEventListener('load',()=>{
  alert("recognition start");
 recognition.start()
})



// textarea.on('input', function() {

//  content = $(this).val();
 
// })