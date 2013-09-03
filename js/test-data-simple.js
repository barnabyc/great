//=FEMOCK
var testData = [
  {                                      // ToDos
    id: 'abc123',
    title: 'The plant list',
    categories: ['garden'],
    toDoList: [                          // ToDoList
      {                                  // ToDo
        complete: true,
        name: 'Find Hostas',
        memo: 'Try Hingham Facebook group.'
      },
      { complete: true,  name: 'Buy Hostas',      memo: 'The house on Main St is giving them away for FREE!' },
      { complete: true,  name: 'Get shovel back', memo: 'Distract Dennis to steal my shovel back!'},
      { complete: false, name: 'Plant Hostas',    memo: 'Perhaps in the front left bed.' }
    ]
  },

  {
    id: 'def456',
    title: 'The universe domination list',
    categories: ['home-improvement', 'manifest-destiny'],
    toDoList: [
      { complete: true,  name: 'Plan Ultimate Machine',                memo: 'dun dun DUNNNN!!!' },
      { complete: true,  name: 'Buy spark plugs for Ultimate Machine', memo: 'I think Sears has cheap ones...' },
      { complete: false, name: 'Get wrench back',                      memo: 'Stupid Dennis! Distract him again to steal my wrench back.'},
      { complete: false, name: 'Find extension cord',                  memo: 'Better not be with Dennis...' }
    ]
  },

  {
    id: 'ghi789',
    title: 'The smelly cat list',
    categories: ['pets'],
    toDoList: [
      { complete: true,  name: 'Rescue Cat',                            memo: 'Mr. Wuffles at Old Derby Shelter was adorable.' },
      { complete: false, name: 'Dunk Cat in Chem bath',                 memo: 'Are cats supposed to be dunked?' },
      { complete: false, name: 'Build Cat fort',                        memo: 'Mr. Wuffles needs a proper home if he\'s going to dominate the universe by my side.'},
      { complete: false, name: 'Determine if Cat is smelly on purpose', memo: 'Perhaps enjoys smelling this bad... ?' }
    ]
  }
];
