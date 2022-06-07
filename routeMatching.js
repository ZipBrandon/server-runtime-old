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

var reactRouterDom = require('react-router-dom');

// TODO: export/import from react-router-dom
function matchServerRoutes(routes, pathname) {
  let matches = reactRouterDom.matchRoutes(routes, pathname);
  if (!matches) return null;
  return matches.map(match => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

exports.matchServerRoutes = matchServerRoutes;
