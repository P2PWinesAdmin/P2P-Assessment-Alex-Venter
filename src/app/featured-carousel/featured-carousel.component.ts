import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.scss']
})
export class FeaturedCarouselComponent implements OnInit {
  private featuredCarousel: any;
  constructor() { }

  ngOnInit(): void {
    //     $(document).ready(function () {
    //       $('#carouselFeaturedWine').on('slide.bs.carousel', function (e) {
    //         var $e = (e.relatedTarget);
    //         var idx = $e.index();
    //         var itemsPerSlide = 5;
    //         var totalItems = ('.carousel-item').length;

    //         if (idx >= totalItems - (itemsPerSlide - 1)) {
    //           var it = itemsPerSlide - (totalItems - idx);
    //           for (var i = 0; i < it; i++) {
    //             // append slides to end
    //             if (e.direction == "left") {
    //               ('.carousel-item').eq(i).appendTo('.carousel-inner');
    //             }
    //             else {
    //               ('.carousel-item').eq(0).appendTo('.carousel-inner');
    //             }
    //           }
    //         }
    //       });
    //     }
  }
}
