import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCovidComponent } from './blog-covid.component';

describe('BlogCovidComponent', () => {
  let component: BlogCovidComponent;
  let fixture: ComponentFixture<BlogCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
