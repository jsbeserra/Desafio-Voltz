
import { usecase } from '@application/usecase/usecase'
import handleError from '@main/errors/handleError'
import { ControllerOperation, HttpRequest, HttpResponse } from '@main/http/ports'
import { created } from '@main/http/util'

export class CreatePixKeyController implements ControllerOperation {
	readonly requiredParams: string[] = [ 'bank_id', 'cpf', 'pix_key']
	private usecase: usecase
	
	constructor(usecase: usecase) {
		this.usecase = usecase
	}

	async operation(request: HttpRequest): Promise<HttpResponse> {
		try {
			const result = await this.usecase.handle(request.body)
			return created(result)
		} catch (err: any) {
			return handleError(err)
		}
	}

}