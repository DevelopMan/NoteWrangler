angular.module('NoteWrangler')
    .controller('NoteCreateController', function($http){
        var controller = this;
        this.saveNote = function(note)
        {
            controller.errors = null;
            $http({method: 'POST', url: '/notes', data: note}).success(function(data){
                controller.notes = data;
            })
                .catch(function(note){
                    controller.errors = note.data.error;
                });
        };
    });