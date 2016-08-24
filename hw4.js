angular.module('myApp', [])
  .controller('myCtrl', function($scope) {

  	 $scope.groups = [
      {
        name:"group1", 
        description: "socket",
        members: [{name:"student1",task: []},{name:"student2",task:[]}],
        tasks: [{name:"task1",done:false},{name:"task2",done:false}]
      },
      {name:"group2", description:"cvs",members: [{name:"student1",task: []},{name:"student2",task:[]}],tasks: [{name:"task1",done:false},{name:"task2",done:false}]},
      {name:"group3", description :"rocket",members: [{name:"student1",task: []},{name:"student2",task:[]}],tasks: [{name:"task1",done:false},{name:"task2",done:false}]}
      ];

      /*$scope.students = [
      {
        name:"varun", 
        group: "group1"
      },
      {name:"rocky", group:"group2"},
      {name:"victor", group :"group3"}
      ];

      $scope.tasks = [
      {
        name:"hiiiiii", 
        group: "group1"
      },
      {name:"helooo", group:"group2"},
      {name:"gmmmm", group :"group3"}
      ];*/

      
      $scope.addGroup = function() {
      $scope.groups.push({name:$scope.Group, description:$scope.Description,members:[],tasks:[]});
      $scope.Group = '';
      $scope.Description = '';      
    };

    $scope.selectedOption = $scope.groups[0];

    $scope.addStudent = function() {
      $scope.selectedOption.members.push({name:$scope.name,task:[]});
      $scope.name = '';
        
    };

     $scope.addTask = function() {
      $scope.selectedOption.tasks.push({name:$scope.tname,done:false});
      $scope.tname = '';
        
    };

    $scope.removeGroup = function($index) {
      $scope.groups.splice($index,1);
        
    };

    $scope.removeMember = function($index,group) {
       
       group.members.splice($index,1);
     
        
    };

    $scope.removeTask = function($index,group) {
       
       group.tasks.splice($index,1);
     
        
    };

    $scope.remaining = function(group) {
      var count = 0;
      angular.forEach(group.tasks, function(task) {
        count += task.done ? 1 : 0;
      });
      return count;
    };

   
 
   
  });
