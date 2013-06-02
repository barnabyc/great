YUI().use(
  'great:views:list',
  'great:views:lists',
  'great:views:your_lists',
  function (Y) {

  var yourListsView = new Y.GREAT.YourListsView(),
      listView = new Y.GREAT.ListView(), //=FEMOCK
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
