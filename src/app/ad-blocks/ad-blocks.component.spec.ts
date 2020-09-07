import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBlocksComponent } from './ad-blocks.component';

describe('AdBlocksComponent', () => {
  let component: AdBlocksComponent;
  let fixture: ComponentFixture<AdBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
