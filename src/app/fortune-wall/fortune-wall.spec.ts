import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FortuneWallComponent } from './fortune-wall.component';

describe('FortuneWall', () => {
  let component: FortuneWallComponent;
  let fixture: ComponentFixture<FortuneWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortuneWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortuneWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});