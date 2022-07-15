import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MyCartComponent } from './my-cart.component';

import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule, FormsModule, ReactiveFormsModule], 
      declarations: [ MyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should', fakeAsync(() => {
    spyOn(component, 'order');
  
    let button = fixture.debugElement.nativeElement.querySelector('.order');
    button.click();
    tick();
    expect(component.order).toHaveBeenCalled();
  
  }));

  it('should render class in a Card21 class', () => {
    const fixture = TestBed.createComponent(MyCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card21').textContent).toContain('Address Details');
  });
});
