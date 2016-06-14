<!-- Enable Contact Divider -->
function enableContactDiv(){
  document.getElementById('F').setAttribute("style", "display: block;")
  document.getElementById('dwad').setAttribute("style", "display: none;")
}

<!-- Title FadeIn Animation -->
function fadeTitleIn(){
    $( "#whatSnapTitle" ).fadeIn( "slow",
      function ()
        {
    $( "#commentTitle" ).fadeIn( "fast");
        }
    )
}
//Chat Animation
function fadeMessageIn(){
  $( "#stego" ).fadeIn( "fast" );
}
