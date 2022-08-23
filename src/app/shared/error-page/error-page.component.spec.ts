import { TestBed } from "@angular/core/testing";
import { ErrorPageComponent } from "./error-page.component";

describe("ErrorPageComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ErrorPageComponent],
    }).compileComponents();
  });
});

it("Should create the ErrorPage", () => {
  const fixture = TestBed.createComponent(ErrorPageComponent);
  const errorPage = fixture.componentInstance;
  expect(errorPage).toBeTruthy();
});
