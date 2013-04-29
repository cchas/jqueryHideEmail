/*!
 * jQuery lightweight Email Obfuscation plugin
 * Original author: César Chas (http://respirainternet.com)
 * Further changes, comments: César Chas
 * Licensed under the MIT license. Use and Abuse :D
 * 
   INTENT:
	Dead simple method to prevent SPAMbots from reading email accounts 
	from your website. Since most SPAMbots cannot read Javascript, they 
	won´t be able to read your email accounts.

 * WHAT IT DOES:
 	This plugin transforms links like 
 	<a class="email" data-email="account,domain.com" href="#">account@domain.com</a> 
 	into 
 	<a mailto:"account@domain.com" href="#">account@domain.com</a>
	
	Thefore, you can write html links like above and let JQuery transform
	them into linkable mailto anchors.

	* RECOMMENDATIONS:
	We higly reccomend to change the defaults for your own

	* USAGE
		1.- Include the latest Jquery version
		2.- Include jquery.hideEmail.js or jquery.hideEmail.min.js after
			the Jquery inclusion
		3.- Activate the plugin in your code, with something like:
			
			<script>
				//With default settings (not recommended) 
				$(function(){
					$('a[data-email]').hideEmail();
				});
				
			</script>
			

			OR
			<script>
				//With custom settings (recommended) 
				$('a[data-email]').hideEmail({
					attr: 'data-email',
					sep: ','
				});
			</script>
		
 */


;(function($){

	var defaults = {
		attr: 'data-email', // the name of the html data attribute containing the obfuscated email
		sep: ',', // the separator between account and domain
	}

	$.fn.hideEmail = function(options){

		// settings
		var config = $.extend({}, defaults, options);
		
		var email = '',
			title = '';

		$('a[' + config.attr + ']').each(function(index, value) {

			title = $(this).text();
			
			// generate email account
			email = $(this)
				.attr(config.attr)
				.replace(config.sep,'@');
			
			// change text and title
			$(this)
				.attr('href','mailto:' + email)
				.attr('title', title)
				.html(email);

		});

		// allow chainability
		return $(this);

	}

}(jQuery));
