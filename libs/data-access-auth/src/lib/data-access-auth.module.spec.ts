import { async, TestBed } from '@angular/core/testing';
import { DataAccessAuthModule } from './data-access-auth.module';

describe('DataAccessAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessAuthModule).toBeDefined();
  });
});
