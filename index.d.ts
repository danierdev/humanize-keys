// Type definitions for humanize-keys 1.0
// Project: https://github.com/drivas/humanize-keys#readme
// Definitions by: Danier R. <https://github.com/drivas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = humanizeKeys;

declare function humanizeKeys(
	obj: object,
	options?: humanizeKeys.Options
): { [key: string]: any };

declare namespace humanizeKeys {
	interface Options {
		deep?: boolean;
		exclude?: Array<string | RegExp>;
	}
}
