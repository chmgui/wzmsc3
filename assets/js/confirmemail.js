jQuery.fn.confirmEmailError = function(options){
    var location1 = $(this).find('div[id="insert_email_confirm_error"]');
    $('<div class="col-lg-1" style="text-align:right;">XXX</div>').insertBefore(location1);
}
jQuery.fn.confirmEmailErrorClear = function(options){
    var location1 = $(this).find('div[id="insert_email_confirm_error"]');
    $('<div class="col-lg-1" style="text-align:right;"></div>').insertBefore(location1);
}

function confirmEmail() {
        var email = document.getElementById("entry.1045781291").value
        var confemail = document.getElementById("entry.1065046570").value
        if(email != confemail) {
            
           // var location1 = $(this).find('div[id="insert_email_confirm_error"]');
           // $('<div class="col-lg-2" style="text-align:right;">NOT matching!/div>').insertBefore(location1);
           // alert( location1 );
           // console.log( location1 );
            // $('#contact-page').confirmEmailError();
            var email_conf1 = document.getElementById("email_confirm_error")
            email_conf1.textContent = "Email addresses don't match!" 
            email_conf1.style.color = "red" 

            //alert('Email Not Matching!');
        }
        else 
        {
            var email_conf1 = document.getElementById("email_confirm_error")
            email_conf1.textContent = "" 
        }
}

function confirmEmailClear() {

        var email_conf1 = document.getElementById("email_confirm_error")
        email_conf1.textContent = "" 

}

