YUI.add('great:models:todo_list', function (Y) {

  /**
  @class ToDoList
  @namespace GREAT
  @extends Model
  @constructor
  **/
  var ToDoList = Y.Base.create('great:todoList',
    Y.ModelList,
    [],
  {
    /**
    @property model
    @type {GREAT.ToDo}
    **/
    model: Y.GREAT.ToDo
  },
  {
    ATTRS: {}
  });

  Y.namespace('GREAT').ToDoList = ToDoList;

},
'0.0.1',
{
  requires: [
    'model-list',
    'great:models:todo'
  ]
});
