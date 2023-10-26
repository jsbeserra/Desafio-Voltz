import CreatePixKey from '@application/command/create-pix-key/create-pix-key'
import AccountRepositoryTypeOrm from '@infra/repository/Accout-repository-typeorm'
import BankRepositoryTypeOrm from '@infra/repository/bank-repository-typeorm'
import PixKeyRepositoryTypeOrm from '@infra/repository/pix-key-repository-typeorm'
import TypeOrmHelperAdpterPostgress from '@main/data-base/typeorm/typeorm-adpter-postgres'


export const MakeCreatePixKeyCommandFactory = (): CreatePixKey => {
	const databaseconnection = TypeOrmHelperAdpterPostgress.instance()
	const accountRepository = new AccountRepositoryTypeOrm(databaseconnection)
	const bankRepository = new BankRepositoryTypeOrm(databaseconnection)
	const pixKeyRepositoryTypeOrm = new PixKeyRepositoryTypeOrm(databaseconnection)
	return new CreatePixKey(accountRepository,bankRepository,pixKeyRepositoryTypeOrm)
}