YUI.add('great:views:brief_list', function (Y) {

  var BriefListView = Y.Base.create('great:briefListView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<div class="brief-list" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      '.opener': { click: '_handleOpenClick' }
    },

    /**
    BriefListItemView for each of the lists.

    @property itemView
    @type {GREAT.BriefListView}
    **/
    itemView: Y.GREAT.BriefListItemView,

    /**
    CSS selector for each BriefListItemView appended.

    @property listContainerSelector
    @type {String}
    **/
    listContainerSelector: 'ol',

    /**
    @method renderLayout
    **/
    renderLayout: function () {
      var container = this.get('container'),
          tmpl      = Tmpl['brief_list'],
          tmplVars  = this.get('modelList').getAttrs(['title', 'url']);

      container.setHTML( tmpl( tmplVars ) );
    },

    /**
    @method _handleOpenClick
    @param {EventFacade} ev
    **/
    _handleOpenClick: function (ev) {
      ev.preventDefault();
      var target = ev.currentTarget;

      target.toggleClass('icon-plus-sign').toggleClass('icon-minus-sign');

      target.ancestor('li').toggleClass('open');
    }
  },
  {
    ATTRS: {
      /**
      @attribute modelList
      @type {GREAT.YourList}
      **/
      modelList: {}
    }
  });

  Y.namespace('GREAT').BriefListView = BriefListView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:brief_list',
    'great:views:brief_list_item'
  ]
});