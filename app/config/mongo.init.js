db = db.getSiblingDB('productdb');

db.createUser({
  user: 'root',
  pwd: 'example',
  roles: [
    {
      role: 'dbOwner',
      db: 'productdb',
    },
  ],
});
