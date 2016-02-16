/*****************************************************************************/
/*        
/* General                
/*                  
/*****************************************************************************/
window.onresize = function() {
    if (document.getElementById('resizingIframe') != null) {
	var obj = document.getElementById('resizingIframe');
	obj.style.height = (obj.parentNode.offsetWidth / 16 * 9) + "px";
    }
}

/*****************************************************************************/
/*
/* Off-Canvas Fix
/*
/*****************************************************************************/
$(window)
    .on('resize', function (e) {
        if ($(this).width() > 640) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-left");
        }
        })
    .on('resize', function (e) {
        if ($(this).width() > 640) {
            e.preventDefault();
            $(".off-canvas-wrap").removeClass("move-right");
        }
    });

// no longer need .html adding, due to permalinks! :D

/*****************************************************************************/
/*
/* Accordion Fix
/*
/*****************************************************************************/
var panelNum;
function addPanel(i) {
    panelNum = i;
}
$('dd > a').on("click", function (e) {
    target = $('#' + 'panel' + panelNum);
    if(target.hasClass('active2')) {
        target.removeClass('active');
        target.removeClass('active2');
    } else {
        target.addClass('active2');
    }
    $('.active2').addClass('active');
});
