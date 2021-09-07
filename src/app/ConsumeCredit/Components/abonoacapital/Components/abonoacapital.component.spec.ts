import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoacapitalComponent } from './abonoacapital.component';

describe('AbonoacapitalComponent', () => {
  let component: AbonoacapitalComponent;
  let fixture: ComponentFixture<AbonoacapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoacapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoacapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
