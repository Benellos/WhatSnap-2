angular.module('starter.controllers', ['ngCordova'])


.controller('DashCtrl', function($scope) {
  var scope = this;
  scope.hidden = false;
  fadeTitleIn();
})
.controller('KontakteCtrl', function($scope, $ionicPopup,  $cordovaBarcodeScanner) {

  $scope.showConfirmContact = function() {

         var confirmPopup = $ionicPopup.confirm({
            title: '<b>Bestätigung</b>',
            template: '<center>Möchtest du einen Barcode scannen oder deinen anzeigen lassen?</center>',
            cancelText: "Barcode anzeigen",
            okText: "Barcode scannen!"
         });

         confirmPopup.then(function(res) {
            if(res) {
              $cordovaBarcodeScanner.scan().then(function(imageData) {
                  alert(imageData.text);
              }, function(error) {
                  console.log("An error happened -> " + error);
              });
            } else {
               console.log('Show');
            }
         });

      };
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('GroupsCtrl', function($scope) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.settings = {
    enableFriends: true,
    enableEncryption: true
  };
  $("#whatSnapProfilbild").on("click", function()
  {
  }
)
$scope.showConfirm = function() {

      var confirmPopup = $ionicPopup.confirm({
         title: '<b>Bestätigung</b>',
         template: '<center>Willst du die Daten, wie angegeben, speichern?</center>',
         cancelText: "Abbrechen",
         okText: "Ja!"
      });

      confirmPopup.then(function(res) {
         if(res) {
            console.log('Ja!');
         } else {
            console.log('Abbrechen');
         }
      });

};
});
