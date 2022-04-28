import argvSplit from '.';
export = split;

/**
 * Split a argv string into an array of arguments.
 * @param s String to be parsed.
 * @param throwOnError Whether to throw on parsing errors (unmatched single/double quotes or escape sequences). Default to `true`.
 */
declare function split(s : string, throwOnError?: boolean): string[];

