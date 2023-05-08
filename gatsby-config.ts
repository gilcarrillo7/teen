/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/logo_Teen.svg",
			},
		},
	],
};
