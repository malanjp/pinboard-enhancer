$(function(){
  $('.bookmark').each(function(){
    var html = '&nbsp;<span><a href="#" class="quick_copy" onclick="return false">quick copy</a></span><span style="display:none;">copied!</span>';
    $(this).find('.edit_links').append(html);
  });

  $('.quick_copy').bind('click', function(){
    var quick_copy = $(this);
    var bookmark_link = $(this).parents('div.display').find('a.bookmark_title');
    var url = bookmark_link.attr('href');
    var title = bookmark_link.text();

    blink = setInterval(function() {
      quick_copy.is(":hidden") ? quick_copy.fadeIn() : quick_copy.fadeOut();
    }, 500);

    $.ajax({
      url: 'https://api.pinboard.in/v1/posts/add',
      data: {'url':url, 'description':title},
      dataType: 'xml',
      success: function(data){
          if ($(data).find('result').attr('code') == 'done') {
            $(quick_copy).parents('div.display').find('span').toggle('slow');
          }
          clearInterval(blink);
      }
    });
  });
});

