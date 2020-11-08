import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml  } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  pure: false
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, city: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`<p class="bg-color-pink--light">${city}</p>`);
  }
}
