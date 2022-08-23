import { DebugElement } from "@angular/core";
import { RouterLinkWithHref } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ErrorPageComponent } from "./error-page.component";

class Loop {
  public findRoute(route: string): boolean {
    const fixture = TestBed.createComponent(ErrorPageComponent);
    const routes = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref),
    );
    let exists = false;
    for (const elem of routes) {
      if (elem.attributes["routerLink"] === route) {
        exists = true;
        return exists;
      }
    }
    return exists;
  }
}

describe("ErrorPageComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  it("Should create the ErrorPage", () => {
    const fixture: ComponentFixture<ErrorPageComponent> = TestBed.createComponent(
      ErrorPageComponent,
    );
    const errorPage = fixture.componentInstance;
    expect(errorPage).toBeTruthy();
  });

  it("It should render 'error-page works!'", () => {
    const fixture = TestBed.createComponent(ErrorPageComponent);

    const elem = fixture.debugElement.query(By.css("p")).nativeElement;
    expect(elem.innerText).toContain("error-page works!");
  });

  it("should contain at least 7 routerLinks", () => {
    const fixture = TestBed.createComponent(ErrorPageComponent);
    const elems = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref),
    );

    expect(elems).not.toBeNull();
    expect(elems.length).toBeGreaterThanOrEqual(7);
  });

  it("Should to have a route to login", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/auth/login")).toBeTruthy();
  });

  it("Should to have a route to register", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/auth/register")).toBeTruthy();
  });

  it("Should to have a route to home", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/heroes/home")).toBeTruthy();
  });

  it("Should to have a route to list", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/heroes/list")).toBeTruthy();
  });

  it("Should to have a route to hero", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/heroes/hero")).toBeTruthy();
  });

  it("Should to have a route to search", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/heroes/search")).toBeTruthy();
  });

  it("Should to have a route to add", () => {
    const tryRoute = new Loop();

    expect(tryRoute.findRoute("/heroes/add")).toBeTruthy();
  });
});
