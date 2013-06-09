YUI.add('great:views:todo', function (Y) {

  var ToDoView = Y.Base.create('great:toDoView',
    Y.View,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<li class="todo" />',

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
          tmpl      = Tmpl['todo'],
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
      @type {GREAT.ToDo}
      **/
      model: {}
    }
  });

  Y.namespace('GREAT').ToDoView = ToDoView;

},
'0.0.1',
{
  requires: [
    'view'
  ]
});

