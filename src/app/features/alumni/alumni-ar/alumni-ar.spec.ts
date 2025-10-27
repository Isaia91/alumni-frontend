import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAr } from './alumni-ar';

describe('AlumniAr', () => {
  let component: AlumniAr;
  let fixture: ComponentFixture<AlumniAr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniAr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
