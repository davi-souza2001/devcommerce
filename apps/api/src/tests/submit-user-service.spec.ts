import { SubmitUserService } from '../services/user/submit-user-service'

const createUserSpy = jest.fn();

const submitUser = new SubmitUserService(
	{
		create: createUserSpy,
	}
)

describe('Tests for user', () => {
	it('Should be able to submit a user', async () => {
		await expect(submitUser.executeCreate({ name: 'Davi Souza' })).resolves.not.toThrow();

		expect(createUserSpy).toHaveBeenCalled();
	})
})
