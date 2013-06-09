YUI.add('great:models:your_list', function (Y) {

  /**
  @class YourList
  @namespace GREAT
  @extends Model
  @constructor
  **/
  var YourList = Y.Base.create('great:yourList',
    Y.ModelList,
    [],
  {
    // @todo
  },
  {
    ATTRS: {
      /**
      @attribute title
      @type {String}
      **/
      title: {},

      /**
      @attribute url
      @type {String}
      **/
      url: {}
    }
  });

  Y.namespace('GREAT').YourList = YourList;

},
'0.0.1',
{
  requires: [
    'model-list'
  ]
});
