const lists = require('../src/lists.js');

console.log(lists);

describe( 'lists', () => {
  test('group Default gets created on module load', () => {
    expect( lists.getDefaultGroup().data ).toEqual( {} );
  }); 
});


describe( 'Group', () => {
  test('groupFactory works', () => {
    expect( lists.groupFactory( {name: 'First group'} )).toMatchObject({
      data: {name: 'First group'},
      addItem: expect.any( Function ),
      removeItem: expect.any( Function )
    });
  });

  let group2 = lists.groupFactory( {name: "Group2"} );
  test( 'getGroupWithId yields right group', () => {
    expect( lists.getGroupWithId( group2.id ) ).toEqual( group2 );
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
  let group3 = lists.groupFactory( {name: "Group3"} );

  test( 'adds Item to the Group', () => {
    group3.addItem( item3 );
    expect( group3.getItemWithId( item3.id ) ).toEqual( item3 );
  });

  test( 'adds more Items ', () => {
    group3.addItem( item2 );
    expect( group3.items.length ).toBe( 2 );
  });

  test( 'group Default contains right amount of Items', () => {
    expect( lists.getDefaultGroup().items.length ).toBe(2);
  }); 
  

});


