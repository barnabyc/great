YUI.add('great:views:todos', function (Y) {

  var ToDosView = Y.Base.create('great:toDosView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<li class="todos brief-list" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      '.opener': { click: '_handleOpenClick' }
    },

    /**
    ToDoView for each of the lists.

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
    @method initializer
    **/
    initializer: function () {
      this.after('renderListItems', this._afterRenderListItems, this);
      this.get('createToDoView').after('create', this._afterCreate, this);
    },

    /**
    @method renderLayout
    **/
    renderLayout: function () {
      var container = this.get('container'),
          showFullDetail = this.get('showFullDetail'),
          tmplVars  = this.get('model').getAttrs(),
          tmplName  = 'todos',
          tmpl;

      if (showFullDetail) {
        tmplVars  = Y.merge(
          tmplVars,
          { showFullDetail: showFullDetail }
        );

        tmplName = 'todos_full';

        container.addClass('open');
      }

      tmpl = Tmpl[ tmplName ];

      container.setHTML( tmpl( tmplVars ) );
    },

    /**
    @method additionalItemViewAttrs
    **/
    additionalItemViewAttrs: function () {
      return {
        showFullDetail: this.get('showFullDetail')
      };
    },

    /**
    Append the create view at the end of the list.

    @method _afterRenderListItems
    **/
    _afterRenderListItems: function (ev) {
      var container = this.get('container'),
          listContainer = container.one( this.listContainerSelector );

      listContainer.append(
        this.get('createToDoView').render().get('container')
      );
    },

    /**
    @method _afterCreate
    **/
    _afterCreate: function (ev) {
      var model = ev.todo;

      this.get('modelList').add( model );
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
      @attribute showFullDetail
      @type {Boolean}
      **/
      showFullDetail: {},

      /**
      @attribute model
      @type {GREAT.ToDos}
      **/
      model: {},

      /**
      @attribute modelList
      @type {GREAT.ToDoList}
      **/
      modelList: {},

      /**
      @attribute createToDoView
      @type {GREAT.CreateToDoView}
      **/
      createToDoView: {
        valueFn: function () {
          return new Y.GREAT.CreateToDoView();
        }
      }
    }
  });

  Y.namespace('GREAT').ToDosView = ToDosView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'great:views:todo',
    'great:views:create_todo'
  ]
});