import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium1Component } from './medium-1.component';

describe('Medium1Component', () => {
  let component: Medium1Component;
  let fixture: ComponentFixture<Medium1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medium1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Medium1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
