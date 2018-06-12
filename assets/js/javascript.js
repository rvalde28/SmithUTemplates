/**
 * Updated at: 6/11/18 1:51pm
 */

var currPop;
var isThree = false;
var setHeight = false;
var passed = false;


/**
 * Resize screen depending on the screen size
 * */
$(window).resize(function(){
    var width = $(window).width();

    //resizes if the screen is a 3x3 template, else if its a 3x2 template
    if(isThree) {
        if (width > 730) {
            if ($('div').hasClass('grid-sm-1')) {
                $('.grid-sm-1').removeClass('grid-sm-1').addClass('grid-sm-3');
            }
        }
        else if (width >= 320 && width <= 767) {
            if ($('div').hasClass('grid-sm-3')) {
                $('.grid-sm-3').removeClass('grid-sm-3').addClass('grid-sm-1');
            }

        }
        else {

        }
    }
    else{
        if (width > 730) {
            if ($('div').hasClass('grid-sm-1')) {
                $('.grid-sm-1').removeClass('grid-sm-1').addClass('grid-sm-2');
            }
        }
        else if (width >= 320 && width <= 767) {
            if ($('div').hasClass('grid-sm-2')) {
                $('.grid-sm-2').removeClass('grid-sm-2').addClass('grid-sm-1');
            }

        }
        else {

        }
    }
})
.resize();


/**
 * Open Description pop up on click
 */
$(document).on('click','div.description', function(e){
    //set hieght for paragraphs and video
    setParagraphHeight();
    setVideoSize();

    //checks if content exists in the description pop up to show the content
    if(passed) {
        currPop = "descriptionPopUp";
        document.getElementById('descriptionPopUp').style.display = 'block';


        //css for highlighting the active tab and dimming everything else except
        //for the pop up
        $('.content').css({
            'background': 'rgba(0,0,0,0.72)',
        });
        $('.grid-border').css({
            'border-color': 'rgba(0,0,0,0.72)',
            'background': 'none'
        });
        $('.main-container').css({
            'border-color': 'rgba(0,0,0,0.72)',
            'background': 'none'
        });
        $('.class-type').css({
            'background': 'inherit',
            'background-color': 'none',
            'color': 'black'
        });
        $('div.class-info h1').css({
            'color': 'black!important'
        });
        $(this).css({
            'background': 'white',
        });
        $('.container').css({
            'border-color': 'rgba(0,0,0,0.72)'
        })
        $('.extra-content').css({
            'border-color': 'rgba(0,0,0,0.72)'
        });

        $('div.class-info h1.page-header').addClass('overcast');

    }
});

/**
 * Set video size For the pop up when using an iframe
 */
function setVideoSize(){
    var width = $('div.contents').width();
    var height = (width/16) * 9;
    var iframe = $('p iframe').contents();


    for(var i = 0; i < iframe.length; i++) {
        $('div iframe').css({
            'width': width,
            'height': height,
        });


        var iframe2 = iframe.find('#ctl_1');

        iframe2.css({
            'width': width,
            'height': height,
        })
    }
}

/**
 * Opens corresponding pop up for each cell on click
 */
$(document).on('click','div.grid-padding div.grid-border', function(e){
    setParagraphHeight();

    var cell = $(this).attr('id');
    var num = cell.substr(cell.length - 1);
    var popUp = "pop-" + num;

    currPop = popUp;

    document.getElementById(popUp).style.display = 'block';


    //css for highlighting the active tab and dimming everything else except
    //for the pop up
    $('.content').css({
        'background': 'rgba(0,0,0,0.72)',
    });
    $('.grid-border').css({
        'border-color': 'rgba(0,0,0,0.72)',
        'background' : 'none'
    });
    $('.main-container').css({
        'border-color': 'rgba(0,0,0,0.72)',
        'background' : 'none'
    });
    $('.class-type').css({
       'background': 'inherit',
        'background-color' : 'none',
        'color':'black'
    });
    $('div.class-info h1').css({
        'color': 'black!important'
    });
    $(this).css({
        'background': 'white',
    });
    $('.container').css({
        'border-color': 'rgba(0,0,0,0.72)'
    })
    $('.extra-content').css({
        'border-color': 'rgba(0,0,0,0.72)'
    });
    $('div.class-info h1.page-header').addClass('overcast');


});

