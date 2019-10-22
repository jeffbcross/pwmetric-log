import { async, TestBed } from '@angular/core/testing';
import { FeatAuthModule } from './feat-auth.module';

describe('FeatAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatAuthModule).toBeDefined();
  });
});
