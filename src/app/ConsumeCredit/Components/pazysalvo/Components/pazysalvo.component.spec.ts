import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PazysalvoComponent } from './Pazysalvo.component';

describe('PazysalvoComponent', () => {
  let component: PazysalvoComponent;
  let fixture: ComponentFixture<PazysalvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PazysalvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PazysalvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
