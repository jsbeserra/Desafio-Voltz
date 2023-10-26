import { ApplicationHandler } from '@application/applicationHandle'
import handleError from '@main/errors/handleError'
import { ControllerOperation, HttpRequest, HttpResponse } from '@main/http/ports'
import { created } from '@main/http/util'

export class DepositController implements ControllerOperation {
	readonly requiredParams: string[] = [ 'value', 'payer_cpf', 'receiver_cpf']
	private command: ApplicationHandler

	constructor(command: ApplicationHandler) {
		this.command = command
	}

	async operation(request: HttpRequest): Promise<HttpResponse> {
		try {
			const result = await this.command.handle(request.body)
			return created(result)
		} catch (err: any) {
			return handleError(err)
		}
	}

}