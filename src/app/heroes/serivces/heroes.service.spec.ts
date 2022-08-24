import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { HeroesService } from "./heroes.service";
import { Hero, Publisher } from "./../interfaces/hero.interface";

describe("HeroesService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroesService);
  });

  afterEach(() => httpTestingController.verify());

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("#getAllHeroes", () => {
    let expectedHeroes: Hero[];

    beforeEach(() => {
      let heroTest!: Hero;
      let heroTest2!: Hero;
      let publisherTest: Publisher = heroTest.publisher;
      heroTest.publisher = "DC Comics";
      const publisherTest2: Publisher = heroTest2.publisher;
      heroTest = {
        id: "heroTest",
        superhero: "superHeroTest",
        publisher: publisherTest,
        alter_ego: "egoTest",
        first_appearance: "appearenceTest",
        characters: "charactersTest",
        image: "urlImageTest",
      };
      heroTest2 = {
        id: "heroTest2",
        superhero: "superHeroTest2",
        publisher: publisherTest2,
        alter_ego: "egoTest2",
        first_appearance: "appearenceTest2",
        characters: "charactersTest2",
        image: "urlImageTest2",
      };
      expectedHeroes = [heroTest, heroTest2];
    });

    it("Should return expected heroes (called once)", () => {
      service.getAllHerores().subscribe({
        next: (heroes) =>
          expect(heroes).toEqual(
            expectedHeroes,
            "should return expected heroes",
          ),
        error: fail,
      });
    });
  });
});
