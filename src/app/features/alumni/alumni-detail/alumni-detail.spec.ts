import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDetail } from './alumni-detail';

describe('AlumniDetail', () => {
  let component: AlumniDetail;
  let fixture: ComponentFixture<AlumniDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
