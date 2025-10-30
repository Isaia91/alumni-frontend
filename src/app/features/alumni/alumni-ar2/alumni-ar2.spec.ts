import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAr2 } from './alumni-ar2';

describe('AlumniAr2', () => {
  let component: AlumniAr2;
  let fixture: ComponentFixture<AlumniAr2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniAr2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniAr2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
