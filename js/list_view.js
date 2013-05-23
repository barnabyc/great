YUI.add('great:views:list', function (Y) {

  var ListView = Y.Base.create('great:listView',
    Y.View,
    [],
  {
    /**
    @property containerTemplate
    @type {String}
    **/
    containerTemplate: '<div class="great-list" />',

    /**
    @property events
    @type {Object}
    **/
    events: {
      'input' : {
        change  : '_handleChange'
      }
    },

    render: function () {
      var container = this.get('container');

      container.setHTML(
        '<div class="tabitha" tabindex="1"></div>' +
        '<ul> \
          <li> \
            <form><input tabindex="10" type="text" placeholder="Become queen of the universe"></form> \
          </li> \
          <li> \
            <form><input tabindex="20" type="text" placeholder="Conquer distant galaxies"></form> \
          </li> \
          <li> \
            <form><input class="populated" tabindex="30" type="text" placeholder="Rule with an iron fist" value="Write the great French treatise"></form> \
          </li> \
          <li> \
            <form><input tabindex="40" type="text" placeholder="Control the fundamental forces"></form> \
          </li> \
        </ul>'
        + '<div class="tabitha" tabindex="9999"></div>'
      );

      container.all('.tabitha').each(function(t){
        t.on('focus', this._handleFocus, this);
        // t.on('blur', this._handleBlur, this);
      }, this);

      return this;
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
      var target = ev.currentTarget;

      Y.log('_handleChange', 'debug', this.constructor.NAME);

      if (target.get('value')) target.addClass('populated');
    }
  },
  {
    ATTRS: {
      // Great Blankness
    }
  });

  Y.namespace('GREAT').ListView = ListView;

},
'0.0.1',
{
  requires: [
    'view'
  ]
});
