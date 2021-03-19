
$(document).ready(function() {
  $('#fullpage').fullpage({
      anchors: ['firstPage', 'welcome', 'info','galery'],
      paddingTop:'126px',
      scrollOverflow: true,
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
    $('.play a').fancybox({
        
      });
    $('.photo .item a').fancybox({
      
    });
  });