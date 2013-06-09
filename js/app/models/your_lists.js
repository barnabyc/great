YUI.add('great:models:your_lists', function (Y) {

  /**
  @class YourLists
  @namespace GREAT
  @extends ModelList
  @constructor
  **/
  var YourLists = Y.Base.create('great:yourLists',
    Y.ModelList,
    [],
  {
    /**
    @property model
    @type {GREAT.YourList}
    **/
    model: Y.GREAT.YourList

  },
  {
    ATTRS: {}
  });

  Y.namespace('GREAT').YourLists = YourLists;

},
'0.0.1',
{
  requires: [
    'great:models:your_list',
    'model-list'
  ]
});
