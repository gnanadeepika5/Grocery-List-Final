import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryComponentComponent } from './grocery-component.component';

describe('GroceryComponentComponent', () => {
  let component: GroceryComponentComponent;
  let fixture: ComponentFixture<GroceryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
