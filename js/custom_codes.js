var element = document.getElementsByClassName("uk-slideshow");

if(element.length > 0)
{
    var sticky = UIkit.slideshow(element[0], {
        animation: 'fade',
        autoplay: true,
        ratio: '7:3',
        maxHeight: 400,
        pauseOnHover: false,
        autoplayInterval: 5000
    });
    // UIkit.slideshow(sticky).startAutoplay();
}