import { Props } from "react";
import { LatestPostsAttributes } from "./LatestPostsAttributes";

/**
 * Properties of the latests posts block.
 */

export interface LatestPostsProps extends Props<void> {

	name: string;
	className: string;
	attributes?: LatestPostsAttributes;

}
