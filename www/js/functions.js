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

function fadeTitleOut(){
  $( "#whatSnapTitle" ).fadeOut( "slow",
    function ()
      {
  $( "#commentTitle" ).fadeOut("slow", function(){
    $("#whatSnapWelcome").fadeIn("slow", function(){
      $("#whatSnapLogo").fadeOut("fast", function(){
        $(".startText").fadeIn("slow");
      });
    });
  });
      }
  )
}
