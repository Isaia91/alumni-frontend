import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniList } from './alumni-list';

describe('AlumniList', () => {
  let component: AlumniList;
  let fixture: ComponentFixture<AlumniList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
