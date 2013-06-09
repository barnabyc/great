YUI.add('great:views:brief_lists', function (Y) {

  var BriefListsView = Y.Base.create('great:briefListsView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<ol class="brief-lists" />',

    /**
    BriefListItemView for each of the lists.

    @property itemView
    @type {GREAT.BriefListView}
    **/
    itemView: Y.GREAT.BriefListView,

    /**
    @method additionalItemViewAttrs
    **/
    additionalItemViewAttrs: function (model) {
      return {
        modelList: model
      };
    }
  },
  {
    ATTRS: {
      /**
      @attribute modelList
      @type {GREAT.YourLists}
      **/
      modelList: {}
    }
  });

  Y.namespace('GREAT').BriefListsView = BriefListsView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:brief_list'
  ]
});

