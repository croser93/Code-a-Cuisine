import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingTemplatComponent } from './cooking-templat-component';

describe('CookingTemplatComponent', () => {
  let component: CookingTemplatComponent;
  let fixture: ComponentFixture<CookingTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingTemplatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
