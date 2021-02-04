$(document).ready(function(){
	/*풀페이지*/
	$('#fullpage').fullpage({
		navigation:true,
		navigationTooltips:['MAIN','ROOMS','EVENT&NOTICE','ART GALLERY','SIGNATURE','INFO'],
		anchors:['mainSlider'],
    });
	
	//panel
    $(".panelWrap").hide();
    
    $(".panel").click(function(){
        $(".panelWrap").fadeIn();
        $(".panelMenu").css("width","300px");
    })
    
    $(".panelBg,.close").click(function(){
        $(".panelWrap").fadeOut();
        $(".panelMenu").css("width","0");
    })
	
	//아코디언메뉴
    $(".sMenu").hide();
    
    $(".acodianMenu>li>a").click(function(e){
        e.preventDefault();
        
        $(this).siblings().slideToggle().parent().siblings().find(".sMenu").slideUp();
        
        $(this).toggleClass("on").parent().siblings().find("a").removeClass("on");
    })
	
	/*수량버튼*/

	$('.reservation li').find('#plus').each(function(){
        $(this).click(function(){
            var stat = $(this).siblings('span').text();
			var num = parseInt(stat,10);
			num++;
			if(num>=5){
				alert('최대입니다.');
				num =5;
			}
			$(this).siblings('span').text(num);
        })
    })
    
    $('.reservation li').find('#minus').each(function(){
        $(this).click(function(){
            var stat = $(this).siblings('span').text();
			var num = parseInt(stat,10);
			num--;
			if(num<=0){
				alert('최소입니다.');
				num =1;
			}
			$(this).siblings('span').text(num);
        })
    })
	
	/*컨텐츠01슬라이더*/
	$(".con01Slider").slick({
        dots:true,
		arrows:false,
		infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
	
})