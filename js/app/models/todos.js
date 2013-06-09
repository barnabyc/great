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
    // @todo
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
      @attribute toDoList
      @type {GREAT.ToDoList}
      **/
      toDoList: {
        getter: function (val) {
          Y.log('fucking getter','debug',this.constructor.NAME);

          if (!this._toDoList) {
            this._toDoList = new Y.GREAT.ToDoList();

            if (val && val instanceof Array) {
              this._toDoList.reset( val );
            }
          }

          return this._toDoList;
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
