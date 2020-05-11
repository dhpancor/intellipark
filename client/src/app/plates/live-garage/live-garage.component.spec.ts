import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiveGarageComponent} from './live-garage.component';

describe('LiveGarageComponent', () => {
  let component: LiveGarageComponent;
  let fixture: ComponentFixture<LiveGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
