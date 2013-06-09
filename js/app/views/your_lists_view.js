YUI.add('great:views:your_lists', function (Y) {

  var YourListsView = Y.Base.create('great:yourListsView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<ol class="your-lists-view lists-view" />',

    /**
    Brief list View for each of the lists.

    @property itemView
    @type {GREAT.BriefListsView}
    **/
    itemView: Y.GREAT.BriefListsView,

    additionalItemViewAttrs: function (model) {
      return {
        modelList: new Y.ModelList({items:[model]})
      };
    }
  },
  {
    ATTRS: {
      /**
      @attribute modelList
      @type {ModelList}
      **/
      modelList: {}
    }
  });

  Y.namespace('GREAT').YourListsView = YourListsView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:brief_lists',
    'model-list'
  ]
});

