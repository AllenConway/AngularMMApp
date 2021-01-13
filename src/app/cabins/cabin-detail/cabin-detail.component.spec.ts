import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CabinDetailComponent } from './cabin-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CabinsService } from '../services/cabins.service';
import { HttpClientModule } from '@angular/common/http';

describe('CabinDetailComponent', () => {
  let component: CabinDetailComponent;
  let fixture: ComponentFixture<CabinDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      declarations: [CabinDetailComponent],
      providers: [CabinsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
