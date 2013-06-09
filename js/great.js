YUI().use(
  'great:models:your_lists',
  'great:models:your_list',
  'great:views:your_lists',
  'great:views:brief_lists',
  'great:views:brief_list',
  'great:views:brief_list_item',
  function (Y) {

  var great    = Y.one('#great'),
      // footer   = Y.one('footer'),
      list1,
      list2,
      list3,
      yourLists,
      yourListsView;

  list1 = new Y.GREAT.YourList({
    url: '/abc/123',
    title: 'The plant list',
    items: [
      { complete: true,  name: 'Find Hostas',     memo: 'Try Hingham Facebook group.' },
      { complete: true,  name: 'Buy Hostas',      memo: 'The house on Main St is giving them away for FREE!' },
      { complete: true,  name: 'Get shovel back', memo: 'Distract Dennis to steal my shovel back!'},
      { complete: false, name: 'Plant Hostas',    memo: 'Perhaps in the front left bed.' }
    ]
  });

  list2 = new Y.GREAT.YourList({
    url: '/def/456',
    title: 'The universe domination list',
    items: [
      { complete: true,  name: 'Plan Ultimate Machine',                memo: 'dun dun DUNNNN!!!' },
      { complete: true,  name: 'Buy spark plugs for Ultimate Machine', memo: 'I think Sears has cheap ones...' },
      { complete: false, name: 'Get wrench back',     memo: 'Stupid Dennis! Distract him again to steal my wrench back.'},
      { complete: false, name: 'Find extension cord', memo: 'Better not be with Dennis...' }
    ]
  });

  list3 = new Y.GREAT.YourList({
    url: '/ghi/789',
    title: 'The smelly cat list',
    items: [
      { complete: true,  name: 'Rescue Cat',            memo: 'Mr. Wuffles at Old Derby Shelter was adorable.' },
      { complete: false, name: 'Dunk Cat in Chem bath', memo: 'Are cats supposed to be dunked?' },
      { complete: false, name: 'Build Cat fort',        memo: 'Mr. Wuffles needs a proper home if he\'s going to dominate the universe by my side.'},
      { complete: false, name: 'Determine if Cat is smelly on purpose', memo: 'Perhaps enjoys smelling this bad... ?' }
    ]
  });

  // yourLists = new Y.GREAT.YourLists({
  //   items: [ list1, list2, list3 ]
  // });

  // yourListsView = new Y.GREAT.YourListsView({
  //   modelList: yourLists
  // });

  // great.append(
  //   yourListsView.render().get('container')
  // );

  great.append(
    new Y.GREAT.BriefListItemView({
      model: list1.item(0)
    }).render().get('container')
  );

  great.append('<hr>');

  great.append(
    new Y.GREAT.BriefListView({
      modelList: list1
    }).render().get('container')
  );

  great.append('<hr>');

  great.append(
    new Y.GREAT.BriefListsView({
      modelList: new Y.ArrayList([
        list1, list2, list3
      ])
    }).render().get('container')
  );

});
