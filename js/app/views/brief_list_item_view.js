YUI.add('great:views:brief_list_item', function (Y) {

  var BriefListItemView = Y.Base.create('great:briefListItemView',
    Y.View,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<ol class="brief-list" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      'a': { click: '_handleClick' }
    },

    initializer: function () {
      this.get('model').after('completeChange', this.render, this);
    },

    /**
    @method renderLayout
    **/
    render: function () {
      var container = this.get('container'),
          tmpl      = Tmpl['brief_list_item'],
          tmplVars  = this.get('model').toJSON();

      container.setHTML( tmpl( tmplVars ) );

      return this;
    },

    /**
    @method _handleOpenClick
    @param {EventFacade} ev
    **/
    _handleClick: function (ev) {
      ev.preventDefault();

      var complete = !this.get('model').get('complete');

      this.get('model').set('complete', complete);
    }
  },
  {
    ATTRS: {
      /**
      @attribute model
      @type {GREAT.YourListItem}
      **/
      model: {}
    }
  });

  Y.namespace('GREAT').BriefListItemView = BriefListItemView;

},
'0.0.1',
{
  requires: [
    'view'
  ]
});

