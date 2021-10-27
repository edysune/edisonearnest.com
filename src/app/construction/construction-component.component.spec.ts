import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionComponentComponent } from './construction-component.component';

describe('ConstructionComponentComponent', () => {
  let component: ConstructionComponentComponent;
  let fixture: ComponentFixture<ConstructionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
