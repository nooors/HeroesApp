import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: "image",
  pure: false,
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.id) {
      return "assets/no-image.png";
    } else if (hero.image) {
      return hero.image;
    }
    return `assets/heroes/${hero.id}.jpg`;
  }
}
