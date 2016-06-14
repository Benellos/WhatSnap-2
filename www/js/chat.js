angular.module('chatModule', ['ionic', 'ngCordova', 'starter'])

// All this does is allow the message
// to be sent when you tap return
.directive('chat', function($timeout) {
  return {
    controller: 'Messages',
    restrict: 'E',
    templateUrl: '../templates/tab-chats.html',
    scope: {
    'returnClose': '=',
    'onReturn': '&',
    'onFocus': '&',
    'onBlur': '&'
  },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})


.controller('Messages', ['$scope', '$timeout', '$ionicScrollDelegate', '$cordovaImagePicker',function($scope, $timeout, $ionicScrollDelegate, $cordovaImagePicker) {
  $scope.hideTime = true;

  var alternate,
    isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    console.log("Nachricht gesendet!");
    alternate = !alternate;

    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    if($scope.data.message != null){
      $scope.messages.push({
        userId: alternate ? '12345' : '54321',
        text: $scope.data.message,
        time: d,
        picture: '../img/test.png'
      });
    }


    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);
  };

    $scope.getImageSaveContact = function() {
        // Image picker will load images according to these settings
        var options = {
            maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
            width: 800,
            height: 800,
            quality: 80            // Higher is better
        };

      /*  console.log($cordovaImagePicker);
     $cordovaImagePicker.getPictures(options).then(function (results) {
         console.log('Image URI: ' + results[0]);   // Print image URI

    }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
    });*/
};

  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

}]);
