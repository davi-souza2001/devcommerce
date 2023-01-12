import { User } from "./user"

describe('Create user', () => {
    test('it should be able to create a new user', () => {
        expect(new User({
            email: 'teste@gmail.com',
            name: 'teste',
        })).toBeTruthy()
    })

    test('it should not be able to create a user without name', () => {
        expect(() => new User({
            email: 'teste@gmail.com',
            name: '',
        })).toThrow()
    })

    test('it should not be able to create a user without email', () => {
        expect(() => new User({
            email: '',
            id: 'asdasdasd',
            name: 'teste',
        })).toThrow()
    })
})
