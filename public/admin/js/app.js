'use strict';

/* App Module */

var meanCmsAdminApp = angular.module('meanCmsAdminApp', [
    'ngRoute',
    'meanCmsAdminControllers',
    'meanCmsLoginControllers',
    'meanCmsArticleControllers',
    "meanCmsNewArticleControllers",
    "meanCmsAdminServices",
    "meanCmsAdminBusinessServices",
    "meanCmsSectionControllers",
    "meanCmsCategoryControllers",
    "meanCmsLanguageControllers",
    "meanCmsLocationControllers",
    "meanCmsUserControllers",
    "meanCmsMediaControllers",
    "meanCmsConfigurationControllers",
    "meanCmsLinkControllers",
    "meanCmsProductControllers",
    "meanCmsProductFileControllers",
    "meanCmsAddonsControllers",
    "meanCmsCommentsControllers",
    "meanCmsMailServerControllers",
    "meanCmsTemplateControllers",
    "meanCmsTemplateEngineControllers",
    "ngAnimate",
    'ngCookies'
]);


meanCmsAdminApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'MainCtrl'
                }).
                when('/main/:p', {
                    templateUrl: 'partials/main.html',
                    controller: 'MainCtrl2'
                }).
                when('/articles', {
                    templateUrl: 'partials/articles.html',
                    controller: 'ArticlesCtrl'
                }).
                when('/article/:a', {
                    templateUrl: 'partials/article.html',
                    controller: 'ArticleCtrl'
                }).
                when('/newArticle', {
                    templateUrl: 'partials/newArticle.html',
                    controller: 'NewArticlesCtrl'
                }).
                when('/uploadArticle', {
                    templateUrl: 'partials/uploadArticle.html',
                    controller: 'UploadArticleCtrl'
                }).
                when('/comments', {
                    templateUrl: 'partials/comments.html',
                    controller: 'CommentsCtrl'
                }).
                when('/comment/:a', {
                    templateUrl: 'partials/comment.html',
                    controller: 'CommentCtrl'
                }).
                when('/sections', {
                    templateUrl: 'partials/sections.html',
                    controller: 'SectionsCtrl'
                }).
                when('/newSection', {
                    templateUrl: 'partials/newSection.html',
                    controller: 'NewSectionCtrl'
                }).
                when('/categories', {
                    templateUrl: 'partials/categories.html',
                    controller: 'CategoriesCtrl'
                }).
                when('/newCategory', {
                    templateUrl: 'partials/newCategory.html',
                    controller: 'NewCategoryCtrl'
                }).
                when('/languages', {
                    templateUrl: 'partials/languages.html',
                    controller: 'LanguagesCtrl'
                }).
                when('/language/:a', {
                    templateUrl: 'partials/language.html',
                    controller: 'LanguageCtrl'
                }).
                when('/newLanguage', {
                    templateUrl: 'partials/newLanguage.html',
                    controller: 'NewLanguageCtrl'
                }).
                when('/locations', {
                    templateUrl: 'partials/locations.html',
                    controller: 'LocationsCtrl'
                }).
                when('/location/:a', {
                    templateUrl: 'partials/location.html',
                    controller: 'LocationCtrl'
                }).
                when('/newLocation', {
                    templateUrl: 'partials/newLocation.html',
                    controller: 'NewLocationCtrl'
                }).
                when('/users', {
                    templateUrl: 'partials/users.html',
                    controller: 'UsersCtrl'
                }).
                when('/user/:a', {
                    templateUrl: 'partials/user.html',
                    controller: 'UserCtrl'
                }).
                when('/newUser', {
                    templateUrl: 'partials/newUser.html',
                    controller: 'NewUserCtrl'
                }).
                when('/mediaList', {
                    templateUrl: 'partials/mediaList.html',
                    controller: 'MediaListCtrl'
                }).
                when('/newMedia', {
                    templateUrl: 'partials/newMedia.html',
                    controller: 'NewMediaCtrl'
                }).
                when('/media/:a', {
                    templateUrl: 'partials/media.html',
                    controller: 'MediaCtrl'
                }).
                when('/changePassword', {
                    templateUrl: 'partials/changePasswordForm.html',
                    controller: 'PasswordCtrl'
                }).
                when('/configurations', {
                    templateUrl: 'partials/configurations.html',
                    controller: 'ConfigurationsCtrl'
                }).
                when('/configuration/:a', {
                    templateUrl: 'partials/configuration.html',
                    controller: 'ConfigurationCtrl'
                }).
                when('/newConfiguration', {
                    templateUrl: 'partials/newConfiguration.html',
                    controller: 'NewConfigurationCtrl'
                }).
                when('/mailServer', {
                    templateUrl: 'partials/mailServer.html',
                    controller: 'MailServerCtrl'
                }).
                when('/links', {
                    templateUrl: 'partials/links.html',
                    controller: 'LinksCtrl'
                }).
                when('/link/:a', {
                    templateUrl: 'partials/link.html',
                    controller: 'LinkCtrl'
                }).
                when('/newLink', {
                    templateUrl: 'partials/newLink.html',
                    controller: 'NewLinkCtrl'
                }).
                when('/products', {
                    templateUrl: 'partials/products.html',
                    controller: 'ProductsCtrl'
                }).
                when('/product/:a', {
                    templateUrl: 'partials/product.html',
                    controller: 'ProductCtrl'
                }).
                when('/newProduct', {
                    templateUrl: 'partials/newProduct.html',
                    controller: 'NewProductCtrl'
                }).
                when('/productFileUpload/:a', {
                    templateUrl: 'partials/newProductFile.html',
                    controller: 'ProductFileUploadCtrl'
                }).
                when('/productFiles/:a/:b', {
                    templateUrl: 'partials/productFiles.html',
                    controller: 'ProductFilesCtrl'
                }).
                when('/productFile/:a', {
                    templateUrl: 'partials/productFile.html',
                    controller: 'ProductFileCtrl'
                }).
                when('/loginForm', {
                    templateUrl: 'partials/loginForm.html',
                    controller: 'LoginFormCtrl'
                }).
                when('/loginFailedForm', {
                    templateUrl: 'partials/loginForm.html',
                    controller: 'LoginFailedFormCtrl'
                }).
                when('/logOut', {
                    templateUrl: 'partials/logOut.html',
                    controller: 'LogOutCtrl'
                }).
                when('/addons', {
                    templateUrl: 'partials/addons.html',
                    controller: 'AddonsCtrl'
                }).
                when('/addon/:a', {
                    templateUrl: 'partials/addon.html',
                    controller: 'AddonCtrl'
                }).
                when('/newAddon', {
                    templateUrl: 'partials/newAddon.html',
                    controller: 'NewAddonsCtrl'
                }).
                when('/templates', {
                    templateUrl: 'partials/templates.html',
                    controller: 'TemplatesCtrl'
                }).
                when('/template/:a', {
                    templateUrl: 'partials/template.html',
                    controller: 'TemplateCtrl'
                }).
                when('/newTemplate', {
                    templateUrl: 'partials/newTemplate.html',
                    controller: 'NewTemplateCtrl'
                }).
                when('/uploadTemplate', {
                    templateUrl: 'partials/uploadTemplate.html',
                    controller: 'UploadTemplateCtrl'
                }).
                when('/templateEngines', {
                    templateUrl: 'partials/templateEngines.html',
                    controller: 'TemplateEnginesCtrl'
                }).
                when('/templateEngine/:a', {
                    templateUrl: 'partials/templateEngine.html',
                    controller: 'TemplateEngineCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
