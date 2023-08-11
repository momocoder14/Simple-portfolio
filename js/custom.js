
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

window.onload = function() { 
    var el = document.getElementById('my-form'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }