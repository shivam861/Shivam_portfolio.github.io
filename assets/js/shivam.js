

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



$(document).ready(function() {
    $("#contactButton").on("click", redirectToEmail);
});

function redirectToEmail() {

    const email = "shivamyadavme7@gmail.com";
    
   
    const mailtoUrl = `mailto:${email}`;

    window.open(mailtoUrl);

    // console.log("enter");
};



