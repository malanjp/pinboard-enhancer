$(function(){
  $('.bookmark').each(function(){
    html = '<span><a href="#" class="quick_copy" onclick="return false">quick copy</a></span><span style="display:none;">copied!</span>';
    $(this).find('.edit_links').append(html);
  });

  $('.quick_copy').bind('click', function(){
    quick_copy = $(this);
    bookmark_link = $(this).parents('div.display').find('a.bookmark_title');
    url = bookmark_link.attr('href');
    title = bookmark_link.text();

    $.ajax({
      url: 'https://api.pinboard.in/v1/posts/add',
      data: {'url':url, 'description':title},
      dataType: 'xml',
      success: function(data){
          console.log($(data).find('result').attr('code'));
          if ($(data).find('result').attr('code') == 'done') {
            $(quick_copy).parents('div.display').find('span').toggle('slow');
          }
      }
    });
  });
});

