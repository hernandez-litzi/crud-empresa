import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentosController } from './departamento.controller';
import { DepartamentosService } from './departamento.service';

describe('DepartamentosController', () => {
  let controller: DepartamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentosController],
      providers: [DepartamentosService],
    }).compile();

    controller = module.get<DepartamentosController>(DepartamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
