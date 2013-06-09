YUI.add('great:views:todos_list', function (Y) {

  var ToDosListView = Y.Base.create('great:toDosListView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<ol class="todos-list brief-lists" />',

    /**
    BriefListItemView for each of the lists.

    @property itemView
    @type {GREAT.BriefListView}
    **/
    itemView: Y.GREAT.ToDosView,

    /**
    @method additionalItemViewAttrs
    @param {GREAT.ToDos} model
    **/
    additionalItemViewAttrs: function (model) {
      return {
        modelList: model.get('toDoList')
      };
    }

  },
  {
    ATTRS: {
      /**
      @attribute modelList
      @type {GREAT.ToDosList}
      **/
      modelList: {}
    }
  });

  Y.namespace('GREAT').ToDosListView = ToDosListView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:todos'
  ]
});

