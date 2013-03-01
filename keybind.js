$(function(){
  var bookmark_titles = $('.bookmark_title');
  var current_key = 0;
  var cursor = undefined;
  var max = bookmark_titles.length - 1;

  $(document).keypress(function (e) {
    var tagName = undefined;
    if ($(':focus').get(0)) {
      tagName = $(':focus').get(0).tagName;
    }

    if (tagName != 'INPUT' && tagName != 'TEXTAREA') {
      console.log(e.which);
      switch (e.which) {
        case 106: // j key
          if (cursor != undefined) {
            cursor++;
            if (cursor > max) {
              cursor = max;
            }
          } else {
            cursor = 0;
          }
          bookmark_titles[cursor].focus();
          current_key = 106;
          break;

        case 107: // k key
          cursor--;
          if (cursor < 0) {
            cursor = 0;
          }
          bookmark_titles[cursor].focus();
          current_key = 107;
          break;

        case 111: // o key
          window.open($(':focus').attr('href'), '_blank');
          break;

        case 113: // q key
          console.log($(':focus').parent().find('.quick_copy'));
          $(':focus').parent().find('.quick_copy').click();
          break;

        default:
          break
      }
    }
  });
});
