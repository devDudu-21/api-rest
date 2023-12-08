const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luiz',
        email: 'luiz@email.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Armando',
        email: 'armando@email.com',
        password_hash: await bcryptjs.hash('87654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Davi',
        email: 'davi@email.com',
        password_hash: await bcryptjs.hash('135792468', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

    ],
    {},
  ),

  down: () => { },

};
