import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainPageComponent } from './main-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MainPageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'The-Stock-Analyser'`, () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('The-Stock-Analyser');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('The-Stock-Analyser app is running!');
  });
});
