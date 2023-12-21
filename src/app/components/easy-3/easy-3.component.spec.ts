import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Easy3Component } from './easy-3.component';

describe('Easy3Component', () => {
  let component: Easy3Component;
  let fixture: ComponentFixture<Easy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Easy3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Easy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
