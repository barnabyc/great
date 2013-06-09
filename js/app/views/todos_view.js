YUI.add('great:views:todos', function (Y) {

  var ToDosView = Y.Base.create('great:toDosView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<ol class="todos brief-list" />',

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
    itemView: Y.GREAT.ToDoView,

    /**
    @property listContainerSelector
    @type {String}
    **/
    listContainerSelector: 'ol',

    /**
    @method renderLayout
    **/
    renderLayout: function () {
      var container = this.get('container'),
          tmpl      = Tmpl['todos'],
          tmplVars  = this.get('model').getAttrs();

      container.setHTML( tmpl( tmplVars ) );
    },

    /**
    @method _handleOpenClick
    @param {EventFacade} ev
    **/
    _handleOpenClick: function (ev) {
      ev.preventDefault();
      var target = ev.currentTarget;

      target.ancestor('li').toggleClass('open');

      // @todo swap :before elements using .open state
      target.toggleClass('icon-plus-sign').toggleClass('icon-minus-sign');
    }
  },
  {
    ATTRS: {
      /**
      @attribute model
      @type {GREAT.ToDos}
      **/
      model: {}
    }
  });

  Y.namespace('GREAT').ToDosView = ToDosView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:todo'
  ]
});