/**
 * Shared content shapes. These are JSDoc-only — there is no TypeScript build
 * step. Annotating an array with `@type {Project[]}` gives editor autocomplete
 * and red squiggles on typos while staying plain JS.
 */

/**
 * @typedef {Object} ProjectLinks
 * @property {string} [github]
 * @property {string} [live]
 * @property {string} [youtube]
 */

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} year          e.g. "2025" or "2023–24"
 * @property {'software'|'hardware'} category  drives the Projects filter
 * @property {string} blurb         one or two sentences of plain prose
 * @property {string[]} [highlights] optional detail bullets
 * @property {string[]} tech
 * @property {ProjectLinks} links
 * @property {boolean} [featured]
 */

/**
 * @typedef {Object} Experience
 * @property {string} company
 * @property {string} position
 * @property {string} period        e.g. "Sep 2025 – present"
 * @property {string} [location]
 * @property {string[]} description
 */

/**
 * @typedef {Object} SkillGroup
 * @property {string} label         e.g. "Languages"
 * @property {string[]} items
 */

export {}
