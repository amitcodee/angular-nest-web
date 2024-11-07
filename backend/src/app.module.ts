/* eslint-disable prettier/prettier */
// src/app.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ItemsModule } from './items/items.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root', // Default username in XAMPP
//       password: '', // Default password in XAMPP (usually empty)
//       database: 'nest',
//       autoLoadEntities: true,
//       synchronize: true, // Only for development; disable in production
//     }),
//     ItemsModule,
//   ],
// })
// export class AppModule {}
// src/app.module.ts
// 
// postgraph
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Change this to 'postgres' for PostgreSQL
      host: 'localhost', // Use your PostgreSQL server's host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Replace with your PostgreSQL username
      password: '123', // Replace with your PostgreSQL password
      database: 'nest-db', // Replace with your PostgreSQL database name
      autoLoadEntities: true,
      synchronize: true, // Enable for development only
    }),
    ItemsModule,
  ],
})
export class AppModule {}
