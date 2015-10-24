var clueurls = ["https://www.youtube.com/embed/C1K-D35-q1w?rel=0", "https://www.youtube.com/embed/yJwyQjf8FUU?rel=0"];

var clue0played, clue1played = false;
function closeClueContainer(){
    // document.getElementById("clueContainer").setAttribute("style", "display:none");
    $( "#clueContainer" ).attr( "style", "display:none" );
}

function showClueContainer(piece){
    var el = $( "#chessboardsBox" );
    var pos = el.position();
    var posLeft = pos.left + 56;
    var posTop = pos.top + 156;
    // document.getElementById("clueContainer").setAttribute("style","display:block;position:absolute;left:" + posLeft + "px;top:" + posTop + "px;z-index:120;");
    if (piece == 1 || piece == 3 && clue0played == false){
       $("#youtube").attr("src", clueurls[0]); 
       clue0played = true;
    } else if ((piece == 4 || piece == 5) && clue1played == false){
        $("#youtube").attr("src", clueurls[1]);
        clue1played = true;
    }
    $( "#clueContainer" ).attr( "style","display:block;position:absolute;left:" + posLeft + "px;top:" + posTop + "px;z-index:120;");
}

function getPos(el){
    // stackoverflow get-the-position-of-a-div-span-tag
    for (var lx=0, ly=0; el!= null; lx += el.offsetLeft, ly+=el.offsetTop, el=el.offsetParent);
    return {x: lx, y:ly}; 
}
