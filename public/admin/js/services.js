'use strict';

/* Services */

var meanCmsAdminServices = angular.module('meanCmsAdminServices', ['ngResource', 'ngCookies']);

meanCmsAdminServices.factory('Challenge', ['$resource',
    function($resource) {
        return $resource("../rs/user/getChallenge", {}, {
            getChallenge: {method: 'GET', params: {languageCode: "en_US"}, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('Login', ['$resource',
    function($resource) {
        return $resource("../rs/public/login", {}, {
        });
    }]);

meanCmsAdminServices.factory('ArticleValues', ['$resource',
    function($resource) {
        return $resource("../rs/article/values", {}, {
            getValues: {method: 'POST', cache: false, params: {}, isArray: false}
        });
    }]);


meanCmsAdminServices.factory('ArticleList', ['$resource',
    function($resource) {
        return $resource("../rs/article/list", {}, {
            getArticleList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('Article', ['$resource',
    function($resource) {
        return $resource("../rs/article/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);
//delete: {method: 'DELETE', cache : false, isArray: false, headers: {Authorization: 'Basic ' + getToken()}}

meanCmsAdminServices.factory('Comment', ['$resource',
    function($resource) {
        return $resource("../rs/comment/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('CommentList', ['$resource',
    function($resource) {
        return $resource("../rs/comment/list", {}, {
            getCommentList: {method: 'POST', cache: false, isArray: true}
        });
    }]);


meanCmsAdminServices.factory('MailServer', ['$resource',
    function($resource) {
        return $resource("../rs/mailServer", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('SectionList', ['$resource',
    function($resource) {
        return $resource("../rs/section/list", {}, {
            getSectionList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('Section', ['$resource',
    function($resource) {
        return $resource("../rs/section/:id", {}, {
            //get: {method: 'GET', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            save: {method: 'POST', cache: false, isArray: false},
            //update: {method: 'PUT', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('CategoryList', ['$resource',
    function($resource) {
        return $resource("../rs/category/list", {}, {
            getCategoryList: {method: 'POST', cache: false, isArray: true}
        });
    }]);



meanCmsAdminServices.factory('Category', ['$resource',
    function($resource) {
        return $resource("../rs/category/:id", {}, {
            //get: {method: 'GET', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            save: {method: 'POST', cache: false, isArray: false},
            //update: {method: 'PUT', isArray: false, headers: {Authorization: 'Basic ' + getToken()}},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);







meanCmsAdminServices.factory('LanguageList', ['$resource',
    function($resource) {
        return $resource("../rs/language/list", {}, {
            getLanguageList: {method: 'POST', cache: false, isArray: true}
        });
    }]);



meanCmsAdminServices.factory('Language', ['$resource',
    function($resource) {
        return $resource("../rs/language/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);


meanCmsAdminServices.factory('LocationList', ['$resource',
    function($resource) {
        return $resource("../rs/location/list", {}, {
            getLocationList: {method: 'POST', cache: false, isArray: true}
        });
    }]);



meanCmsAdminServices.factory('Location', ['$resource',
    function($resource) {
        return $resource("../rs/location/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);


meanCmsAdminServices.factory('LinkList', ['$resource',
    function($resource) {
        return $resource("../rs/link/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);



meanCmsAdminServices.factory('Link', ['$resource',
    function($resource) {
        return $resource("../rs/link/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);



meanCmsAdminServices.factory('ConfigurationList', ['$resource',
    function($resource) {
        return $resource("../rs/configuration/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);



meanCmsAdminServices.factory('Configuration', ['$resource',
    function($resource) {
        return $resource("../rs/configuration/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('ProductList', ['$resource',
    function($resource) {
        return $resource("../rs/product/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('Product', ['$resource',
    function($resource) {
        return $resource("../rs/product/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('MediaList', ['$resource',
    function($resource) {
        return $resource("../rs/media/list", {}, {
            getMediaList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('MediaUpload', ['$resource',
    function($resource) {
        return $resource("../rs/media/upload", {}, {
            addMedia: {method: 'POST', cache: false, isArray: false, headers: {'Content-Type': 'multipart/form-data'}}
        });
    }]);

meanCmsAdminServices.factory('Media', ['$resource',
    function($resource) {
        return $resource("../rs/media/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('DownloadableFileList', ['$resource',
    function($resource) {
        return $resource("../rs/downloadableFile/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('DownloadableFile', ['$resource',
    function($resource) {
        return $resource("../rs/downloadableFile/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('UserList', ['$resource',
    function($resource) {
        return $resource("../rs/user/list", {}, {
            getUserList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('UserRoleList', ['$resource',
    function($resource) {
        return $resource("../rs/user/roleList", {}, {
            getUserRoleList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('Password', ['$resource',
    function($resource) {
        return $resource("../rs/user/pw", {}, {
            change: {method: 'POST', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('User', ['$resource',
    function($resource) {
        return $resource("../rs/user/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('AdminSummary', ['$resource',
    function($resource) {
        return $resource("../rs/admin/summary", {}, {
            get: {method: 'GET', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('AddonsList', ['$resource',
    function($resource) {
        return $resource("../rs/addons/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

meanCmsAdminServices.factory('Addons', ['$resource',
    function($resource) {
        return $resource("../rs/addons/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);


meanCmsAdminServices.factory('Template', ['$resource',
    function($resource) {
        return $resource("../rs/template/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

meanCmsAdminServices.factory('TemplateList', ['$resource',
    function($resource) {
        return $resource("../rs/template/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);


meanCmsAdminServices.factory('TemplateEngine', ['$resource',
    function($resource) {
        return $resource("../rs/templateEngine/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},           
            update: {method: 'PUT', cache: false, isArray: false}            
        });
    }]);

meanCmsAdminServices.factory('TemplateEngineList', ['$resource',
    function($resource) {
        return $resource("../rs/templateEngine/list", {}, {
            getList: {method: 'POST', cache: false, isArray: true}
        });
    }]);

