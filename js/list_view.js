YUI.add('great:views:list', function (Y) {

  var ListView = Y.Base.create('great:listView',
    Y.Lib.ListView,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<div class="list-view" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      'input' : {
        change  : '_handleChange'
      }
    },

    /**
    Template for each model in the modellist

    @property itemView
    @type {Tmpl.list_item}
    **/
    itemView: 'listItemTemplate',

    /**
    The container the items should render into.

    @property listContainerSelector
    @type {String}
    **/
    listContainerSelector: 'ul',

    /**
    @method renderLayout
    **/
    renderLayout: function () {
      var container = this.get('container');

      container.setHTML(
        Tmpl.list_view({
          title: this.get('title')
        })
      );

      container.all('.tabitha').each(function(t){
        t.on('focus', this._handleFocus, this);
        // t.on('blur', this._handleBlur, this);
      }, this);
    },

    /**
    @method _handleFocus
    @param {EventFacade} ev
    **/
    _handleFocus: function (ev) {
      var target = ev.currentTarget,
          tabindex = target.getAttribute('tabindex'),
          container = this.get('container');

      Y.log('_handleFocus, tabindex: '+tabindex, 'debug', this.constructor.NAME);

      if (tabindex == 9999) container.one('input').focus();
      else container.all('input').pop().focus();
    },

    /**
    @method _handleBlur
    @param {EventFacade} ev
    **/
    _handleBlur: function (ev) {
      var target = ev.currentTarget;

      Y.log('_handleBlur', 'debug', this.constructor.NAME);
    },

    /**
    @method _handleChange
    @param {EventFacade} ev
    **/
    _handleChange: function (ev) {
      var target = ev.currentTarget,
          value  = target.get('value');

      Y.log('_handleChange', 'debug', this.constructor.NAME);

      target.toggleClass('populated', !!value);
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
      @attribute listItemTemplate
      @type {Function}
      **/
      listItemTemplate: {
        value: Tmpl.list_item
      },

      /**
      @attribute modelList
      @type {ModelList}
      **/
      modelList: {
        valueFn: function () {
          return new Y.ModelList({
            items: [
              { name: 'Do that thing with that stuff' },
              { name: 'Plant the doodads' },
              { name: 'Fly the kite' }
            ]
          })
        }
      }
    }
  });

  Y.namespace('GREAT').ListView = ListView;

},
'0.0.1',
{
  requires: [
    'views:lib:list',
    'model-list'
  ]
});
