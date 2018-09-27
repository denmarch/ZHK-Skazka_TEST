(function($) {

    $(document).ready(documentReadyFunction);
    $(window).resize(windowResizeFunction);

    function documentReadyFunction() {
        
		onPageLoad();
	}

    function windowResizeFunction() {
        
		
        onPageLoadOrResize();
    }

    function onPageLoad() {
		// functions for document ready
		var w_height = viewportSize.getHeight();
		var w_width = viewportSize.getWidth();
		
		//$(".digi-accessibility").accessibility();
		
		//$('#myModal_addedUser').modal('show');
		
		/* SELECT */
		(function() {
			[].slice.call( document.querySelectorAll( '.cs-select-status select, #cs-select-user select, .cs-select-all select' ) ).forEach( function(el) {	
				new SelectFx(el);
			} );
		})();
		
		/*
		* Replace all SVG images with inline SVG
		*/
		jQuery('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
		
			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');
		
				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
		
				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');
		
				// Replace image with new SVG
				$img.replaceWith($svg);
		
			}, 'xml');
		
		});
		
		
		// Table break
		var table_cell = $( '.td' );
		function Unwrap() {
		  if ( table_cell.parent().is( ".table_row" ) ) {
			table_cell.unwrap();
		  }
		}
		function Wrap() {
		  if ( table_cell.parent().is( ".table" ) ) {
			$('.footer').find('.table .td').wrap( "<div class='table_row'></div>" );
		  }
		}
		if (w_width < 768){
			Wrap();
		} else {
			Unwrap();
		}
		
		// Change messages view
		$('#change_view').on('click', function(){
			//console.log('bla');
			$('.messages_out').find('.hidden-xs').toggleClass('hidden-sm hidden-md hidden-lg');
			$(this).text(function(i, text){
				return text === "תצוגה מורחבת" ? "תצוגה מצומצמת" : "תצוגה מורחבת";
			})
		});
		
		/* Select Options Colorizing 
		$('select.selectBox').on('change', function(ev) {
			$(this).attr('class', '').addClass($(this).children(':selected').val());
		});
		*/
		
		
		/* End function on load */		
		//onPageLoadOrResize();
    }


    function onPageLoadOrResize () {
		// functions for window resize
		var w_height = viewportSize.getHeight();
		var w_width = viewportSize.getWidth();
		
		
		
    }

})(jQuery);









