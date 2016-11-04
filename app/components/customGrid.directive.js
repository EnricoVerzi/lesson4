(function() {
    'use strict';

    angular
        .module('todoApp')
        .directive('customGrid', directive);

    function directive() {
        return {
            scope: {},
            bindToController: {
                items: '=',
                selectedItem: '=',
                filterFunction: '=',
                selectedTask: '='
            },
            controller: customGridController,
            controllerAs: 'gridCtrl',
            transclude: true,
            restrict: 'E',
            templateUrl: 'app/components/customGrid.template.html' 
        };
    }


    customGridController.$inject = ['storageService', '$mdDialog'];

    //Directive controller
    function customGridController(storageService, $mdDialog) {
        var vm = this;
        vm.changePriority = changePriority;
        vm.checkStateChanged = checkStateChanged;
        vm.toggleSelection = toggleSelection;  
        vm.deleteItem = deleteItem;


        //Changes the priority of the given item
        function changePriority(item) {
            if (item.priority <= 0)
                item.priority++;
            else
                item.priority = -1;

            storageService.set(vm.items);
        }

        //Occurs when the status of an items changes
        function checkStateChanged() {
            storageService.set(vm.items);
        }

        //Select or deselect the given item
         function toggleSelection(item) {
            var index= null;
            index= vm.selectedTask.indexOf(item);
            console.log(index);
                  if(index == -1){
                vm.selectedTask.push(item);
            }
            else{
                vm.selectedTask.splice(index,1);
            }
                
        }

        //Delete the current selected item, if any
          function deleteItem(ev) {
        
                var confirm = $mdDialog.confirm()
                    .textContent('Will be deleted ' + vm.selectedTask.length + ' tasks. Are you sure?')
                    .ariaLabel('Delete tasks')
                    .ok('Yes')
                    .cancel('No');
                $mdDialog.show(confirm).then(function (result) {
                    if (result) {
                        var i, j;
                        for (i = 0; i < vm.items.length; i++) {

                            for (j = 0; j < vm.selectedTask.length; j++) {

                                if (vm.items[i].title == vm.selectedTask[j].title) {
                                    vm.items.splice(i, 1);
                                    storageService.set(vm.items);
                                }
                            }
                        }
                    }vm.selectedTask=[];
                }) ;
        }
    
        
    
    }
})();