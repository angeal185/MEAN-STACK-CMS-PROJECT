'use strict';

/* Business Services */
/*
var meanCmsAdminServices = angular.module('meanCmsAdminServices', ['ngResource', 'ngCookies']);

meanCmsAdminServices.factory('Challenge', ['$resource',
    function($resource) {
        return $resource(siteUrl + "/user/getChallenge", {}, {
            getChallenge: {method: 'GET', params: {languageCode: "en_US"}, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('Login', ['$resource',
    function($resource) {
        return $resource(siteUrl + "public/login", {}, {
        });
    }]);

meanCmsAdminServices.factory('ArticleValues', ['$resource', 'getToken',
    function($resource, getToken) {
        return $resource(siteUrl + "article/values", {}, {
            getValues: {method: 'GET', params: {languageCode: "en_US"}, isArray: false, headers: {Authorization: 'Basic ' + getToken()}}
        });
    }]);


meanCmsAdminServices.factory('ArticleList', ['$resource', 'getToken',
    function($resource, getToken) {
        return $resource(siteUrl + "article/list", {}, {
            getArticleList: {method: 'POST', isArray: true, headers: {Authorization: 'Basic ' + getToken()}}
        });
    }]);

*/
//---business logic services only------------------------------------------------------------------
var meanCmsAdminBusinessServices = angular.module('meanCmsAdminBusinessServices', ['ngResource', 'ngCookies']);

meanCmsAdminBusinessServices.factory('checkCreds', ['$cookies', function($cookies) {
        return function() {
            var returnVal = false;
            var meanCreds = $cookies.meanCreds;
            if (meanCreds !== undefined && meanCreds !== "") {
                returnVal = true;
            }
            return returnVal;
        };

    }]);

meanCmsAdminBusinessServices.factory('getToken', ['$cookies', function($cookies) {
        return function() {
            var returnVal = "";
            var meanCreds = $cookies.meanCreds;
            if (meanCreds !== undefined && meanCreds !== "") {
                returnVal = btoa(meanCreds);
            }
            return returnVal;
        };

    }]);

meanCmsAdminBusinessServices.factory('getUsername', ['$cookies', function($cookies) {
        return function() {
            var returnVal = "";
            var meanUsername = $cookies.meanUsername;
            if (meanUsername !== undefined && meanUsername !== "") {
                returnVal = meanUsername;
            }
            return returnVal;
        };

    }]);



meanCmsAdminBusinessServices.factory('setCreds', ['$cookies', function($cookies) {
        return function(un, pw) {
            var token = un.concat(":", pw);
            $cookies.meanCreds = token;
            $cookies.meanUsername = un;
        };

    }]);

meanCmsAdminBusinessServices.factory('deleteCreds', ['$cookies', function($cookies) {
        return function() {
            $cookies.meanCreds = "";
            $cookies.meanUsername = "";
        };
    }]);

meanCmsAdminBusinessServices.factory('Page', function() {
    var title = 'default';
    return {
        title: function() {
            return title;
        },
        setTitle: function(newTitle) {
            title = newTitle;
        }
    };
});

meanCmsAdminBusinessServices.factory('DateUtil', function() {
    return {
        stringifyDate: function(dateLong) {
            var theDate = new Date(dateLong);
            var month = theDate.getMonth();
            month++;            
            var day = theDate.getDate();
            var year = theDate.getFullYear();
            var dateStr = month + "/" + day + "/" + year;
            return dateStr;
        }
    };
});

