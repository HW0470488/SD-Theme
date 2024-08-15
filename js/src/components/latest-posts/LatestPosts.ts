import { Initializable } from "../../core";
import { LatestPostsBlock } from "./LatestPostsBlock";

/**
 * Adds the ability to load more posts with the latest posts block.
 *
 * This system applies to all blocks with the class `.is-style-load-more`.
 */

export class LatestPosts implements Initializable {

	/**
	 * A list of latest posts blocks.
	 */

	private blocks: LatestPostsBlock[];

	/**
	 * Constructs a new latest posts block manager.
	 */

	constructor() {

		this.blocks = [];

	}

	initialize(): void {

		const api: HTMLLinkElement = document.querySelector("link[rel=\"https://api.w.org/\"]");

		if(api === null) {

			throw new Error("Could not find API URL");

		}

		const elements = document.querySelectorAll(".is-style-load-more");

		for(const element of elements) {

			this.blocks.push(new LatestPostsBlock(api.href + "wp/v2/posts", element as HTMLElement));

		}

	}

}
