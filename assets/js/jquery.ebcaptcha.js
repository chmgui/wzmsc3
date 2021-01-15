(function($){

	jQuery.fn.ebcaptcha = function(options){

		var element = this; 
		var submit = $(this).find('div[id="submit-contact-form"]');
		$('<div class="col-lg-4" style="text-align:right;"><label id="ebcaptchatext"></label></div>').insertBefore(submit);
		$('<div class="col-lg-4"><input type="text"  id="ebcaptchainput" placeholder="Enter answer here*"/></div>').insertBefore(submit);
		var input = this.find('#ebcaptchainput'); 
		var label = this.find('#ebcaptchatext'); 
		
		$(element).find('input[type=submit]').attr('disabled','disabled'); 

		var randomNr1 = 0; 
		var randomNr2 = 0;
		var totalNr = 0;


		randomNr1 = Math.floor(Math.random()*10);
		randomNr2 = Math.floor(Math.random()*10);
		totalNr = randomNr1 + randomNr2;
		var texti = "What is "+randomNr1+" + "+randomNr2+" ?";
		$(label).text(texti);
		
	
		$(input).keyup(function(){

			var nr = $(this).val();
			if(nr==totalNr)
			{
				$(element).find('input[type=submit]').removeAttr('disabled');				
			}
			else{
				$(element).find('input[type=submit]').attr('disabled','disabled');
			}
			
		});

		$(document).keypress(function(e)
		{
			if(e.which==13)
			{
				if((element).find('input[type=submit]').is(':disabled')==true)
				{
					e.preventDefault();
					return false;
				}
			}

		});

	};

})(jQuery);