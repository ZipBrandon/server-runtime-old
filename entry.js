/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createEntryMatches(matches, routes) {
  return matches.map(match => ({
    params: match.params,
    pathname: match.pathname,
    route: routes[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}

exports.createEntryMatches = createEntryMatches;
exports.createEntryRouteModules = createEntryRouteModules;
