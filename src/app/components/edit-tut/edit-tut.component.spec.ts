import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTutComponent } from './edit-tut.component';

describe('EditTutComponent', () => {
  let component: EditTutComponent;
  let fixture: ComponentFixture<EditTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
