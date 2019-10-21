import { async, TestBed } from '@angular/core/testing';
import { FeatSecurePageModule } from './feat-secure-page.module';

describe('FeatSecurePageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatSecurePageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatSecurePageModule).toBeDefined();
  });
});
