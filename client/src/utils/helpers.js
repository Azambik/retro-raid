export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  export function idbPromise( storeName, method, object) {
    return new Promise((resolve, reject) => {
      //open connection to the database'retro-raid
      const request = window.indexedDB.open('retro-raid', 1);
      //create variable to hold reference to the database, transaction (tx) and object store
      let db, tx, store;
      // if virsion has changed or if this is the first time using the database, run this method and create stores
      request.onupgradeneeded = function(e) {
        const db = request.result;
        // creating object store for data and set 'primary' key index to be the '-id' of the data
        db.createObjectStore('posts', {KeyPath: '_id'});
        db.createObjectStore('forum', {keyPath: '_id'});
      };
      request.onerror = function(e){
        console.log('Looks like something went wrong');
    };
        request.onsuccess = function(e) {
          //save a reference of the database to the 'db' variable
          db = request.result;
          // open a transaction to do whatever we pass into ' storeName' ( must match one of the object store names)
          console.log(storeName);
          tx = db.transaction(storeName, 'readwrite');
          //save a reference to the object store
          store = tx.objectStore(storeName);

          //if there's any errors
          db.onerror = function(e) {
            console.log('error', e);
          };
          switch (method) {
            case 'put':
              store.put(object);
              resolve(object);
              break;
              case 'get':
              const all = store.getAll();
              all.onsuccess = function() {
                resolve(all.result);
              };
              break;
            case 'delete':
              store.delete(object._id);
              break;
            default:
              console.log('no valid method');
              break;
          }
          // when the transaction is complete, close the connection
          tx.oncomplete = function() {
            db.close();
          };
        };
    });
  } 