import { Test, TestingModule } from '@nestjs/testing';
import { EasyController } from './easy.controller';
import { EasyService } from './easy.service';

describe('EasyController', () => {
  let easyController: EasyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EasyController],
      providers: [EasyService],
    }).compile();

    easyController = app.get<EasyController>(EasyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(easyController.getHello()).toBe('Hello World!');
    });
  });
});
