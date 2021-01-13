var myCaptcha = new jCaptcha({

    // set callback function
    callback: function(response, $captchaInputElement) {

        if (response == 'success') {

            $captchaInputElement[0].classList.remove('error');
            $captchaInputElement[0].classList.add('success');
            $captchaInputElement[0].placeholder = 'Submit successful!';

        }

        if (response == 'error') {

            $captchaInputElement[0].classList.remove('success');
            $captchaInputElement[0].classList.add('error');
            $captchaInputElement[0].placeholder = 'Please try again!';

        }

    }

});
document.querySelector('contact-page').addEventListener('submit', function(e) {

  e.preventDefault();

  // captcha validate
  myCaptcha.validate();

});

$(function(){
    $('#contact-page').ebcaptcha();
});
