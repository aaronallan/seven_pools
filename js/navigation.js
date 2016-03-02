$('#anchor_services').bind('inview', function (event, visible) {
		  if (visible == true) {
			// element is now visible in the viewport
			$('#section_services a').addClass('inview');
			//$('#section_services a').css({"opacity":"1.0"}, 1000);
			//$('#section_services a').css({"border-bottom":"3px solid #4B4DA1"}, 1000);
		  } else {
			// element has gone out of viewport
			$('#section_services a').removeClass('inview');
			//$('#section_services a').css({"opacity":".8"}, 1000);
			//$('#section_services a').css({"border-bottom":"3px solid transparent"}, 1000);
			return false;
			

		  }
		});
		$('#anchor_projects').bind('inview', function (event, visible) {
		  if (visible == true) {
			// element is now visible in the viewport
			$('#section_projects a').addClass('inview');
			//('#section_projects a').css({"opacity":"1.0"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid #4B4DA1"}, 1000);
			//$('#section_projects a').addClass('.nav.stuck ul li a:hover');
			
		  } else {
			// element has gone out of viewport
			$('#section_projects a').removeClass('inview');
			//$('#section_projects a').css({"opacity":".8"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid transparent"}, 1000);
			return false;

		  }
		});
	
		$('#anchor_about_us').bind('inview', function (event, visible) {
		  if (visible == true) {
			// element is now visible in the viewport
			$('#section_about_us a').addClass('inview');
			//('#section_projects a').css({"opacity":"1.0"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid #4B4DA1"}, 1000);
			//$('#section_projects a').addClass('.nav.stuck ul li a:hover');
			
		  } else {
			// element has gone out of viewport
			$('#section_about_us a').removeClass('inview');
			//$('#section_projects a').css({"opacity":".8"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid transparent"}, 1000);
			return false;

		  }
		});
		$('#anchor_contact_us').bind('inview', function (event, visible) {
		  if (visible == true) {
			// element is now visible in the viewport
			$('#section_contact_us a').addClass('inview');
			//('#section_projects a').css({"opacity":"1.0"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid #4B4DA1"}, 1000);
			//$('#section_projects a').addClass('.nav.stuck ul li a:hover');
			
		  } else {
			// element has gone out of viewport
			$('#section_contact_us a').removeClass('inview');
			//$('#section_projects a').css({"opacity":".8"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid transparent"}, 1000);
			return false;

		  }
		});
		$('#anchor_slide1').bind('inview', function (event, visible) {
		  if (visible == true) {
			// element is now visible in the viewport
			$('#bullet1').addClass('active');
			//('#section_projects a').css({"opacity":"1.0"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid #4B4DA1"}, 1000);
			//$('#section_projects a').addClass('.nav.stuck ul li a:hover');
			
		  } else {
			// element has gone out of viewport
			$('#bullet1').removeClass('active');
			//$('#section_projects a').css({"opacity":".8"}, 1000);
			//$('#section_projects a').css({"border-bottom":"3px solid transparent"}, 1000);
			return false;

		  }
		});
