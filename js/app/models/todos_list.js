YUI.add('great:models:todos_list', function (Y) {

  /**
  @class ToDosList
  @namespace GREAT
  @extends ModelList
  @constructor
  **/
  var ToDosList = Y.Base.create('great:toDosList',
    Y.ModelList,
    [],
  {
    /**
    @property model
    @type {GREAT.ToDos}
    **/
    model: Y.GREAT.ToDos
  },
  {
    ATTRS: {}
  });

  Y.namespace('GREAT').ToDosList = ToDosList;

},
'0.0.1',
{
  requires: [
    'model-list',
    'great:models:todos'
  ]
});
