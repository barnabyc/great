YUI.add('great:views:lists', function (Y) {

  var ListsView = Y.Base.create('great:listsView',
    Y.View,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<div class="lists-view" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      'a': { click: '_handleItemClick' }
    },

    /**
    @method render
    **/
    render: function () {
      var container = this.get('container');

      container.setHTML(
        Tmpl.lists_view({
          title: this.get('title')
        })
      );

      return this;
    },


    /**
    @param {EventFacade} ev
    **/
    _handleItemClick: function (ev) {
      ev.preventDefault();
      var target = ev.currentTarget;

      // @todo change model state here, derp and
      // then have save event render class states

      target.one('i').toggleClass('icon-check-empty').toggleClass('icon-check');
    }
  },
  {
    ATTRS: {
      /**
      @attribute title
      @type {String}
      **/
      title: {},

      /**
      @attribute modelList
      @type {ModelList}
      **/
      modelList: {}
    }
  });

  Y.namespace('GREAT').ListsView = ListsView;

},
'0.0.1',
{
  requires: [
    'view'
  ]
});

