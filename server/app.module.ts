import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import bootstrap from '../src/main.server';

@Module({
    imports: [
        AngularUniversalModule.forRoot({
            bootstrap,
            viewsPath: join(process.cwd(), 'dist/cv/browser'),
        }),
    ],
})
export class AppModule {}
