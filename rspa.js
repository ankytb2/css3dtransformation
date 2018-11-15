/* Author: Ankit Mehta
File Name: rspa.js */
/*really simple panel animation*/

/*animates transitions between any number of panels wwith a class of "panel"*/

var rsTransitionTiming=5000;

var rsAnimator={
	
	animateNthPanel: function(n){
		
		var panels=document.querySelectorAll('.panel')
		
		for (var i=0; i < panels.length; i++) {
			panels[i].style.opacity='0';
			panels[i].style.zIndex='0';
			
		};
		
		if (panels[n]){
			panels[n].style.opacity="1"
			panels[n].style.zIndex="1"
		}
		
		if (n<panels.length-1){
			window.setTimeout(function(){rsAnimator.animateNthPanel(n+1)}, rsTransitionTiming)
		}
		else {
			window.setTimeout(function(){rsAnimator.animateNthPanel(0)}, rsTransitionTiming)
		}
	}
}