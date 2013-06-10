YUI.add('great:models:todos', function (Y) {

  /**
  @class ToDos
  @namespace GREAT
  @extends Model
  @constructor
  **/
  var ToDos = Y.Base.create('great:toDos',
    Y.Model,
    [],
  {
    /**
    @property _toDoListInstance
    @type {GREAT.ToDoList}
    **/
    _toDoListInstance: null
  },
  {
    ATTRS: {
      /**
      @attribute title
      @type {Bool}
      **/
      title: {},

      /**
      @attribute url
      @type {String}
      **/
      url: {
        getter: function () {
          return '/' + this.get('id');
        }
      },

      /**
      @attribute categories
      @type {Array}
      **/
      categories: {
        value: []
      },

      /**
      Populate an array of vanilla objects into a list,
      or just return an empty list.

      @attribute toDoList
      @type {GREAT.ToDoList}
      **/
      toDoList: {
        getter: function (val) {
          if (!this._toDoListInstance) {
            this._toDoListInstance = new Y.GREAT.ToDoList();

            if (val && val instanceof Array) {
              this._toDoListInstance.reset( val );
            }
          }

          return this._toDoListInstance;
        }
      }
    }
  });

  Y.namespace('GREAT').ToDos = ToDos;

},
'0.0.1',
{
  requires: [
    'model',
    'great:models:todo_list'
  ]
});
