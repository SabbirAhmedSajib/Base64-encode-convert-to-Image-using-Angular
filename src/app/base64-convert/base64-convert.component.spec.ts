import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ConvertComponent } from './base64-convert.component';

describe('Base64ConvertComponent', () => {
  let component: Base64ConvertComponent;
  let fixture: ComponentFixture<Base64ConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64ConvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64ConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
