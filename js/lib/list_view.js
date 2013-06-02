/**

An extension that provides common list handing capabilities
that can be mixed in to a View
@module views:lib:list

@example
  var PieListView = Y.Base.create('PieListView', Y.View, [Y.Lib.ListView], {
    itemView: PieListItemView
  });

  var pieListView = new PieListView({ modelList: piesList });
  pieListView.render(); will render a new instance of itemView for each
  item in the ModelList

**/
YUI.add('views:lib:list', function (Y) {

  var Lang = Y.Lang;

  /**
  @class ListView
  @namespace Lib
  @extends View
  @constructor
  **/
  Y.namespace('Lib').ListView = Y.Base.create('Lib.ListView',
    Y.View,
    [],
  {

    /**
    @property itemView
    @description
      When sub-classing Y.View, this needs to be overwritten with the
      view that will render for each item in a ModelList.
      Set it as a string of a template to simply use that instead of a
      full fledged view
    @type {View|String}
    @default null
    **/
    itemView: null,

    /**
    @property emptyStateView
    @description
      Fill in a template path to show a specific
      treatment when there is no items
    @type {String}
    @default null
    **/
    emptyStateView: null,

    /**
    An initial template to use when rendering
    that may preceed the layout template.

    @property initialTemplate
    @type {String}
    @default null
    **/
    initialTemplate: null,

    /**
    @property renderLayoutWhenEmpty
    @type {boolean}
    @default true
    **/
    renderLayoutWhenEmpty: true,

    /**
    If we're dealing with a LazyModelList we'll
    likely want to revive a model before rendering.

    @property reviveLazyModels
    @type {Bool}
    @default false
    **/
    reviveLazyModels: false,

    initializer: function (options) {
      var modelList = this.get('modelList'),
          itemView;

      // set the itemView from the options
      if (options && 'itemView' in options) {
        this.itemView = options.itemView;
      }

      itemView = this.itemView;

      // There needs to be an item view (either function or string)
      if (!(Lang.isFunction(itemView) || Lang.isString(itemView))) {
        throw "the itemView property must be a View or template path (string) was: " + typeof itemView;
      }

      if (modelList) this._addModelListListeners();

      this.after('modelListChange', this._afterModelListChange, this);
    },

    /**
    @method render
    @chainable
    **/
    render: function () {
      var emptyList = this.get('modelList').isEmpty();

      if (!emptyList) {
        this.renderLayout();
        this.renderListItems();
      }
      else {
        if (this.initialTemplate) {
          this.renderInitialTemplate();
        }
        else {
          if (this.renderLayoutWhenEmpty) this.renderLayout();
          this.renderEmptyState();
        }
      }

      return this;
    },

    /**
    Render an initial template if specified.

    @method renderInitialTemplate
    **/
    renderInitialTemplate: function () {
      this.get('container').setHTML(
        this.get('templates.' + this.initialTemplate)()
      );
    },

    /**
    placeholder function that is meant
    to be overwritten if a custom layout
    is needed by the subclass.

    @method renderLayout
    **/
    renderLayout: function () {},

    /**
    @method renderEmptyState
    **/
    renderEmptyState: function () {
      var emptyStateView = this.emptyStateView,
          tmplOpts       = this.get('modelList').getAttrs();

      if (!emptyStateView) return;

      this.get('listContainer').setHTML(
        this.get(emptyStateView)( tmplOpts )
      );
    },

    /**
    @method renderListItems
    @description renders each list item
    **/
    renderListItems: function () {
      var models;

      if (this.reviveLazyModels) {
        models = this.get('modelList').revive();

      } else {
        models = this.get('modelList').toArray();
      }

      Y.each(models, this.add, this);

      this.fire('renderListItems');
    },

    /**
    @method _afterModelListChange
    @description handles modelList changes
    @param {EventFacade} ev
    @protected
    **/
    _afterModelListChange: function (ev) {
      this._addModelListListeners();
    },

    /**
    adds listeners for modelList events

    @method _addModelListListeners
    @protected
    **/
    _addModelListListeners: function () {
      var modelList = this.get('modelList');

      if (modelList) {
        modelList.after("reset",  this.render,    this);
        modelList.after("add",    this._afterAdd, this);
      }
    },

    /**
    @method _afterAdd
    @description handles added models
    @param {EventFacade} ev
    @protected
    **/
    _afterAdd: function (ev) {
      // don't try and add items if the list container can't be found
      if (!this.get('listContainer')) return;

      // If its the first new model, remove whatever's in the
      // listContainer (likely an emptyStateView)
      if (this.get('modelList').size() === 1) {
        this._clear();
      }

      this.add(ev.model);
    },

    /**
    @method _clear
    @description removes all content in the listContainer
    @protected
    **/
    _clear: function () {
      this.get('listContainer').empty();
    },

    /**
    Create a node for a given model, render the
    item view and append it to the items array.

    @method add
    @param {Model} model
    **/
    add: function (model) {
      var itemView = this.itemView,
          itemContainer,
          item;

      if (this.reviveLazyModels) {
        model = this.get('modelList').revive( model );
      }

      if (Lang.isString(itemView)) {
        item = Y.Node.create( this.get(itemView)( model.toJSON() ) );
        itemContainer = item;
      }
      else {
        item = new this.itemView( Y.merge(
            { model: model },
            this.additionalItemViewAttrs(model)
          )
        );
        itemContainer = item.render().get('container');
      }

      this.get('items').push(item);
      this.append( itemContainer );

      this.fire("add");
    },

    /**
    Overwrite and return an object to pass attributes to each
    instance of itemView, in addition to the current model in the modelList.
    That current model is available as a parameter.

    @method additionalItemViewAttrs
    @param model {Y.Model}
    **/
    additionalItemViewAttrs: function (model) {
      return {};
    },

    /**
    Append content to the DOM.
    overwrite for more control

    @method append
    @param {Node} node
    **/
    append: function (node) {
      this.get('listContainer').append( node );
    }

  },
  {
    ATTRS: {
      /**
      @attribute modelList
      @type {ModelList}
      **/
      modelList: {},

      /**
      @attribute items
      @type {Array[View]}
      **/
      items: {
        value: []
      },

      /**
      @attribute listContainer
      @description
        if available it uses the listContainerSelector property
        to find the container inside this.get('container').
        If not it will assume the listContainer should be
        this.get('container').
      @type {Node}
      **/
      listContainer: {
        getter: function (val) {
          var container = this.get('container'),
              selector  = this.listContainerSelector;

          if (!val) {
            if (selector) val = container.one(selector);
            else          val = container;
          }

          return val;
        }
      }
    }
  });

}, '0.0.1', { requires: ['view'] });
