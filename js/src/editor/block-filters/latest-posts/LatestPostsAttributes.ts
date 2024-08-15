import { Attributes } from "react";
import { Category } from "./Category";

/**
 * Attributes of the latests posts block.
 */

export interface LatestPostsAttributes extends Attributes {

	className: string;
	categories: Category[];
	excerptLength?: number;
	order?: string;
	postsToShow: number;
	selectedAuthor?: number;

}
