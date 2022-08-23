import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HeroesApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("HeroesApp");
  });

  it("Should have an outlet-router directive", () => {
    const fixture = TestBed.createComponent(AppComponent);

    const elem = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(elem).not.toBeNull();
  });
});
