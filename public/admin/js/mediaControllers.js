'use strict';

/* Category Controllers */

var meanCmsMediaControllers = angular.module('meanCmsMediaControllers', []);

meanCmsMediaControllers.controller('MediaListCtrl', ['$scope', 'checkCreds', '$location', 'MediaList', '$http', 'getToken',
    function MediaListCtrl($scope, checkCreds, $location, MediaList, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        MediaList.getMediaList({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success Media list:" + JSON.stringify(response));
                    console.log("media lenght:"+ response.length);
                    $scope.hasImages = false;
                    $scope.mediaList = response;
                    if(response.length > 0){
                        $scope.hasImages = true;
                    }

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );

        $scope.mediaActiveClass = "active";
    }]);


meanCmsMediaControllers.controller('DeleteMediaCtrl', ['$scope', 'Media', '$location', '$route', '$http', 'getToken',
    function DeleteMediaCtrl($scope, Media, $location, $route, $http, getToken) {
        $scope.deleteMedia = function(id, name) {
            var doDelete = confirm("Delete " + name);
            if (doDelete === true) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
                Media.delete({id: id},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    // put wate code here
                    //$rootScope.articleSaved = true;
                    if (response.success === true) {
                        $location.path('/mediaList');
                    } else {
                        alert("Failed");
                    }

                    $route.reload();
                },
                        function error(errorResponse) {
                            console.log("Error:" + JSON.stringify(errorResponse));
                        }
                );

            }


        };
    }]);

/*
 meanCmsMediaControllers.controller('MediaAddCtrl', ['$scope', 'MediaUpload', '$location', '$http', 'getToken',
 function MediaAddCtrl($scope, MediaUpload, $location, $http, getToken) {
 $scope.submit = function() {            
 
 var postData = {                    
 "name": $scope.name,
 "uploadKey": $scope.uploadKey,
 "username" : $scope.username,
 "errorLink" : $scope.errorLink,
 "returnLink": $scope.returnLink,
 "file" : $scope.file
 };
 console.log("json request:" + JSON.stringify(postData));
 $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
 MediaUpload.addMedia({}, postData,
 function success(response) {                            
 console.log("Success:" + JSON.stringify(response));
 if (response.success === true) {
 // set cookie
 //setCreds($scope.username, $scope.password);
 //$location.path('/');
 console.log("Success:" + JSON.stringify(response));
 $location.path('/mediaList');
 } else {
 //$location.path('/loginFailedForm');
 console.log("Failed:" + JSON.stringify(response));
 }
 },
 function error(errorResponse) {
 console.log("Error:" + JSON.stringify(errorResponse));
 //$location.path('/loginFailedForm');
 $location.path('/mediaList');
 }
 );
 
 
 //$location.path('/articles');
 };
 
 }]);
 */
meanCmsMediaControllers.controller('NewMediaCtrl', ['$scope', 'checkCreds', '$location', "ArticleValues", '$http', 'getToken',
    function NewMediaCtrl($scope, checkCreds, $location, ArticleValues, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }
        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var postData = {
            "languageCode": "en-us"
        };
        var siteUrl = $location.absUrl();
        var url = $location.url();
        siteUrl = siteUrl.replace(url, "");
        ArticleValues.getValues({}, postData,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));

                    $scope.uploadKey = response.uploadKey;
                    $scope.errorUrl = siteUrl;
                    $scope.mediaUrl = siteUrl +"/mediaList";
                    $scope.username = response.username;
                    $scope.api = "../../rs/media/upload";

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );


        $scope.newMediaActiveClass = "active";

    }]);


meanCmsMediaControllers.controller('MediaCtrl', ['$scope', 'checkCreds', '$location', 'Media', '$routeParams', '$http', 'getToken',
    function MediaCtrl($scope, checkCreds, $location, Media, $routeParams, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var mediaId = $routeParams.a;
        //$scope.link = $routeParams.link;
        //$scope.name = $routeParams.name;

        Media.get({id: mediaId},
        function success(response) {
            //alert($scope.challenge.question);
            console.log("Success:" + JSON.stringify(response));

            $scope.mediaId = response.id;
            $scope.name = response.name;
            $scope.imageLink = response.imageLink;
            $scope.imageType = response.extension;


        },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );


    }]);

meanCmsMediaControllers.controller('MediaEditCtrl', ['$scope', 'Media', '$location', '$http', 'getToken',
    function MediaEditCtrl($scope, Media, $location, $http, getToken) {
        $scope.submit = function() {

            var putData = {
                "id": $scope.mediaId,
                "name": $scope.name
            };
            console.log("json request:" + JSON.stringify(putData));
            $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
            Media.update({}, putData,
                    function success(response) {
                        //alert($scope.challenge.question);
                        console.log("Success:" + JSON.stringify(response));
                        if (response.success === true) {
                            // set cookie
                            //setCreds($scope.username, $scope.password);
                            //$location.path('/');
                            console.log("Success:" + JSON.stringify(response));
                            $location.path('/mediaList');
                        } else {
                            //$location.path('/loginFailedForm');
                            console.log("Failed:" + JSON.stringify(response));
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                        //$location.path('/loginFailedForm');
                        $location.path('/mediaList');
                    }
            );

        };

    }]);