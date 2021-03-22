
import Masonry from 'masonry-layout';
import Fullpage from './fullpage.js'
import jQueryBridget from 'jquery-bridget';
jQueryBridget('masonry', Masonry, $);
jQueryBridget('fullpage', Fullpage, $);

$(document).ready(function() {
  var menu_popup = $('.mobile_menu-popup');
	
    

	$(".mobile_menu-triger, .mobile_menu-close").on('click',function(){
		menu_popup.slideToggle(300, function(){
			if (menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
                $(this).css('display','flex')
				$('body').addClass('body_pointer');
			}					
		});  
        $(".mobile_container").slideToggle(300)
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.mobile_menu').length){
			$('body').removeClass('body_pointer');
			menu_popup.slideUp(300);
		}
	});
  if($('#fullpage').length){
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'welcome', 'info','galery'],
        paddingTop:'126px',
        scrollOverflow: true,
        paralax:true,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        },
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection:false,
        //   scrollBar: true,
        onLeave: function(index, nextIndex, direction){
          var el = $('.intro');
          el.each(function(){
            $(this).paroller({
              factor: 0.5,
              type: 'background',
              direction: 'vertical'
            });
          });
        },
        /* We need reinitialize paroller on window resize event */
        afterResize: function() {
          var el = $('.intro');
          el.each(function(){
            $(this).paroller({
              factor: 0.5,
              type: 'background',
              direction: 'vertical'
            });
          });
        }
      });
    }
    if($('.play a').length){
      $('.play a').fancybox({
        buttons: [
          "close"
        ],
      });
    }
    $('.photo .item a,.photos .item a').fancybox({
      buttons: [
        "close"
      ],
    });
    if($('.grid').length){
      $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        isFitWidth: true,
        horizontalOrder: true,
        gutter: 10
      });
    }
  });