/**
 * Augments @wordpress/i18n types that are declared as `any`.
 */

declare module "@wordpress/i18n" {

	function __(text: string, domain?: string): string;
	function _x(text: string, context: string, domain?: string): string;
	function _n(text: string, plural: string, n: number, domain?: string): string;
	function _n(text: string, plural: string, n: number, context: string, domain?: string): string;

}
