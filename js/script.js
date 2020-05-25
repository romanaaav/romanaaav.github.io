$(document).ready(function() {

    $('.about-section').waypoint(function(direction) {
        if(direction === 'down') {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');
    
        }
    }, {
        offset: '100px'
    })
});