import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsitterinfoComponent } from './dogsitterinfo.component';

describe('DogsitterinfoComponent', () => {
  let component: DogsitterinfoComponent;
  let fixture: ComponentFixture<DogsitterinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsitterinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsitterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
