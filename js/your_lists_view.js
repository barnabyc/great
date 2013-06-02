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
    @property events
    @type {Object}
    **/
    events: {
      '.icon-plus-sign': { click: '_handleOpenClick' }
    },

    /**
    Template for each model in the modellist

    @property itemView
    @type {Tmpl.list_item}
    **/
    itemView: 'listItemTemplate',

    /**
    @method renderLayout
    **/
    renderLayout: function () {
      var container = this.get('container');

      container.setHTML(
        Tmpl.your_lists_view()
      );
    },

    /**
    @method _handleOpenClick
    @param {EventFacade} ev
    **/
    _handleOpenClick: function (ev) {
      ev.preventDefault();
      var target = ev.currentTarget;

      target.ancestor('li').toggleClass('open');
    }
  },
  {
    ATTRS: {
      /**
      @attribute listItemTemplate
      @type {Function}
      **/
      listItemTemplate: {
        value: Tmpl.your_lists_item
      },

      /**
      @attribute modelList
      @type {ModelList}
      **/
      modelList: {
        valueFn: function () {
          return new Y.ModelList({
            items: [
              { name: 'The plant list' },
              { name: 'The universe domination list' },
              { name: 'The smelly cat list' }
            ]
          })
        }
      }
    }
  });

  Y.namespace('GREAT').YourListsView = YourListsView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'model-list'
  ]
});

