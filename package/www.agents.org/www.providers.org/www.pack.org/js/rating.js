	$(document).ready(function() {

	    /* 1. Visualizing things on Hover - See next part for action on click */
	    $('#stars li').on('mouseover', function() {
	        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

	        // Now highlight all the stars that's not after the current hovered star
	        $(this).parent().children('li.star').each(function(e) {
	            if (e < onStar) {
	                $(this).addClass('hover');
	            } else {
	                $(this).removeClass('hover');
	            }
	        });

	    }).on('mouseout', function() {
	        $(this).parent().children('li.star').each(function(e) {
	            $(this).removeClass('hover');
	        });
	    });


	    /* 2. Action to perform on click */
	    $('#stars li').on('click', function() {
	        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
	        var stars = $(this).parent().children('li.star');

	        for (i = 0; i < stars.length; i++) {
	            $(stars[i]).removeClass('selected');
	        }

	        for (i = 0; i < onStar; i++) {
	            $(stars[i]).addClass('selected');
	        }

	        // JUST RESPONSE (Not needed)
	        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);

	        //alert(ratingValue);
	        var msg = "";

	        if (ratingValue == 1) {
	            msg = "Terrible";
	        } else if (ratingValue == 2) {
	            msg = "Poor";
	        } else if (ratingValue == 3) {
	            msg = "Average";
	        } else if (ratingValue == 4) {
	            msg = "Very good";
	        } else if (ratingValue == 5) {
	            msg = "Excellent";
	        }

	        document.getElementById('ratinghd').value = ratingValue;

	        /*if (ratingValue > 1) {
	            msg = "Thanks! You rated this " + ratingValue + " stars.";
	        }
	        else {
	            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
	        }*/
	        responseMessage(msg);

	    });


	});


	function responseMessage(msg) {
	    //$('.success-box').fadeIn(200); 
	    //$('.success-box div.text-message').html("<span>" + msg + "</span>");
	    document.getElementById('ratcont').style.display = "block";
	    document.getElementById('rattext').innerHTML = msg;
	}