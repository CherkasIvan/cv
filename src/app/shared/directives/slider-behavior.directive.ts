import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cvSliderBehavior]',
})
export class SliderBehaviorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  changSlide() {
    const currentEl = this.el.nativeElement.textContent;
    console.log(currentEl);
    console.log(
      currentEl === ' Next' ? this.nextSlide() : this.previousSlide()
    );
    currentEl === ' Next' ? this.nextSlide() : this.previousSlide();
  }

  public nextSlide() {
    const element =
      this.el.nativeElement.parentElement.parentElement.children[0];

    const item = element.getElementsByClassName('item');
    // console.log(element);
    // console.log(item);

    console.log('next');
  }

  public previousSlide() {
    const element =
      this.el.nativeElement.parentElement.parentElement.children[0];

    const item = element.getElementsByClassName('item');
    // console.log(element);
    // console.log(item);

    console.log('previos');
  }
}
