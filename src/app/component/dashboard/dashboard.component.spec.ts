import { ComponentFixture, async, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatMenuModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
    });
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name in a span tag', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Bookstore');
  });

  it('should render class in a cart class', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cart').textContent).toContain('cart');
  });

  it('should', async(() => {
    spyOn(component, 'home');
  
    let button = fixture.debugElement.nativeElement.querySelector('.text');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.home).toHaveBeenCalled();
    });
  }));

  it('should', fakeAsync(() => {
    spyOn(component, 'home');
  
    let button = fixture.debugElement.nativeElement.querySelector('.text');
    button.click();
    tick();
    expect(component.home).toHaveBeenCalled();
  
  }));

  // it('should', fakeAsync(() => {
  //   spyOn(component, 'searchTitle');
  
  //   let button = fixture.debugElement.nativeElement.querySelector('.search');
  //   button.click();
  //   tick();
  //   expect(component.searchTitle).toHaveBeenCalled();
  
  // }));

  // it('shoulds', fakeAsync(() => {
  //   spyOn(component, 'myCart');
  
  //   let button = fixture.debugElement.nativeElement.querySelector('.mat-menu button.mat-menu-item');
  //   button.click();
  //   tick();
  //   expect(component.myCart).toHaveBeenCalled();
  
  // }));

});
