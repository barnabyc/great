YUI.add('great:app', function (Y) {

  var App = Y.Base.create(
    'great:app',
    Y.App.Base,
    [],
  {

    /**
    @attribute views
    @type {Object}
    **/
    views: {
      todos_list: {
        type: Y.GREAT.ToDosListView
      },
      todo_list: {
        type: Y.GREAT.ToDosView
      }
    },

    /**
    Show all the ToDo lists.

    @method showLists
    **/
    showLists: function () {
      var toDosList = this.get('toDosList');

      this.showView('todos_list', {
        modelList: toDosList
      });
    },

    /**
    Show a single ToDo list.

    @method showList
    @param {Object} req
    **/
    showList: function (req) {
      var toDosList = this.get('toDosList'),
          toDos;

      toDos = toDosList.getById( req.params.id );

      this.showView('todo_list', {
        showFullDetail: true,
        model:          toDos,
        modelList:      toDos.get('toDoList')
      });
    }

  },
  {

    ATTRS: {

      /**
      @attribute route
      @type {Array[Object]}
      **/
      routes: {
        value: [
          {path: '/',    callbacks: 'showLists'},
          {path: '/:id', callbacks: 'showList'}
        ]
      },

      /**
      @attribute serverRouting
      @type {Boolean}
      **/
      serverRouting: {
        value: true
      },

      /**
      @attribute toDosList
      @type {GREAT.ToDoLists}
      **/
      toDosList: {}

    }
  });

  // Expose API
  Y.namespace('GREAT').App = App;

},
'0.0.1',
{
  requires: [
    'app-base',
    'great:views:todos_list',
    'great:views:todo'
  ]
});
