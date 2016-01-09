$(document).ready(init);

var clickedFromG = false; 
var diskToMove;
var diskSelected;
var towerMoveFrom;

function init(){
	
    $('.container').click(gameCtrl);
    /*
	console.log("this is data 1", typeof $('#block1').data('one'));
    var blockA = $('#block1').data('one');
    var blockB = $('#block2').data('two');
    console.log(blockA>blockB);
    console.log(blockA<blockB);
    $('.container1').click(clickedTower1);
    $('.container2').click(clickedTower2);
    $('.container3').click(clickedTower3);
    */
}

function gameCtrl(event){
    console.log("diskSelected", diskSelected);
	//debugger;
	if(diskSelected){
		move(event);
	} else if(!diskSelected){
		diskSelect(event);
	}
}

function move(event){
	diskSelected = false;
	console.log($(event.target))
    console.log('disk is');
    console.log(diskToMove.text());

    var firstChild = $(event.target).find('.blocks:first-child');


    var blocksContainer = $(event.target).find('.blocks-container');
    console.log("blocks:", blocksContainer);
    //debugger;

    console.log("first child of target text");
    console.log(firstChild.text());     

    if(diskToMove.text() < firstChild.text() || !firstChild.text()) {
     	//$(event.target).prepend(diskToMove); //$(event.target).find('.blocks:first-child'));
        blocksContainer.prepend(diskToMove);
        winning(event);
     }
     else {
     	alert("Can't move there!");
     }
}

function diskSelect(event) {
	diskSelected = true;
	diskToMove = $(event.target).find('.blocks:first-child')
	console.log(diskToMove.text());
}

function winning(event) {
    if($(event.target).find('.blocks').length === 3 && $(event.target).attr('id') === 'container3') {
       alert("You WIN");
    }
}

/*
function clickedTower1(event){
    console.log("clickedTower1");

    if(clickedFromG == false) {
    	console.log("clickedFromG is False. We get something");
    	console.log($('.blocks-container1'));


    }
    else 
    {
    	console.log("clickedFromG is True. We are getting something");
    }
    
    //$('.blocks-container2').append($('#block1'));

    //  $('.blocks-container2').append($('#block2'));

    //$('#a').css();

    //$('.blocks-container3').append($('#b'));
}

function clickedTower2(event){
    console.log("clickedTower2");

    if(clickedFromG == false) {
    	console.log("clickedFromG is False. We get something");
    }
    else 
    {
    	console.log("clickedFromG is True. We are getting something");
    }
    
    //$('.blocks-container2').append($('#block1'));

      //  $('.blocks-container2').append($('#block2'));

    //$('#a').css();

    //$('.blocks-container3').append($('#b'));
}

function clickedTower3(event){
    console.log("clickedTower3");

    if(clickedFromG == false) {
    	console.log("clickedFromG is False. We get something");
    }
    else 
    {
    	console.log("clickedFromG is True. We are getting something");
    }
    
    //$('.blocks-container2').append($('#block1'));

      //  $('.blocks-container2').append($('#block2'));

    //$('#a').css();

    //$('.blocks-container3').append($('#b'));
}
*/