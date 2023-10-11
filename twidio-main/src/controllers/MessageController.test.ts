import { makeMockResponse } from '../__mocks__/mockResponse'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { MessageController } from './MessageController'

describe('MessageController', () => {
  it('Mostrar menssagem de boas vindas!!', async () => {
    const messageController = new MessageController()

    const request = makeMockRequest({})

    const response = makeMockResponse()

    await messageController.handle(request, response)

    expect(response.state.status).toBe(200)
    expect(response.state.json).toEqual({
      message: 'Bem vindo a TwiDio'
    })
  })
})
