exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createRedirect({
    fromPath: "/old-url",
    toPath: "/new-url",
    isPermanent: true,
  })
  createRedirect({ fromPath: "/url", toPath: "/zn-CH/url", Language: "zn" })
  createRedirect({
    fromPath: "/url_that_is/not_pretty",
    toPath: "/pretty/url",
    statusCode: 200,
  })
  createRedirect({
    fromPath: "/packages/*",
    toPath: "/plugins1/*",
  })
}
