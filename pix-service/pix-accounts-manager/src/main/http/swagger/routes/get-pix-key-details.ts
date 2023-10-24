import { http400 } from '../errors/http-400'
import { http500 } from '../errors/http-500'

export const GetPixKeyDetails = {
	'/pixkey/details/{pixkey}': {
		'get': {
			'summary': 'Busca dados de uma conta pix',
			'tags': [
				'PixKey'
			],
			'parameters': [
				{
					'in': 'path',
					'name': 'pixkey',
					'required': true,
					'schema': {
						'type': 'string'
					}
				}
			],
			'responses': {
				'200': {
					'description': '',
					'content': {
						'application/json': {
							'schema': {
								'type': 'object',
								'properties': {
									'cpf': {
										'type': 'string',
										'example': 'string'
									},
									'pix_key': {
										'type': 'string',
										'example': 'string'
									}
								}
							}
						}
					}
				},
				...http400,
				...http500
			}
		}
	}
}