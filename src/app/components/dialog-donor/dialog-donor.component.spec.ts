import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDonorComponent } from './dialog-donor.component';

describe('DialogDonorComponent', () => {
  let component: DialogDonorComponent;
  let fixture: ComponentFixture<DialogDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDonorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
