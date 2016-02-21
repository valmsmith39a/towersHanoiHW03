$(document).ready(init);

var clickedFromG = false; 
var diskToMove;
var diskSelected;
var towerMoveFrom;

function init() {
    $('.container').click(gameCtrl);
}

function gameCtrl(event) {
    if(diskSelected){
		move(event);
	} else if(!diskSelected){
		diskSelect(event);
	}
}

function move(event) {
	diskSelected = false;
    var firstChild = $(event.target).find('.blocks:first-child');
    var blocksContainer = $(event.target).find('.blocks-container');
        
    if(diskToMove.text() < firstChild.text() || !firstChild.text()) {
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
}

function winning(event) {
    if($(event.target).find('.blocks').length === 3 && $(event.target).attr('id') === 'container3') {
       alert("You WIN");
    }
}