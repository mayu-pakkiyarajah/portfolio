import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { portfolio, achievements } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly portfolio = portfolio;
  readonly achievements = achievements;
  menuOpen = false;
  showAllProjects = false;
  isBrowser = false;
  activeSection = 'home';
  mousePosition = { x: 0, y: 0 };
  isDarkMode = true;

  resumeUrl = 'assets/resume/Mayuravel_Pakkiyarajah_SE.pdf';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initTheme();
      this.setupIntersectionObserver();
      this.setupMouseTracking();
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initAOS();
    }
  }

  get visibleProjects() {
    return this.showAllProjects
      ? this.portfolio.projects
      : this.portfolio.projects.filter(project => project.featured);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }

  toggleProjects(): void {
    this.showAllProjects = !this.showAllProjects;
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.closeMenu();
  }

  hasUrl(url?: string): boolean {
    return !!url?.trim();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              if (id) {
                this.activeSection = id;
                entry.target.setAttribute('data-aos', 'fade-up');
                entry.target.classList.add('aos-animate');
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
      });
    }
  }

  private setupMouseTracking(): void {
    document.addEventListener('mousemove', (e) => {
      this.mousePosition = { x: e.clientX, y: e.clientY };
    });
  }

  private initAOS(): void {
    setTimeout(() => {
      document.querySelectorAll('[data-aos]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('aos-animate');
        }
      });
    }, 100);

    window.addEventListener('scroll', () => {
      document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('aos-animate');
        }
      });
    }, { passive: true });
  }
}