import { __, _x } from "@wordpress/i18n";
import { Post } from "../../core";

/**
 * A latest posts block.
 */

export class LatestPostsBlock implements EventListenerObject {

	/**
	 * The WordPress REST API URL.
	 */

	private url: string;

	/**
	 * An element that serves as a post template.
	 */

	private postTemplate: HTMLElement;

	/**
	 * The post container.
	 */

	private container: HTMLElement;

	/**
	 * The load more button.
	 */

	private button: HTMLButtonElement;

	/**
	 * The author.
	 */

	private author: string;

	/**
	 * The categories.
	 */

	private categories: string;

	/**
	 * The excerpt length.
	 */

	private excerptLength: number;

	/**
	 * The order of the posts.
	 */

	private order: string;

	/**
	 * The current page.
	 */

	private page: number;

	/**
	 * The amount of posts per page.
	 *
	 * This is defined via the `perPage` data attribute of the post container.
	 */

	private perPage: number;

	/**
	 * Indicates whether the load-more-button is currently locked.
	 */

	private locked: boolean;

	/**
	 * Constructs a new posts block.
	 *
	 * @param api - The WordPress REST API URL.
	 */

	constructor(url: string, container: HTMLElement) {

		this.url = url;
		this.container = container;
		this.button = this.createLoadMoreButton();

		const buttonWrapper = document.createElement("div");
		buttonWrapper.classList.add("load-more-wrapper");
		buttonWrapper.append(this.button);
		container.after(buttonWrapper);

		const post: HTMLElement = container.querySelector("li");
		this.postTemplate = (post !== null) ? post.cloneNode(true) as HTMLElement : null;

		this.page = 1;
		this.locked = false;

		this.extractData(container);

	}

	/**
	 * Retrieves data from the class list of a given element.
	 *
	 * @param element The element.
	 */

	private extractData(element: HTMLElement): void {

		const className = element.classList.toString();
		const excerptLength = /excerpt-length-(\d+)/.exec(className);
		const order = /order-(\w+)/.exec(className);
		const perPage = /posts-to-show-(\d+)/.exec(className);
		const author = /author-(\d+)/.exec(className);
		const categories = /categories-([\d-]+)/.exec(className);

		this.excerptLength = (excerptLength !== null) ? Number(excerptLength[1]) : 55;
		this.order = (order !== null) ? order[1] : "desc";
		this.perPage = (perPage !== null) ? Number(perPage[1]) : 3;
		this.author = (author !== null) ? author[1] : "";
		this.categories = (categories !== null) ? categories[1].replace("-", ",") : "";

	}

	/**
	 * Creates a load more button.
	 *
	 * @return The button.
	 */

	private createLoadMoreButton(): HTMLButtonElement {

		const button = document.createElement("button");
		button.addEventListener("click", this);
		button.classList.add("load-more");
		button.innerText = __("Load more", "gw-wp-theme");
		button.type = "button";

		return button;

	}

	/**
	 * Converts the given post data into an HTML element.
	 *
	 * @param post The post data.
	 */

	private createPostElement(post: Post): HTMLElement {

		const element = this.postTemplate.cloneNode(true) as HTMLElement;

		// Title

		const title = element.querySelector("a");

		if(title !== null) {

			title.innerHTML = post.title.rendered;
			title.href = post.link;

		}

		// Featured media

		const featuredImage = element.querySelector(".wp-block-latest-posts__featured-image");

		if(featuredImage !== null) {

			const img: HTMLImageElement = featuredImage.querySelector("img");

			if(img !== null) {

				img.remove();

			}

			featuredImage.insertAdjacentHTML("afterbegin", post.thumbnail);

		}

		// Excerpt

		const content = element.querySelector(".entry-content");

		if(content !== null) {

			// Note: excerpt length is currently being ignored.
			content.innerHTML = post.excerpt.rendered;

		}

		// Author

		const author: HTMLElement = element.querySelector(".wp-block-latest-posts__post-author");

		if(author !== null) {

			author.innerText = _x("by", "gw-wp-theme") + " " + post.author_name;

		}

		// Post date

		const postDate: HTMLTimeElement = element.querySelector(".wp-block-latest-posts__post-date");

		if(postDate !== null) {

			const date = new Date(post.date_gmt);

			postDate.dateTime = post.date_gmt;
			postDate.innerText = date.toLocaleDateString("de-DE", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit"
			});

		}

		return element;

	}

	/**
	 * Handles XHR responses.
	 *
	 * @param response The response.
	 */

	private handleResponse(response: Response): Promise<void> {

		return response.json().then((data: Post[]) => {

			const totalPages = Number(response.headers.get("X-WP-TotalPages"));
			this.locked = (this.page >= totalPages);
			this.button.classList.remove("loading");

			if(this.locked) {

				this.button.classList.add("end-of-page");

			}

			const posts = data.map((post: Post) => this.createPostElement(post));
			this.container.append(...posts);

		});

	}

	/**
	 * Loads more posts.
	 */

	private loadMore(): void {

		if(!this.locked) {

			this.locked = true;
			this.button.classList.add("loading");

			// Request the next page.
			this.page = this.page + 1;

			const params = new URLSearchParams([
				["page", this.page.toString()],
				["per_page", this.perPage.toString()],
				["order", this.order],
				["author", this.author],
				["categories", this.categories]
			]);

			fetch(this.url + "?" + params.toString())
				.then((response) => this.handleResponse(response))
				.catch((error) => {

					console.error(error);
					this.locked = false;

				});

		}

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "click":
				this.loadMore();
				break;

		}

	}

}
