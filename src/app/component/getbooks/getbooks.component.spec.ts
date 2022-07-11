import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { GetbooksComponent } from './getbooks.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/Pipe/filter.pipe';



describe('GetbooksComponent', () => {
  let component: GetbooksComponent;
  let fixture: ComponentFixture<GetbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule, NgxPaginationModule], 
      declarations: [ GetbooksComponent, FilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
