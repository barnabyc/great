YUI.add('great:models:todo', function (Y) {

  /**
  @class ToDo
  @namespace GREAT
  @extends Model
  @constructor
  **/
  var ToDo = Y.Base.create('great:toDo',
    Y.Model,
    [],
  {
    // @todo
  },
  {
    ATTRS: {
      /**
      @attribute complete
      @type {Bool}
      **/
      complete: {},

      /**
      @attribute name
      @type {String}
      **/
      name: {},

      /**
      @attribute memo
      @type {String}
      **/
      memo: {}
    }
  });

  Y.namespace('GREAT').ToDo = ToDo;

},
'0.0.1',
{
  requires: [
    'model'
  ]
});
