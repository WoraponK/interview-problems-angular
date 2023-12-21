import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Easy1Component } from './easy-1.component';

describe('Easy1Component', () => {
  let component: Easy1Component;
  let fixture: ComponentFixture<Easy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Easy1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Easy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
