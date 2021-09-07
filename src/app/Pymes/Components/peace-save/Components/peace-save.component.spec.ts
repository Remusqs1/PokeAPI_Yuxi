import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaceSaveComponent } from './peace-save.component';

describe('PeaceSaveComponent', () => {
  let component: PeaceSaveComponent;
  let fixture: ComponentFixture<PeaceSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeaceSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeaceSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
