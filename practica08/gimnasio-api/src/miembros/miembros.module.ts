import { Module } from '@nestjs/common';
import { MiembrosService } from './miembros.service';
import { MiembrosController } from './miembros.controller';
import { MIEMBROS_REPOSITORY } from './miembros.tokens';
import { MiembroMemoriaRepository } from './infra/miembro-memoria.repository';

@Module({
  controllers: [MiembrosController],
  providers: [MiembrosService,
    {
      provide: MIEMBROS_REPOSITORY,
      useClass: MiembroMemoriaRepository
    }
  ],
})
export class MiembrosModule {}
