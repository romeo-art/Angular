import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliBindingComponent } from './cli-binding.component';

describe('CliBindingComponent', () => {
  let component: CliBindingComponent;
  let fixture: ComponentFixture<CliBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
