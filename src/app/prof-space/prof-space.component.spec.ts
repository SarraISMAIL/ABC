import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSpaceComponent } from './prof-space.component';

describe('ProfSpaceComponent', () => {
  let component: ProfSpaceComponent;
  let fixture: ComponentFixture<ProfSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
