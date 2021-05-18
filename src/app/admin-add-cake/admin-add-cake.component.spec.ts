import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCakeComponent } from './admin-add-cake.component';

describe('AdminAddCakeComponent', () => {
  let component: AdminAddCakeComponent;
  let fixture: ComponentFixture<AdminAddCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
