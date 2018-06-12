/**
 * Updated at: 6/12/18 9:16pm
 */

/**
 * Changes view to Edit mode
 */
function editMode(){
    if($('#col1').hasClass('grid-sm-2')){
        $('.grid-sm-2').removeClass('grid-sm-2').addClass('edit-grid-sm-2');
    }
    else if($('#col1').hasClass('grid-sm-1')){
        $('.grid-sm-1').removeClass('grid-sm-1').addClass('edit-grid-sm-1');
    }
    else {
        $('.grid-sm-3').removeClass('grid-sm-3').addClass('edit-grid-sm-3');
    }

    $('.extra-content').removeClass('extra-content').addClass('edit-extra-content');
    $('.grid-width').removeClass('grid-width').addClass('edit-grid-width');
    $('.grid-height').removeClass('grid-height').addClass('edit-grid-height');
    $('.pop-up-window').removeClass('pop-up-window').addClass('edit-pop-up-window');
    $('.pop-up').removeClass('pop-up').addClass('edit-pop-up');
    $('.close-pop-up').removeClass('close-pop-up').addClass('edit-close-pop-up');
    $('.close-button').removeClass('close-button').addClass('edit-close-button');
    $('.grid-border').removeClass('grid-border').addClass('edit-border');
}

/**
 * Changes view to user mode
 */
function changeUserMode(){

    if(!isThree){
        if($(window).width() < 767) {
            $('.edit-grid-sm-2').addClass('grid-sm-1').removeClass('edit-grid-sm-2');
        }
        else{
            $('.edit-grid-sm-2').addClass('grid-sm-2').removeClass('edit-grid-sm-2');

        }
    }
    else if(isThree){
        if($(window).width() < 730) {
            $('.edit-grid-sm-3').addClass('grid-sm-1').removeClass('edit-grid-sm-3');
        }
        else{

            $('.edit-grid-sm-3').addClass('grid-sm-3').removeClass('edit-grid-sm-3');

        }
    }
    else{

    }
        $('.edit-extra-content').addClass('extra-content').removeClass('edit-extra-content');
        $('.edit-grid-width').addClass('grid-width').removeClass('edit-grid-width');
        $('.edit-grid-height').addClass('grid-height').removeClass('edit-grid-height');
        $('.edit-pop-up-window').addClass('pop-up-window').removeClass('edit-pop-up-window');
        $('.edit-pop-up').addClass('pop-up').removeClass('edit-pop-up');
        $('.edit-close-pop-up').addClass('close-pop-up').removeClass('edit-close-pop-up');
        $('.edit-close-button').addClass('close-button').removeClass('edit-close-button');
        $('.edit-border').addClass('grid-border').removeClass('edit-border');


}

/**
 * moves the cells based on number of containers for 3x3 template
 */
function moveCellsForThreeByThree(){
    var numContainers = $('.grid-content').length;

    if(numContainers == 7){
        var container6 = $('div.matching')[5];
        $("#col3").prepend(container6);
    }
    else if(numContainers == 6){

        if($('#col3').length != 1){
            var col3 = $('<div id="col3" class="grid-column grid-sm-3"></div>');
            $('#col').append(col3);
        }

        var container3 = $('div.matching')[2];
        var container4 = $('div.matching')[3];
        var container5 = $('div.matching')[4];
        var container6 = $('div.matching')[5];


        $('#col2').prepend(container3);

        $("#col3").prepend(container6);
        $("#col3").prepend(container5);
    }
    else if(numContainers == 5){

        if($('#col3').length != 1){
            var col3 = $('<div id="col3" class="grid-column grid-sm-3"></div>');
            $('#col').append(col3);
        }

        var container3 = $('div.matching')[2];
        var container4 = $('div.matching')[3];
        var container5 = $('div.matching')[4];



        $('#col2').prepend(container3);
        $("#col3").prepend(container5);
    }
    else if(numContainers == 4){

        if($('#col3').length != 1){
            var col3 = $('<div id="col3" class="grid-column grid-sm-3"></div>');
            $('#col').append(col3);
        }

        var container3 = $('div.matching')[2];
        var container4 = $('div.matching')[3];



        $('#col2').prepend(container3);

        $("#col3").prepend(container4);
    }
    else if(numContainers == 3){

        if($('#col2').length != 1){
            var col2 = $('<div id="col2" class="grid-column grid-sm-3"></div>');
            $('#col').append(col2);
        }
        if($('#col3').length != 1){
            var col3 = $('<div id="col3" class="grid-column grid-sm-3"></div>');
            $('#col').append(col3);
        }


        var container2 = $('div.matching')[1];
        var container3 = $('div.matching')[2];



        $('#col2').prepend(container2);

        $("#col3").prepend(container3);
    }
    else if(numContainers == 2){
        if($('#col2').length != 1){
            var col2 = $('<div id="col2" class="grid-column grid-sm-2"></div>');
            $('#col').append(col2);
        }
        $('.grid-sm-3').addClass('grid-sm-2').removeClass('grid-sm-3');

        var container3 = $('div.matching')[1];

        $('#col2').prepend(container3);
    }
    else if(numContainers == 1){
        $('.grid-sm-3').addClass('grid-sm-1').removeClass('grid-sm-3');
    }
}

/**
 * moves the cells based on number of containers for 3x2 template
 */
function moveCellsForTwoByTwo(){
    var numContainers = $('.grid-content').length;

    if(numContainers == 4){

        var container3 = $('div.matching')[2];

        $('#col2').prepend(container3);

    }

    else if(numContainers == 3){

        if ($('#col2').length != 1){
            var col2 = $('<div id="col2" class="grid-column grid-sm-2"></div>');
            $('#col').append(col2);
        }

        var container3 = $('div.matching')[2];

        $('#col2').prepend(container3);
    }
     else if(numContainers == 2){
        if ($('#col2').length != 1){
            var col2 = $('<div id="col2" class="grid-column grid-sm-2"></div>');
            $('#col').append(col2);
        }

        var container3 = $('div.matching')[1];

        $('#col2').prepend(container3);

    }
    else if(numContainers == 1){
        $('.grid-sm-2').addClass('grid-sm-1').removeClass('grid-sm-2');
    }
}

/**
 * Window onload function. Changes to user mode on load, sets size for pop up
 * , centers videos if found in the template, and moves cells.
 */
window.onload = function(){
    if($('div').hasClass('edit-grid-sm-3')){
        isThree = true;
    }

    //sets display to none so the user doesn't see edit mode on refresh or on load
    $('html').css({
        'display': 'none'
    });

    $('.description').addClass('grid-animation');

    //sets timeout for d2l iframe bug of not displaying any content
    setTimeout(
        function()
        {
            changeUserMode();

            //sets display to block after user mode has been changed completely. User wont see Edit mode
            $('html').css({
                'display': ''
            });
        }, 500);

    //moves cells around based on the grid type (3x3 or 3x2)
    if(isThree){
        moveCellsForThreeByThree()
    }
    else {
        moveCellsForTwoByTwo();
    }

    //checks if paragraph pop up has contents
    if($('#descriptionPopUp').find('p').length >= 1){
        passed = true;

        if($($('.paragraphs p')[0]).text().length == 0){
            passed = false;
        }
    }

    if($('p video').length > 0){
        var paragraphs = $('p');

        for(var i = 0; i < paragraphs.length; i++){

            if($($(paragraphs)[i]).find('video').length == 1){
                $($(paragraphs)[i]).css({
                   'text-align':'center'
                });
            }
        }
    }

};



