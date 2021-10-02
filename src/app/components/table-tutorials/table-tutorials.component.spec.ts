import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTutorialsComponent } from './table-tutorials.component';

describe('TableTutorialsComponent', () => {
  let component: TableTutorialsComponent;
  let fixture: ComponentFixture<TableTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
