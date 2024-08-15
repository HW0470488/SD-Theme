import { Content } from "./Content";

/**
 * Describes a WordPress post object.
 *
 * This interface describes a subset of the available post fields and includes
 * custom fields defined in {@link inc/gw-rest-api.php}.
 *
 * @see https://developer.wordpress.org/rest-api/reference/posts/
 */

export interface Post {

	author: number;
	"author_name": string;
	"author_posts_url": string;
	content: Content;
	categories: number[];
	"category_list": string|boolean;
	date: string;
	"date_gmt": string;
	excerpt: Content;
	"featured_media": number;
	thumbnail: string;
	id: number;
	link: string;
	tags: number[];
	"tag_list": string|boolean;
	title: Content;

}
