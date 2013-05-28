YUI().use(
  'great:views:list',
  'great:views:lists',
  function (Y) {

  var yourListsView = new Y.GREAT.ListsView({
        title: 'Your Lists'
      }),
      listView = new Y.GREAT.ListView(),
      great    = Y.one('#great'),
      footer   = Y.one('footer');

  great.append(
    yourListsView.render().get('container')
  );

  // ---

  footer.append(
    listView.render().get('container')
  );

});
