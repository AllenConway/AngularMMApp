import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CabinDetailComponent } from './cabin-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CabinsService } from './cabins.service';
import { HttpClientModule } from '@angular/common/http';

describe('CabinDetailComponent', () => {
  let component: CabinDetailComponent;
  let fixture: ComponentFixture<CabinDetailComponent>;

  beforeEach(async(() => {
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
