$('.controls .buttons').click(function(){

    $(this).addClass('button-active').siblings().removeClass('button-active');

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.dish .image').show(400);
    }else{
        $('.dish .image').not('.'+filter).hide(200);
        $('.dish .image').filter('.'+filter).show(400);
    }

});
