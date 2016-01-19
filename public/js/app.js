angular.module("salesman", ["ngMaterial", "ui.router", "ngMdIcons", "angular-img-cropper"])
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                console.log(toState);
                if (toState.name === "dashboard" && !localStorage.getItem("firebaseToken")) {
                    alert("Not Allowed");
                    event.preventDefault();
                    $state.go("login")
                }
            })
    })
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: "LoginCtrl"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "templates/signup.html",
                controller: "SignUpCtrl"
            })
            .state("dashboard", {
                url: "/dashboard/:uId",
                templateUrl: "templates/dashboard.html",
                controller: "Dashboard"
            })
            .state('dashboard.createCompany', {
                url: '/createCompany',
                views: {
                    'dashboardContent': {
                        templateUrl: 'templates/createCompany.html'
                    }
                }
            })
            .state('dashboard.addSalesman', {
                url: '/addSalesman',
                views: {
                    'dashboardContent': {
                        templateUrl: 'templates/addSalesman.html'
                    }
                }
            })
            .state('dashboard.updateUserProfile', {
                url: '/updateUserProfile/:uId',
                views: {
                    'dashboardContent': {
                        templateUrl: 'templates/updateUserProfile.html',
                        controller: 'updateUserProfile'
                    }
                }
            })
            .state('dashboard.dashboard-home', {
                url: '/dashboard-home',
                views: {
                    'dashboardContent': {
                        templateUrl: 'templates/dashboard-home.html'
                    }
                }
            });
        $urlRouterProvider.otherwise("login");

        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
    })
    .filter('capitalize', function () {
        return function (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });
