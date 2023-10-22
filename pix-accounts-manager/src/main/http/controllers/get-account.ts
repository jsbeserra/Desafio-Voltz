
import { usecase } from '@application/command/usecase'
import { ControllerOperation, HttpRequest, HttpResponse } from '../ports'
import { ok } from '../util'
import handleError from '@main/errors/handleError'

export class GetAccountController implements ControllerOperation {
	readonly requiredParams: string[] = [ 'pix_key' ]
	private usecase: usecase
	
	constructor(usecase: usecase) {
		this.usecase = usecase
	}

	async operation(request: HttpRequest): Promise<HttpResponse> {
		try {
			const result = await this.usecase.handle(request.params.pix_key)
			return ok(result)
		} catch (err: any) {
			return handleError(err)
		}
	}

}