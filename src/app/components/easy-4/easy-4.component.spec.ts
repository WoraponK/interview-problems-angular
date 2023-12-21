import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Easy4Component } from './easy-4.component';

describe('Easy4Component', () => {
  let component: Easy4Component;
  let fixture: ComponentFixture<Easy4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Easy4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Easy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
