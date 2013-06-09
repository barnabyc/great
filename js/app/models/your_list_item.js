YUI.add('great:models:your_list_item', function (Y) {

  /**
  @class YourListItem
  @namespace GREAT
  @extends Model
  @constructor
  **/
  var YourListItem = Y.Base.create('great:yourListItem',
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
      title: {},

      /**
      @attribute memo
      @type {String}
      **/
      memo: {}
    }
  });

  Y.namespace('GREAT').YourListItem = YourListItem;

},
'0.0.1',
{
  requires: [
    'model'
  ]
});
