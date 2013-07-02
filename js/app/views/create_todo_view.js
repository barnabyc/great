YUI.add('great:views:create_todo', function (Y) {

  var CreateToDoView = Y.Base.create('great:createToDoView',
    Y.View,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<li class="create-todo" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      'a': { click: '_handleClick' }
    },

    /**
    @method renderLayout
    **/
    render: function () {
      Y.log(this.constructor.NAME);

      var container = this.get('container'),
          tmpl      = Tmpl['create_todo'];

      container.setHTML( tmpl() );

      return this;
    },

    /**
    @method createToDo
    **/
    createToDo: function () {
      var input = this.get('container').one('input'),
          value = input.get('value');

      this.fire('create', {todo: {name: value}});

      input.ancestor().addClass('refresh');
    },

    /**
    @method _handleOpenClick
    @param {EventFacade} ev
    **/
    _handleClick: function (ev) {
      ev.preventDefault();

      Y.log('clicked', 'debug', this.constructor.NAME);

      this.createToDo();
    }
  },
  {
    ATTRS: { }
  });

  Y.namespace('GREAT').CreateToDoView = CreateToDoView;

},
'0.0.1',
{
  requires: [
    'view'
  ]
});

