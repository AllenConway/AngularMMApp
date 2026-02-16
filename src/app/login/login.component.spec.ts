import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../@core/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should mark username as required', () => {
    const usernameControl = component.loginForm.get('username');
    usernameControl?.setValue('');
    expect(usernameControl?.hasError('required')).toBeTruthy();
  });

  it('should mark password as required', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.hasError('required')).toBeTruthy();
  });

  it('should validate username minimum length', () => {
    const usernameControl = component.loginForm.get('username');
    usernameControl?.setValue('ab');
    expect(usernameControl?.hasError('minlength')).toBeTruthy();
    usernameControl?.setValue('abc');
    expect(usernameControl?.hasError('minlength')).toBeFalsy();
  });

  it('should validate password minimum length', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('12345');
    expect(passwordControl?.hasError('minlength')).toBeTruthy();
    passwordControl?.setValue('123456');
    expect(passwordControl?.hasError('minlength')).toBeFalsy();
  });

  it('should not submit if form is invalid', () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'login');
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(authService.login).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to dashboard on successful login', () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'login').and.returnValue(true);
    component.loginForm.get('username')?.setValue('testuser');
    component.loginForm.get('password')?.setValue('testpass');
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(authService.login).toHaveBeenCalledWith('testuser', 'testpass');
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(component.loginFailed).toBeFalsy();
  });

  it('should set loginFailed to true on failed login', () => {
    spyOn(router, 'navigate');
    spyOn(authService, 'login').and.returnValue(false);
    component.loginForm.get('username')?.setValue('testuser');
    component.loginForm.get('password')?.setValue('testpass');
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(authService.login).toHaveBeenCalledWith('testuser', 'testpass');
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.loginFailed).toBeTruthy();
  });

  it('should reset the form when onReset is called', () => {
    component.loginForm.get('username')?.setValue('testuser');
    component.loginForm.get('password')?.setValue('testpass');
    component.submitted = true;
    component.loginFailed = true;
    component.onReset();
    expect(component.loginForm.get('username')?.value).toBeNull();
    expect(component.loginForm.get('password')?.value).toBeNull();
    expect(component.submitted).toBeFalsy();
    expect(component.loginFailed).toBeFalsy();
  });
});
