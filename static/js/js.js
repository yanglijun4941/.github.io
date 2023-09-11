//--
fontSize();
$(window).resize(function(){
	fontSize();
	});
function fontSize(){
	var size;
	var winW=$(window).width();
	if(winW<=1680 && winW>800){
		size=Math.round(winW/16.8);
	}else if(winW<=800){
		size=Math.round(winW/7.5);
		if(size>65){
			size=65;
			}
	}else{
		size=100;
		}
	$('html').css({
		'font-size':size+'px'
		})
	}

$(function(){
	$(window).scroll(function (){ 
		if ($(window).scrollTop() > 0){ 
			$(".headDiv").fadeOut(200); 
			$(".header").fadeIn(200);
		} 
		else { 
		$(".headDiv").fadeIn(200);
		$(".header").fadeOut(200); 
		} 
	});
	if ($(window).scrollTop() > 0){ 
		$(".headDiv").fadeOut(200); 
		$(".header").fadeIn(200);
	}
	//--
//	$('.headDiv .btnDiv').click(
//	   function(){
//		   $('.zzNav').addClass('on');
//		   },
//	   function(){
//		   
//		   }
//	)
	//--
	$('.headDiv .btnDiv').click(function(){
		$(".headDiv").fadeOut(200); 
		$(".header").fadeIn(200);
	})
	//--
//	$('.zzNav').hover(
//	   function(){
//		   $(this).show();
//		   },
//	   function(){
//		   $('.zzNav').removeClass('on');
//		   }
//	)
	//--	
	$('.header .wal').each(function(i){
		function showNav(selectObj) {	//展开效果
			selectObj.children(".secondBox").slideDown(400);

		}  
		function hideNav(selectObj){    //关闭效果
			selectObj.children(".secondBox").slideUp(400);

		}
		function hideAllNav(){
			$('.header .secondBox').slideUp(400);
		};

		$(this).children('.nav2').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showNav(selectObj):hideNav(selectObj);
		});
		$("body").click(function(i){ 
			!$(i.target).parents(".header .wal").first().is($(".header .wal")) ? hideAllNav():"";
		});

	});
	//--
	$('.headDiv').find('.topSearch').each(function(i){
		$(this).hover(
		  function(){
			  $('.headDiv').find('.topSearch').addClass('on');
			  },
		  function(){
			  $('.headDiv').find('.topSearch').removeClass('on');
			  }
		)
		})
	//--
	$('.sNavA').each(function (i) {
        $(this).hover(
		   function () {
			   $('.sNav').eq(i).css('left',$(this).offset().left-10);
		       $('.sNav').eq(i).addClass('on');
		   },
		   function () {
			   $('.sNavA').eq(i).removeClass('aNow1');
		       $('.sNav').removeClass('on');
		   }
		)
    })
    //--
    $('.sNav').each(function (i) {
        $(this).hover(
		   function () {
		       $('.sNavA').eq(i).addClass('aNow1');
		       $(this).addClass('on');
		   },
		   function () {
		       $('.sNavA').removeClass('aNow1');
		       $(this).removeClass('on');
		   }
		)
	})
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').find('li:first').addClass('liNow');
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--
	$('.tabContentDiv2').find('.tabContent2:first').show();
	$('.tab2').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				$('.tab2').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv2').eq(i).find('.tabContent2').hide();
				$('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).addClass('on');
				$('.tabContentDiv2').eq(i).find('.tabContent2').eq(ii).show();
				}
				)
			})
		})
	//--
	$('.tab3').find('li').each(function(i){
		$(this).click(function(){
			if($(this).hasClass('liNow')){
				$('.tab3').find('li').removeClass('liNow');
				$('.tabContent3').slideUp(300);
				}else{
					$('.tab3').find('li').removeClass('liNow');
					$('.tabContent3').slideUp(300);
					$(this).addClass('liNow');
					$('.tabContent3').eq(i).slideDown(300);
					}
			})
		})
	
	$('.indexPart1').find('.rightDiv').find('li').find('.box').hover(
	   function(){
	   		$(this).addClass('cur');
		    $(this).find('video').trigger("play");
		   },
	   function(){
	   		$(this).removeClass('cur');
		    $(this).find('video').trigger("load");
		   }
	)
	//--
	if($('.topA').length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>500){
				$('.topA').fadeIn(200);
				}else{
					$('.topA').fadeOut(200);
					}
			})
		}
	//--
	$('.topA').click(function(){
		$('body,html').animate({scrollTop: 0}, 500);
		})
	//--
	$('.navIco').click(function(){
		$('.navLayer').animate({right: "0",width:"100%"}, 500);
		})
	$('.navLayer').find('.closeBtn').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 500);
		$('.navLayer').find('a').removeClass('aNow');
		$('.navLayer').find('.list').hide();
		})
	//--
	$(".subNav1").click(function(){
		$(this).toggleClass("currentDt").siblings(".subNav1").removeClass("currentDt")
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
	})
	//--
	$(".educate").find('.list').find('li:odd').addClass('li01');
	//--
	if ($(window).width() < 1024) {
	    $('.newShow .content').find('img').css('width', '100%');
	    $('.newShow .content').find('img').css('height', 'auto');
 		$('.newShow .content').find('input').css('width', '100%');
	    $('.newShow .content').find('input').css('height', 'auto');
	   
	}
	//--
	$('.service .videobox .playbox').click(function(){
        var s = $(this).closest('.videobox').attr('vsrc');
        $(this).closest('.videobox').find('video').attr('src', s);
        $(this).closest('.videobox').addClass('cur');
        $(this).closest('.videobox').find('video')[0].play();
        $(this).closest('.videobox').siblings().removeClass('cur');
    })
    //--
	$('.formLayer').find('.multiple').each(function(i){
		$(this).find('li').click(function(){
			if($(this).hasClass('liNow')){
				$(this).removeClass('liNow');
				}else{
					$(this).addClass('liNow');
					}
			})
		})
	//--
	$('.chooseDiv').find('.bigBox').find('.liebiao').each(function(i){
		$(this).find('a').click(function(){
			if($(this).hasClass('aNow')){
				$(".chooseDiv").find('.liebiao').eq(i).find('li').find('a').removeClass('aNow');
				}else{
					$(".chooseDiv").find('.liebiao').eq(i).find('li').find('a').removeClass('aNow');
					$(this).addClass('aNow');
					}
			})
		})
	//--手机二级导航下拉
	$('.sideTitleTel').each(function(i){
		function showNav(selectObj) {	//展开效果
			$('.sideTitleTel').children(".sideTitleNav").slideUp(200);
			selectObj.children(".sideTitleNav").slideDown(200);
			selectObj.find('.con').addClass('on');
		}  
		function hideNav(selectObj){    //关闭效果
			selectObj.children(".sideTitleNav").slideUp(200);
			selectObj.find('.con').removeClass('on');
		}
		function hideAllNav(){
			$('.sideTitleTel .sideTitleNav').slideUp(200);
			$('.sideTitleTel').find('.con').removeClass('on');
		};

		$(this).children('.con').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showNav(selectObj):hideNav(selectObj);
		});
		$("body").click(function(i){ 
			!$(i.target).parents(".sideTitleTel").first().is($(".sideTitleTel")) ? hideAllNav():"";
		});

	});
	//--
	$('.sideTitleNav li.has-nav3').click(function(){
		if(!$(this).hasClass('on')){
			$('.sideTitleNav dl').slideUp();
			$('.sideTitleNav li.nav3').removeClass('on');
			$(this).children('dl').slideDown();
			$('.sideTitleNav li.has-nav3').removeClass('on');
			$(this).addClass('on');
		}else{
			$('.sideTitleNav dl').slideUp();
			$(this).removeClass('on');
		}


	});
	//下拉通用
	$('.select').each(function(i){
		function showFn(selectObj) {	//展开效果
			// 把其他的下拉收起
			$('.select').children("dd").slideUp(200);
			selectObj.children("dd").slideDown(200);
			selectObj.addClass('on');
		}  
		function hideFn(selectObj){    //关闭效果
			selectObj.children("dd").slideUp(200);
			selectObj.removeClass('on');
		}
		function hideAll(){
			$('.select dd').slideUp(200);
		};

		$(this).children('dt').click(function(){
			var index = $(this).parent().index();
			var selectObj = $(this).parent();
			$(this).next().is(":hidden")?showFn(selectObj):hideFn(selectObj);
		});
		// $(this).children('dd').find("li").click(function(){   
		// 	var index = $(this).closest('.select').index();
		// 	var dataId=$(this).attr('data-id');
		// 	var selectObj = $(this).closest('.select');
		// 	$(this).closest('.select').children("dt").find('a').html($(this).html());
		// 	$(this).closest('.select').children("dt").find('a').attr('data-id',dataId);
		// 	hideFn(selectObj);
		// });
		$("body").click(function(i){ 
			!$(i.target).parents(".select").first().is($(".select")) ? hideAll():"";
		});

	});
	//--
	$(function( ) {
		setInterval(function(){
			if($(".animated-circles").hasClass("animated")){
				$(".animated-circles").removeClass("animated");
			}else{
				$(".animated-circles").addClass('animated');
			}
		},3000);
	});
})

function childToggle(obj){
	var index = $(obj).closest('.select').index();
	var dataId=$(obj).attr('data-id');
	var selectObj = $(obj).closest('.select');
	$(obj).closest('.select').children("dt").find('a').html($(obj).html());
	$(obj).closest('.select').children("dt").find('a').attr('data-id',dataId);
	selectObj.children("dd").slideUp(200);
	selectObj.removeClass('on');
}	

$(function(){
    if ($(".wow").length) {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 50,
                mobile: true,
                live: true

            });
            wow.init();
        };
    }
   
})

function searchToggle(){
    $(".search-form").slideToggle(500)
}