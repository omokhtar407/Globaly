// For Nav Links
$('.links li , .toggle li').click(function(){
    $(this).find('a').addClass('link-active');
    $(this).siblings().find('a').removeClass('link-active');
    $('.toggle').slideUp(200);
});
$('.toggle-menu').click(function(){
    $('.toggle').slideToggle(500)
})
/*Start Nav Bar */
let navOffset = $('.header-container').offset().top;
    console.log(navOffset)
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    console.log(wScroll)
    if(wScroll > navOffset){
        $('.header-container').css({"backgroundColor":"#fff","position" : "fixed" ,"top" :"0px"});
    }
    else{
        $('.header-container').css({ "position" : "relative"});
    }
})
/*End Nav Bar */

/*Go for Sections with Smooth scroll */
$("a[href^= '#']").click(function(e){
    let aHref = $(e.target).attr('href');
    let secOffset = $(aHref).offset().top;
    $('body , html').animate({scrollTop:secOffset} , 1200);
})
/* End */

/* For button toTop */ 
let Services = $('#Services').offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > Services - 700){
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#btnUp').fadeOut(500);
    }
})

$('#btnUp').click(function(){   
    $('body , html').animate({scrollTop:0} , 1500);
})
/* End button toTop */

// for Loading
$(document).ready(function(){
    $('.lds-ripple').fadeOut(2000, () => {
        $('.lds-ripple').parent().fadeOut(3000 , () => {
            $('.loading').remove();
            $('body').css("overflow-y" , "auto");
        })
    });
    $('.owl').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:2000,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
})
// /* Form Validation */
let userNameInput = document.getElementById('userName'); 
let userEmailInput = document.getElementById('userEmail'); 
let Btn = document.getElementById('btnSubmit');

// // User Name
function validateUserName(){
    let regex = /^([A-z ]{3,15})$/;
    
    if(regex.test(userNameInput.value) == true){
        Btn.disabled =!1;
        return true;
    }
    else{
        Btn.disabled =!0;
        return false;
    }
}
userNameInput.addEventListener('keyup',function () {
    validateUserName();
})

//User Email
function validateUserEmail(){
    let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
    if(regex.test(userEmailInput.value) == true){
        Btn.disabled =!1;
        return true;
    }
    else{
        Btn.disabled =!0;
        return false;
    }
}
userEmailInput.addEventListener('keyup',function () {
    validateUserEmail();
})
//Submit
let Form = document.getElementById('form');
document.getElementById('Contact').addEventListener('click',function () {
    Form.addEventListener('submit',function(e){
        e.preventDefault();
    
        if(validateUserName() == true && validateUserEmail() == true){
            Btn.disabled =!1;
        }
        else{
            Btn.disabled=!0;
        }
    })
});
