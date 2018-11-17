import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDetailComponent } from './view-child-detail.component';

describe('ViewChildDetailComponent', () => {
  let component: ViewChildDetailComponent;
  let fixture: ComponentFixture<ViewChildDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
