/* eslint-disable prettier/prettier */
// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Default username in XAMPP
      password: '', // Default password in XAMPP (usually empty)
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true, // Only for development; disable in production
    }),
    ItemsModule,
  ],
})
export class AppModule {}