/*Close the pop up window*/
//X button
$('div#closeX').click(function (e) {
    close();
    e.stopPropagation();
});

//close button
$('div#closeButton').click(function (e) {
    close();
    e.stopPropagation();
});
/*End close pop up*/

/*close pop up when clicking outside of div*/
window.onclick = function(e){
    if(e.target == document.getElementById(currPop)){
        close();
    }
}

/**
 * Close function that resets all of the css that was change when clicking the cells
 */
function close() {
    if (currPop == 'descriptionPopUp') {
        $('#descriptionPopUp').css({
            'display':''
        });
    }
    else{
        document.getElementById(currPop).style.display = 'none';
    }

    currPop = "";
    $('.content').css({
        'background': ''
    });
    $(".grid-border").css({
        'border-color': '#CECECE',
        'background' : ''
    });
    $('.container').css({
        'border-color': '#CECECE'
    })
    $('.class-type').css({
        'background': '',
        'background-color' : '',
        'color':''
    });
    $('.extra-content').css({
       'border-color' : '',
    });
    $('.main-container').css({
        'border-color': '',
        'background' : ''
    });
    $('.class-info h1').css({
        'color': '',
        'background-color': ''
    });
    $('div.class-info h1.page-header').removeClass('overcast');
}

/**
 * Set paragraph max height for each cell
 */
function setParagraphHeight(){
    if(!setHeight) {
        var numContainers = $(".matching").length;


        var height = $(window).height();


        if (numContainers <= 3) {

            $('.paragraphs').css({
                'max-height': height / 1.65
            });
        }
        else if (numContainers > 3 && numContainers <= 6) {
            $('.paragraphs').css({
                'max-height': height / 1.65
            });
        }
        else if (numContainers > 6 && numContainers <= 9) {
            $('.paragraphs').css({
                'max-height': height / 1.65
            });
        }
        else {
            $('.paragraphs').css({
                'max-height': '100px'
            });
        }
        setHeight = true;
    }

}

/**
 * adds "Click to learn" text on the html code
 */
$('div.grid-padding').mouseover(function(){
    var container = $(this);
    var added = $('<div class="click-learn"><div class="learn-border align="right">Click to learn >></div></div>');

    $(container).append(added);
});

/**
 * Removes the added "click to learn" code to remove duplicates
 */

$('div.grid-padding').mouseout(function(){
    for( var i = 0 ; i < $('.click-learn').length; i++){
        $('.click-learn')[i].remove();
    }
});

/**
 * triggers the slide animation for the cells and adds white font color
 */
$('div.grid-padding .edit-border').mouseover(function(){
    $(this).addClass('animation-active');
    var animateThisHeader = $(' div.grid-content h3');

    $(this).find(animateThisHeader).css({
        'color':'white'
    });
});

/**
 * removes slide animation and resets font color to black for the cells
 */
$('div.grid-padding .edit-border').mouseout(function(){
    $(' div.grid-content h3').css({
        'color':''
    });
    $(this).removeClass('animation-active');
});

/**
 * triggers the slide animation for the description and adds "Click to learn" Code
 */
$('div.description').mouseover(function(){

    if(passed) {
        $(this).addClass('animation-active');
        var animateThisHeader = $('div.class-info h1');

        $(this).find(animateThisHeader).css({
            'color': 'white',

        });

        var container = $(this);
        var added = $('<div class="click-learn"><div class="learn-border align="right">Click to learn >></div></div>');

        $(container).append(added);
    }
});
/**
 * removes slide animation and resets font color to black for the description cell and removes "Click to learn" code
 */
$('div.description').mouseout(function(){
    $('div.class-info h1').css({
        'color':''
    });
    $(this).removeClass('animation-active');

    for( var i = 0 ; i < $('.click-learn').length; i++){
        $('.click-learn')[i].remove();
    }
});


