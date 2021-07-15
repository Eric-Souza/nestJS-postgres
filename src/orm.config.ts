import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
	type: 'postgres',
	host: '127.0.0.1',
	port: 5432,
	username: 'postgres',
	password: 'fefa4fb96d834a539044cab3607ad265',
	database: 'restfulapiDB',
	entities: ['dist/**/*.entity{.ts,.js}'],
	synchronize: true
}