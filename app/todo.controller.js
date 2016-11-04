(function(angular) {

    'use strict';

  angular
        .module('todoApp')
        .controller('TodoController', TodoController);
        TodoController.$inject = ['storageService','$mdDialog'];




    function TodoController(storageService, $mdDialog) {
        var vm = this;
        
        vm.selectedTask = [];
        vm.items = storageService.get() || [];
        vm.notDone = notDone;
        vm.done = done;
        vm.all = all;
        vm.createItem = createItem;
        vm.addTask = addTask;
        vm.cancel= cancel;
        vm.inputask = inputask;
        vm.update = update;
        vm.updateTask = updateTask;
        vm.addForm = null;
    
      
    

        function notDone(item) {
            return item.done == false;
        }

        function done(item) {
            return item.done == true;
        }

        function all(item) {
            return true;
        }

       //Update a selected task to the items list
       function update(ev,item) {
            
            vm.addForm=false;
            var item= angular.copy(item);
              if (vm.selectedTask.length == 1) {
                   var myFormDialog = {       
                 locals: {item: item, addForm: vm.addForm}, 
                  bindToController: true,       
                 controller: 'TodoController',
                 controllerAs: 'ctrl',
                 templateUrl: 'app/components/templateForm.html',
                 parent: angular.element(document.body),
                 targetEvent: ev,
                 clickOutsideToClose:true
             } 
                $mdDialog.show(myFormDialog).then(function(result){ 
                  if(result){
                       vm.selectedTask[0].title = result.title,
                       vm.selectedTask[0].done = false,
                       vm.selectedTask[0].priority = result.priority ,
                       vm.selectedTask[0].description = result.description,
                       vm.selectedTask[0].date = result.date,
                       vm.selectedTask[0].status = result.status,
                       vm.selectedTask[0].tags = result.tags, 
                       vm.selectedTask[0].estimatedWork = result.estimatedWork
                       storageService.set(vm.items);
                      }
                  })
              
              }
      
            }  

            
  function updateTask(title, priority, description, date, status, tags, estimatedWork){
              
               var result={
                   title: title,
                   priority: priority,
                   description: description,
                   date: date,
                   status: status,
                   tags: tags,
                   estimatedWork: estimatedWork
                }
              $mdDialog.hide(result);
             }

      
   function inputask(title, priority, description, date, status, tags, estimatedWork){
           
               var result={
                 
                   title: title,
                   priority: priority,
                   description: description,
                   date: date,
                   status: status,
                   tags: tags,
                   estimatedWork: estimatedWork
                }
              $mdDialog.hide(result);
             }

        //Creates a new item with the given parameters
        function createItem(title, done, priority, description, date, status, tags,estimatedWork) {
            vm.items.push({
                title: title,
                done: done || false,
                priority: priority,
                description: description,
                date: date,
                status: status,
                tags: tags,
                estimatedWork: estimatedWork
            });
            storageService.set(vm.items);
        }

   

        //Add a new task to the items list 
        function addTask(ev) {
            vm.addForm=true;
             var myFormDialog = {    
                 locals: {addForm: vm.addForm},
                 bindToController: true,
                 controller: 'TodoController',
                 controllerAs: 'ctrl',
                 templateUrl: 'app/components/templateForm.html',
                 parent: angular.element(document.body),
                 targetEvent: ev,
                 clickOutsideToClose:true
             } 
                $mdDialog.show(myFormDialog).then(function(result){ 
                  if(result) {
                        vm.createItem(result.title,result.done, result.priority,
                  result.description, result.date, result.status, result.tags, 
                  result.estimatedWork);
                 }
          })
      };
                 

      function cancel(){
          $mdDialog.cancel();
      }


    }
    
})(window.angular);