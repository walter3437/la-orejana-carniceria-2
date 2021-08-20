$(document).ready(function(){
    var ItemSlide = $('.slider-item').length;
    var ItemNav = 1;

    for(i = 1; i <= ItemSlide; i++){
            $('.slider-navegador').append('<li class="navegador-item"><i class="ico ico-rec"></i></li>');
    }

    $('.slider-item').hide();
    $('.slider-item:first').show();
    $('.navegador-item:first').css({'color': '#e6e6e6', 'background-color': '#640000'});

    $('.navegador-item').click(slide);
    $('.slider-previus i').click(PrevSlide);
    $('.slider-next i').click(NextSlide);

    setInterval(function(){
        NextSlide()
    }, 4000);

    function slide(){
        var SlideNav = $(this).index() + 1;

        $('.slider-item').hide();
        $('.slider-item:nth-child('+ SlideNav +')').fadeIn();

        $('.navegador-item').css({'color': '#000000', 'background-color': '#e6e6e6'});
        $(this).css({'color': '#e6e6e6', 'background-color': '#640000'});

        
    }

    function PrevSlide(){
        if( ItemNav <= 1){
            ItemNav = ItemSlide;
        } else {
            ItemNav--;
        }

        $('.navegador-item').css({'color': '#000000', 'background-color': '#e6e6e6'});
        $('.navegador-item:nth-child('+ ItemNav +')').css({'color': '#e6e6e6', 'background-color': '#640000'});

        $('.slider-item').hide();
        $('.slider-item:nth-child('+ ItemNav +')').fadeIn();

    }

    function NextSlide(){
        if( ItemNav >= ItemSlide){
            ItemNav = 1;
        } else {
            ItemNav++;
        }

        $('.navegador-item').css({'color': '#000000', 'background-color': '#e6e6e6'});
        $('.navegador-item:nth-child('+ ItemNav +')').css({'color': '#e6e6e6', 'background-color': '#640000'});

        $('.slider-item').hide();
        $('.slider-item:nth-child('+ ItemNav +')').fadeIn();

    }

});