import { User } from "./user"

describe('Create user', () => {
    test('it should be able to create a new user', () => {
        const user = new User({
            email: 'teste@gmail.com',
            id: 'asasdasdasdasd',
            name: 'teste',
            photo: 'http://teste.com'
        })

        expect(user).toBeTruthy()
    })

    test('it should not be able to create a user without name', () => {
        expect(() => new User({
            email: 'teste@gmail.com',
            id: 'asasdasdasdasd',
            name: '',
            photo: 'http://teste.com'
        })).toThrow()
    })

    test('it should not be able to create a user without id', () => {
        expect(() => new User({
            email: 'teste@gmail.com',
            id: '',
            name: 'teste',
            photo: 'http://teste.com'
        })).toThrow()
    })

    test('it should not be able to create a user without email', () => {
        expect(() => new User({
            email: '',
            id: 'asdasdasd',
            name: 'teste',
            photo: 'http://teste.com'
        })).toThrow()
    })
})