$(document).ready(function() {

  $('form').submit(function(evt){
    evt.preventDefault();
    //PREVENTS PAGE FROM REDIRECTING AFTER SUBMIT.

    var $searchResult = $('#search').val();
    //STORES SEARCH RESULT VARIABLE.

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //THE jsoncallback=? AT THE END IS THE PADDING FOR .jsonp

    var flickerOptions = {
      tags: $searchResult,//SEARCHES CATAGORY TAGS FROM SEARCH RESULT.
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '<legend>Search results for <b>'+ $searchResult + '</b>:</legend>';

      //data.items IS THE OBJECT OR ARRAY; index IS THE INDEX NUMBER OF THAT ARRAY; photo IS THE PARAMATER THAT IS TO BE DISPLAYED.
      $.each(data.items, function(index, photo) {
        photoHTML += '<li class="col-lg-3 col-md-3 col-sm-3">';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '" alt="Image" class="img-thumbnail">';
        photoHTML += '</a>';
        photoHTML += '</li>';
      });
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);

  });



}); //END JQUERY
