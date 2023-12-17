'use strict';

/**
 * `landing-page-middleware` middleware
 */

// const populate = {
//   metadata:{
//     populate:{
//       metaImage: {
//         populate: true,
//         fields : ["name", "alternativeText", "url"]
//       }
//     }
//   }
// }

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-middleware middleware.');

    await next();
  };
};
