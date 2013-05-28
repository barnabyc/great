YUI().use(
  'great:views:list',
  'great:views:lists',
  function (Y) {

  var yourListsView = new Y.GREAT.ListsView({
        title: 'Your Lists'
      }),
      taggedYouListsView = new Y.GREAT.ListsView({
        title: "Lists You're Tagged In"
      }),
      listView  = new Y.GREAT.ListView(),
      left   = Y.one('#great .left'),
      right  = Y.one('#great .right'),
      bottom = Y.one('#great .bottom');

  left.append(
    yourListsView.render().get('container')
  );

  right.append(
    taggedYouListsView.render().get('container')
  );

  // ---

  bottom.append(
    listView.render().get('container')
  );

});
