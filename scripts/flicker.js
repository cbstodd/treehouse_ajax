$(document).ready(function() {
  //ADDS AND REMOVES ACTIVE CLASS TO BUTTONS WHEN CLICKED.
  $('button').click(function() {
    $('button').removeClass('active');
    $(this).addClass('active');
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //THE jsoncallback=? AT THE END IS THE PADDING FOR .jsonp
    var animal = $(this).text(); //STORES THE VALUE OF THE BUTTON'S CATAGORY THAT IS SELECTED I.E. DOG.
    var flickerOptions = {
      tags: animal,
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = '';
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
