$('document').ready(function() {
  $('#search-bar').on('input', function(e) {
    var term = $(this).val();
    $('article').show();
    if (term.length > 0) {
      for (var id in id_to_keywords) {
        value = id_to_keywords[id];
        if (!value.toUpperCase().includes(term.toUpperCase())) {
          $('#' + id).hide();
        }
      }
    }
  });

  function createSearchIndex() {
    var id_to_keywords = {};
    $('article').each((i, el) => {
      var id = 'article' + i;
      el = $(el);
      el.attr('id', id);
      keywords = el.find('h2').html() + el.find('.tags a').html();
      id_to_keywords[id] = keywords
    });

    console.log('Populated search index: ');
    console.log(id_to_keywords);
    return id_to_keywords;
  }
  
  var id_to_keywords = createSearchIndex();

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('s')) {
    $('#search-bar').val(urlParams.get('s'));
    $('#search-bar').trigger('input');
  }
});
