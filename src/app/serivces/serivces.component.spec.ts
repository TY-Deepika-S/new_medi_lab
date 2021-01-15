import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerivcesComponent } from './serivces.component';

describe('SerivcesComponent', () => {
  let component: SerivcesComponent;
  let fixture: ComponentFixture<SerivcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerivcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerivcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
