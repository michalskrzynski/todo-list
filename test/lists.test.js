const lists = require('../src/lists.js');

console.log(lists);

describe( 'Group', () => {
  test('groupFactory works', () => {
    expect( lists.groupFactory( {name: 'First group'} )).toMatchObject({
      data: {name: 'First group'},
      addItem: expect.any( Function ),
      removeItem: expect.any( Function )
    });
  });

}); 


describe( 'Item', () => {
  
  test('itemFactory works', () => {
    expect( lists.itemFactory( {
      title: "Item1",
      description: "With some description",
    }) ).toMatchObject({
      data: {
        title: "Item1",
        description: "With some description"
      }
      //toggleComplete: expect.any(Function)
    });
  });

});


describe( 'Item <=> Group relation', () => {

  let item2 = lists.itemFactory( {title: "Item2"} );
  let item3 = lists.itemFactory( {title: "Item3"} );
  let item4 = lists.itemFactory( {title: "Item4"} );
  let group2 = lists.groupFactory( {name: "Group2"} );
  console.log( lists.getGroupWithId( group2.id ) );

  test( 'adding to group works', () => {
    group2.addItem( item2 );
    expect( lists.getGroupWithId( group2.id ) ).toEqual( group2 );
  });

});


