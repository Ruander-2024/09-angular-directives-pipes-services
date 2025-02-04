import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAppComponent } from './listing-app.component';

describe('ListingAppComponent', () => {
  let component: ListingAppComponent;
  let fixture: ComponentFixture<ListingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
