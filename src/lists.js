const lists = (() => {

  let _id = 0; //vid is an id not to be mislead with database id, its used 
                //for a purpose of identyfying / referencing, eg. in user iface
  const uniqueId = () => {
    return _id++;
  }



  const _defaultGroupId = uniqueId();
  const _groups = {};

  const getDefaultGroup = () => {
    return _groups[ _defaultGroupId ];
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
      //if adding to other group than Default
      if( _id != _defaultGroupId ) {
        getDefaultGroup().removeItem( i );
      }

      //adding to the group
      if( !_items.includes( i ) ) _items.push( i );
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
  _groups[ _defaultGroupId ] = groupFactory( {} );



  //
  //
  // ITEM
  //
  //
  const itemFactory = ( data ) => {
    const _id = uniqueId();
    const _data = data;

    const result = {
      get id() {
        return _id;
      },
      get data() {
        return _data;
      }
    }
    //each item is added to the group ALL
    getDefaultGroup().addItem( result );
    

    return result;
  }


  return {
    get all() {
      return _groups;
    },
    getDefaultGroup,
    getGroupWithId,
    itemFactory, 
    groupFactory
  };

})();


//window.lists = lists;

module.exports = lists;