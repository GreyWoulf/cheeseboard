const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index')

describe('Cheese Board database', () => {

  beforeAll(async() => {
    await sequelize.sync({force: true})
  })
  test('can create user', async () => {
    const testUser = await User.create({name: 'Grey', email: 'code@mutliverse'});
    expect(testUser.name)
  })
})