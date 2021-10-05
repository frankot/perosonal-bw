const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const now = String(Date.now())
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
      })

    eleventyConfig.addShortcode('version', function () {
        return now
    })
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (
            process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith(".html")
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }

        return content;
    });
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};