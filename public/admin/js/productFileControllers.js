'use strict';

/* Category Controllers */

var meanCmsProductFileControllers = angular.module('meanCmsProductFileControllers', []);


meanCmsProductFileControllers.controller('ProductFilesCtrl', ['$scope', 'checkCreds', '$location', 'DownloadableFileList', '$http', 'getToken', '$routeParams', 'ArticleValues',
    function ProductFilesCtrl($scope, checkCreds, $location, DownloadableFileList, $http, getToken, $routeParams, ArticleValues) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        var productId = $routeParams.a;
        $scope.productName = $routeParams.b;

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var postData = {
            "languageCode": "en-us"
        };
        ArticleValues.getValues({}, postData,
                function success(values) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(values));
                    $scope.downloadKey = encodeURIComponent(values.uploadKey);                    
                    $scope.username = values.username;
                    $scope.downloadLink = "../../rs/downloadableFile/download";
                    DownloadableFileList.getList({productId: productId},
                    function success(response) {
                        //alert($scope.challenge.question);
                        console.log("Success:" + JSON.stringify(response));

                        $scope.productFileList = response;

                    },
                            function error(errorResponse) {
                                console.log("Error:" + JSON.stringify(errorResponse));
                                //$location.path('/loginFailedForm');
                            }
                    );

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );


        //$scope.productActiveClass = "active";
    }]);


meanCmsProductFileControllers.controller('DeleteProductFileCtrl', ['$scope', 'DownloadableFile', '$location', '$route', '$http', 'getToken',
    function DeleteProductFileCtrl($scope, DownloadableFile, $location, $route, $http, getToken) {
        $scope.deleteProductFile = function(id, name) {
            var doDelete = confirm("Delete " + name);
            if (doDelete === true) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
                DownloadableFile.delete({id: id},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    if (response.success === true) {
                        $location.path('/productFiles/' + id + "/" + name);
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






meanCmsProductFileControllers.controller('ProductFileEditCtrl', ['$scope', 'DownloadableFile', '$location', '$http', 'getToken',
    function ProductFileEditCtrl($scope, DownloadableFile, $location, $http, getToken) {
        $scope.submit = function() {

            var productId = $scope.productId;

            var putData = {
                "id": $scope.id,
                "name": $scope.name,
                "version": $scope.version
            };

            console.log("json request:" + JSON.stringify(putData));
            $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
            DownloadableFile.update({}, putData,
                    function success(response) {
                        console.log("Success:" + JSON.stringify(response));
                        if (response.success === true) {
                            // set cookie
                            //setCreds($scope.username, $scope.password);
                            //$location.path('/');
                            console.log("Success:" + JSON.stringify(response));
                            $location.path('/product/' + productId);
                        } else {
                            //$location.path('/loginFailedForm');
                            console.log("Failed:" + JSON.stringify(response));
                        }
                    },
                    function error(errorResponse) {
                        console.log("Error:" + JSON.stringify(errorResponse));
                        alert("Failed");
                        //$location.path('/loginFailedForm');
                        $location.path('/product/' + productId);
                    }
            );

        };

    }]);


meanCmsProductFileControllers.controller('ProductFileCtrl', ['$scope', 'checkCreds', '$location', "DownloadableFile", '$routeParams', '$http', 'getToken', 'ArticleValues',
    function ProductFileCtrl($scope, checkCreds, $location, DownloadableFile, $routeParams, $http, getToken, ArticleValues) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }

        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var prodId = $routeParams.a;
        DownloadableFile.get({id: prodId},
        function success(response) {
            //alert($scope.challenge.question);
            console.log("Success:" + JSON.stringify(response));

            $scope.id = response._id;
            $scope.name = response.name;
            $scope.version = response.version;
            //$scope.productName = response.product.name;
            $scope.productId = response.product;


        },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );




        //$scope.prodictActiveClass = "active";
    }]);



meanCmsProductFileControllers.controller('ProductFileUploadCtrl', ['$scope', 'checkCreds', '$location', 'ArticleValues', '$http', 'getToken', '$routeParams',
    function ProductFileUploadCtrl($scope, checkCreds, $location, ArticleValues, $http, getToken, $routeParams) {
        if (checkCreds() !== true) {
            $location.path('/loginForm');
        }
        var prodId = $routeParams.a;
        //alert(prodId);
        $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken();
        var postData = {
            "languageCode": "en-us"
        };
        ArticleValues.getValues({}, postData,
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.productId = prodId;
                    $scope.uploadKey = response.uploadKey;
                    $scope.errorUrl = "admin/#!";
                    $scope.fileUrl = "admin/#!product/" + prodId;
                    $scope.username = response.username;                    
                    $scope.api = "../../rs/downloadableFile/upload";

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                    //$location.path('/loginFailedForm');
                }
        );


        //$scope.newMediaActiveClass = "active";
    }]);

