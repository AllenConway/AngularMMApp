import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up localStorage after each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with unauthenticated state', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should login successfully with valid credentials', () => {
    const result = service.login('testuser', 'password123');
    expect(result).toBeTruthy();
    expect(service.isAuthenticated()).toBeTruthy();
    expect(service.getUsername()).toBe('testuser');
  });

  it('should store login state in localStorage', () => {
    service.login('testuser', 'password123');
    expect(localStorage.getItem('isLoggedIn')).toBe('true');
    expect(localStorage.getItem('username')).toBe('testuser');
  });

  it('should fail login with empty username', () => {
    const result = service.login('', 'password123');
    expect(result).toBeFalsy();
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should fail login with empty password', () => {
    const result = service.login('testuser', '');
    expect(result).toBeFalsy();
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should logout successfully', () => {
    service.login('testuser', 'password123');
    expect(service.isAuthenticated()).toBeTruthy();
    
    service.logout();
    expect(service.isAuthenticated()).toBeFalsy();
    expect(localStorage.getItem('isLoggedIn')).toBeNull();
    expect(localStorage.getItem('username')).toBeNull();
  });

  it('should restore authenticated state from localStorage', () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', 'testuser');
    
    // Create a new service instance to test initialization
    const newService = new AuthService();
    expect(newService.isAuthenticated()).toBeTruthy();
    expect(newService.getUsername()).toBe('testuser');
  });

  it('should emit authentication state changes', (done) => {
    service.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        expect(isAuth).toBeTruthy();
        done();
      }
    });
    
    service.login('testuser', 'password123');
  });
});
