// set up text to print, each item in array is new line
var aText = new Array(
    "Lại một mùa giáng sinh nữa đã đến.🎄", 
    "Chúc mày giáng sinh năm nay ấm áp, hạnh phúc, tràn ngập niềm vui bên gia đình và những người mà mày yêu quý.💕",
    "Mong giáng sinh năm nay sẽ có nhiều điều thật đặc biệt với mày.😅",
    "Merry Christmas!",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "P/s: Trời này lạnh lắm ra đường nhớ phải mặc cho ấm vào nha."
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    typewriter();

