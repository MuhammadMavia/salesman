angular.module("salesman")
    .controller("Dashboard", function (usersService, $mdDialog, $state, common, $scope, $http, $stateParams) {
        common.showLoading();
        //common.templateToast("templates/toast.html","updateUserProfile");
        // $scope.company = {};
        var uId = $stateParams.uId;

        usersService.getAdmin(uId).then(function (admin) {
            $scope.admin = admin;
            usersService.getCompany(uId).then(function (company) {
                $scope.company = company;
                usersService.getUsers(uId).then(function (users) {
                    $scope.users = users
                });
            });
        });
        $scope.doLogOut = function () {
            common.doLogOut();
        };
        $scope.showUserFrom = usersService.showUserFrom;
        $scope.openLeftMenu = common.openLeftMenu;
        $scope.createCompany = function (company) {
            usersService.createCompany(company).then(function(data){
                $scope.company = data;
            })
        };
        $scope.addUser = usersService.addUser;



    });