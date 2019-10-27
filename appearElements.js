$(document).ready(function(){
    $('.menu__hamburger').click(function(){
        $(this).css('display','none');
        $('.menu__close').css('display','flex');
        $('.menu__list').css('display','flex');
        $('.overlay').css('display','block');
    })

    $('.menu__close').click(function(){
        $(this).css('display','none');
        $('.menu__hamburger').css('display','flex');
        $('.menu__list').css('display','none');
        $('.overlay').css('display','none');
    })

    $('.dot-1').click(function(){
        $(this).css('background-color','#00a1d1');
        $('.dot-2').css('background-color','#fff');
        $('.dot-3').css('background-color','#fff');

        $('.img-1').css('z-index','-1');
        $('.img-2').css('z-index','-2');
        $('.img-3').css('z-index','-2');
    })

    $('.dot-2').click(function(){
        $(this).css('background-color','#00a1d1');
        $('.dot-1').css('background-color','#fff');
        $('.dot-3').css('background-color','#fff');

        $('.img-1').css('z-index','-2');
        $('.img-2').css('z-index','-1');
        $('.img-3').css('z-index','-2');
    })

    $('.dot-3').click(function(){
        $(this).css('background-color','#00a1d1');
        $('.dot-2').css('background-color','#fff');
        $('.dot-1').css('background-color','#fff');

        $('.img-1').css('z-index','-2');
        $('.img-2').css('z-index','-2');
        $('.img-3').css('z-index','-1');
    })
})