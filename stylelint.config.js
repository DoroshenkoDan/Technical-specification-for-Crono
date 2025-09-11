/** @type {import('stylelint').Config} */
export default {
  // Extends configuration with basic rule set for SCSS files (includes standard SCSS rules).
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  // Indicates that Stylelint should not output messages about incorrect usage of /* stylelint-disable */.
  reportInvalidScopeDisables: true,
  // Indicates that Stylelint should report rules where description is missing in /* stylelint-disable */ comments.
  reportDescriptionlessDisables: true,

  plugins: ['stylelint-prettier'],
  // Rules object for configuring specific checks.
  rules: {
    // Disable pattern checking for @mixin names (you can write as you want)
    'scss/at-mixin-pattern': null,

    // Enable Prettier rules for SCSS
    'prettier/prettier': [
      true,
      {
        useTabs: false, // spaces only (no tabs)
        printWidth: 80, // line width 80 characters
        tabWidth: 2, // tab size (spaces) - 2
        singleQuote: true, // single quotes
        jsxSingleQuote: true, // single quotes in JSX
        trailingComma: 'es5', // comma after last element only where allowed
        semi: true, // add semicolons
        endOfLine: 'auto', // depends on system (windows / unix)
      },
    ],

    // Forbid empty blocks
    'block-no-empty': true,

    // Disable pattern checking for CSS custom properties (--var)
    'custom-property-pattern': null,

    // Forbid usage of id selectors (#id)
    'selector-max-id': 0,

    // Forbid unknown pseudo-classes, but allow custom :global
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    // Disable standard rule for unknown at-rules, because SCSS knows its own
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true, // Enable proper SCSS rule instead of standard one

    // Disable rule for class name patterns (camelCase, PascalCase, etc. are allowed)
    'selector-class-pattern': null,

    // ❗ Most important:
    // Allow usage of -webkit-, -moz-, -ms- prefixes
    'property-no-vendor-prefix': null, // for properties
    'value-no-vendor-prefix': null, // for values (e.g. display: -webkit-box)
    'selector-no-vendor-prefix': null, // for selectors (like ::-webkit-scrollbar)
    'media-feature-name-no-vendor-prefix': null, // for media features (like -webkit-min-device-pixel-ratio)
  },
  // Settings for specific files.
  overrides: [
    {
      // Rule applies to all files with .scss extension.
      files: ['*.scss', '**/*.scss'],
      // Specifies that SCSS parser should be used for processing SCSS syntax.
      customSyntax: 'postcss-scss',
    },
  ],
  defaultSeverity: 'warning',
};
