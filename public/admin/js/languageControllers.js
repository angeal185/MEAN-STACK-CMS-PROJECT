'use strict';

/* Category Controllers */

var meanCmsLanguageControllers = angular.module('meanCmsLanguageControllers', []);

meanCmsLanguageControllers.controller('LanguagesCtrl', ['$scope', 'checkCreds', '$location', 'LanguageList', '$http', 'getToken',
    function LanguagesCtrl($scope, checkCreds, $location, LanguageList, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        LanguageList.getLanguageList({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));

                    $scope.languageList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );

        $scope.languageActiveClass = "active";
    }]);


meanCmsLanguageControllers.controller('DeleteLanguageCtrl', ['$scope', 'Language', '$location', '$route', '$http', 'getToken',
    function DeleteLanguageCtrl($scope, Language, $location, $route, $http, getToken) {
        $scope.deleteLanguage = function(id, name) {
            var doDelete = confirm("Delete " + name);
            if (doDelete === true) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
                Language.delete({id: id},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    if (response.success === true) {
                        $location.path('/languages');
                    } else {
                        alert("Failed");
                    }

                    $route.reload();
                },
                        function error(errorResponse) {
                            console.log("Error:" + JSON.stringify(errorResponse));
                            alert("Failed");
                        }
                );

            }


        };
    }]);



meanCmsLanguageControllers.controller('LanguageAddCtrl', ['$scope', 'Language', '$location', '$http', 'getToken',
    function LanguageAddCtrl($scope, Language, $location, $http, getToken) {
        $scope.submit = function() {
            
            var defaultLanguage = false;
            var defaultLan = $scope.defaultLanguage;
            if(defaultLan === "true"){
                defaultLanguage = true;
            }

            var postData = {
                "name": $scope.name,
                "code": $scope.code,
                "defaultLanguage" : defaultLanguage
            };
            console.log("json request:" + JSON.stringify(postData));
            $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
            Language.save({}, postData,
                    function success(response) {
                        console.log("Success:" + JSON.stringify(response));
                        if (response.success === true) {
                            // set cookie
                            //setCreds($scope.username, $scope.password);
                            //$location.path('/');
                            console.log("Success:" + JSON.stringify(response));
                            $location.path('/languages');
                        } else {
                            //$location.path('/loginFailedForm');
                            console.log("Failed:" + JSON.stringify(response));
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                        //$location.path('/loginFailedForm');
                        $location.path('/languages');
                    }
            );


            //$location.path('/articles');
        };

    }]);

meanCmsLanguageControllers.controller('NewLanguageCtrl', ['$scope', 'checkCreds', '$location', '$http', 'getToken',
    function NewLanguageCtrl($scope, checkCreds, $location, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }
        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        $scope.defaultLanguage = "false";


        $scope.newLanguageActiveClass = "active";

    }]);




meanCmsLanguageControllers.controller('LanguageEditCtrl', ['$scope', 'Language', '$location', '$http', 'getToken',
    function LanguageEditCtrl($scope, Language, $location, $http, getToken) {
        $scope.submit = function() {
            var defaultLanguage = false;
            var defaultLan = $scope.defaultLanguage;
            if(defaultLan === "true"){
                defaultLanguage = true;
            }

            var putData = {
                "id": $scope.languageId,
                "name": $scope.name,
                "code": $scope.code,
                "defaultLanguage" : defaultLanguage
            };
            console.log("json request:" + JSON.stringify(putData));
            $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
            Language.update({}, putData,
                    function success(response) {
                        //alert($scope.challenge.question);
                        console.log("Success:" + JSON.stringify(response));
                        if (response.success === true) {
                            // set cookie
                            //setCreds($scope.username, $scope.password);
                            //$location.path('/');
                            console.log("Success:" + JSON.stringify(response));
                            $location.path('/languages');
                        } else {
                            //$location.path('/loginFailedForm');
                            console.log("Failed:" + JSON.stringify(response));
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                        //$location.path('/loginFailedForm');
                        $location.path('/languages');
                    }
            );

        };

    }]);


meanCmsLanguageControllers.controller('LanguageCtrl', ['$scope', 'checkCreds', '$location', "Language", '$routeParams', '$http', 'getToken',
    function LanguageCtrl($scope, checkCreds, $location, Language, $routeParams, $http, getToken) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var languageId = $routeParams.a;
        Language.get({id: languageId},
        function success(response) {
            //alert($scope.challenge.question);
            console.log("Success:" + JSON.stringify(response));

            $scope.languageId = response._id;
            $scope.name = response.name;
            $scope.code = response.code;
            $scope.defaultLanguage = response.defaultLanguage.toString();

        },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );

        $scope.languageActiveClass = "active";
    }]);



