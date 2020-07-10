import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsGroupFormComponent } from './ingredients-group-form.component';

describe('IngredientsGroupFormComponent', () => {
  let component: IngredientsGroupFormComponent;
  let fixture: ComponentFixture<IngredientsGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
