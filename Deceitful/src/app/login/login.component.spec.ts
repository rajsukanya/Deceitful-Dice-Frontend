import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents(); // compiles template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.componentInstance;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Unit Testing!');
  }));
  
//   it('should call login', () => {
//     spyOn(component, "login");

//     let button: HTMLSelectElement = fixture.debugElement.query(By.css('#loginButton')).nativeElement;
//     button.click(); 

//     expect(component.login).toHaveBeenCalled();

// });

});
