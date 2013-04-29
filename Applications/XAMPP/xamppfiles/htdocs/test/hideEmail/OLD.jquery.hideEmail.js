/**
 * Hide Email plugin for jQuery
 * v1.0
 * Transforms a link like <a data-email="account,domain.com" href="#"></a> into <a href="mailto:account@domain.com">account@domain.com</a> so it hopefully confuses spambots.
 *
 * By Cesar Chas, respirainternet.com
 *
 * Use and abuse at your own risk.
 * 
 * Based on Craig Buckler's article at SitePoint, http://www.sitepoint.com/how-to-develop-a-jquery-plugin/
 */

/**
 * Usage:
 *
 * From JavaScript, use:
 *     $(<select>).hideEmail({separator: ",", attribute: "data-email"});
 *     where:
 *       <select> is the DOM node selector, e.g. "a"
 *       "," is the string used as a substitute of the @ (optional)
 *       "data-email" is the name of the data attribute that contains the email account (optional)
 *
 */

(function($) {

	// jQuery plugin definition
	$.fn.hideEmail = function(params) {
		
		var email = '';
		
		// merge default and user parameters
		var params = $.extend( {separator: ",", attribute: "data-email"}, params);

		// traverse all nodes
		this.each(function() {
			
			email = $(this).attr(params.attribute).replace(params.separator,'@');
			$(this).attr('href','mailto:'+email).text(email);

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);