angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ChatCtrl', function($scope, Chats) {
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
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('BlogCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('InstagramCtrl', function($scope) {})

.controller('ContactUsCtrl', function($scope) {})

.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
    }
])
    .controller('InstagramCtrl', function($scope) {});