import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankUpdateFormComponent } from './bank-update-form.component';

describe('BankUpdateFormComponent', () => {
  let component: BankUpdateFormComponent;
  let fixture: ComponentFixture<BankUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
