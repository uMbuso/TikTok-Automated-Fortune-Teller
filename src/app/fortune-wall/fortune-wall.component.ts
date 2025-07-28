import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { FortuneService } from '../services/fortune.service';
import { CommonModule } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-fortune-wall',
  templateUrl: './fortune-wall.component.html',
  styleUrls: ['./fortune-wall.component.css'],
   imports: [CommonModule],
  standalone: true
})
export class FortuneWallComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('starsContainer') starsContainer!: ElementRef;
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;
  
  notificationVisible = false;
  private intervals: any[] = [];
  private demoNames = ['CosmicSeeker', 'StarReader', 'MysticWanderer', 'FortuneHunter'];

  constructor(
    public fortuneService: FortuneService,
    private cdr: ChangeDetectorRef,
     @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {}

 ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.createStars();
    this.createParticles();
    this.startFortuneAnimation();
  }
}

  ngOnDestroy(): void {
    this.intervals.forEach(interval => clearInterval(interval));
  }

  createStars() {
    const container = this.starsContainer.nativeElement;
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const starType = Math.random() < 0.1 ? 'wish-star' : ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
      star.className = `star ${starType}`;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(star);
    }
  }

  createParticles() {
    const container = this.particlesContainer.nativeElement;
    
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode === container) {
            container.removeChild(particle);
          }
        }, 12000);
      }
    }, 500);
    
    this.intervals.push(interval);
  }

  showNotification() {
    this.notificationVisible = true;
    setTimeout(() => {
      this.notificationVisible = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  startFortuneAnimation() {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const randomName = this.demoNames[Math.floor(Math.random() * this.demoNames.length)];
        this.fortuneService.addFortune(randomName);
        this.showNotification();
      }
    }, 150000);
    
    this.intervals.push(interval);
  }
}