/**
 * Schweiger Design Slider.
 */

import {
	Autoplay,
	Navigation, Pagination,
	Swiper
} from "swiper";

export class SchweigerSlider {

	/**
	 * Initializes this object.
	 */

	initialize(): void {

		const containers = document.querySelectorAll(".gw-schweiger-testimonials-slider > .swiper-container");

		// https://swiperjs.com/api/#custom-build
		Swiper.use([Autoplay, Navigation, Pagination]);

		const swipers = Array.from(containers).map((container) => {


			// Settings
			const settings = {
				createElements: true,
				navigation: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				autoplay: {
					delay: 5000
				}
			};

			// @ts-ignore
			const newSwiper = new Swiper(container, settings);
			return newSwiper;

		});
	}

}
