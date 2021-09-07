import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatenolinkComponent } from './certificatenolink.component';

describe('CertificatenolinkComponent', () => {
  let component: CertificatenolinkComponent;
  let fixture: ComponentFixture<CertificatenolinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatenolinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatenolinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
