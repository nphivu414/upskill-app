// eslint-disable-next-line @typescript-eslint/no-var-requires
import { composePlugins, withNx } from '@nx/next'
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx"
import createMDX from "@next/mdx"

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "Code" },
  // syntaxHighlighting: {
  //   theme: "github-from-css",
  // },
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  },
})


const plugins = [
  withNx,
  withMDX,
];

export default composePlugins(...plugins)(nextConfig)
