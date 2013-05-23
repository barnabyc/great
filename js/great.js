YUI().use('great:views:list', function (Y) {

  var listView = new Y.GREAT.ListView(),
      container = Y.one('#great');

  container.setHTML( listView.render().get('container') );

});