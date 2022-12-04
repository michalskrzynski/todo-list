const lists = (() => {

  let _id = 0; //vid is an id not to be mislead with database id, its used 
                //for a purpose of identyfying / referencing, eg. in user iface
  const uniqueId = () => {
    return _id++;
  }

  let _allGroupId = uniqueId();


  const _groups = {};


  const getGroupAll = () => {
    return _groups[ _allGroupId ];
  }

  const getGroupWithId = (id) => {
    return _groups[ id ];
  }

  //
  //
  // GROUP
  //
  //
  const groupFactory = ( data ) => {
    
    const _id = uniqueId();
    const _items = [];
    const _data = data;


    const addItem = ( i ) => {
      //adding to the group
      if( !_items.includes( i )) _items.push( i );
      return this;
    }

    const contains = ( i ) => _items.includes( i );

    const removeItem = ( i ) => {
      if( _items.includes( i ) ) _items.splice( _items.indexOf( i ), 1 ); 
      return this;
    }

    const getItemWithId = ( id ) => {
      return _items.find( i => i.id === id );
    } 


    const result = {
      get id() {
        return _id;
      },
      get data() {
        return _data;
      },
      get items() {
        return _items;
      },
      addItem, 
      contains, 
      removeItem,
      getItemWithId
    }
    _groups[ _id ] = result;


    return result;
  }



  // creating first group 'all'
  !_groups[ _allGroupId ] ? _groups[ _allGroupId ] = groupFactory( {name: 'All'} ) : 1;



  //
  //
  // ITEM
  //
  //
  const itemFactory = ( data ) => {
    const _id = uniqueId();
    const _data = data;

    //each item is added to the group ALL
    _groups[ _allGroupId ].addItem( this );

    return {
      get data() {
        return _data;
      }
    }
  }


  return {
    get all() {
      return _groups;
    },
    getGroupAll,
    getGroupWithId,
    itemFactory, 
    groupFactory
  };

})();


//window.lists = lists;

module.exports = lists;