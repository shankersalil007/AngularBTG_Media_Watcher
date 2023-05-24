import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMediaItemComponent } from './input-media-item.component';

describe('InputMediaItemComponent', () => {
  let component: InputMediaItemComponent;
  let fixture: ComponentFixture<InputMediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMediaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
