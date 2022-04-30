import { Test, TestingModule } from '@nestjs/testing';
import { ManagementController } from './management.controller';
import { ManagementService } from './management.service';

describe('ManagementController', () => {
  let managementController: ManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManagementController],
      providers: [ManagementService],
    }).compile();

    managementController = app.get<ManagementController>(ManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(managementController.getHello()).toBe('Hello World!');
    });
  });
});
