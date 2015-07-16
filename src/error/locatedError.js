/* @flow */
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import { GraphQLError } from './GraphQLError';


/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
export function locatedError(error: Error, nodes: Array<any>): GraphQLError {
  // If the error is already a GraphQLError, do not overwrite it's existing
  // location information.
  if (error instanceof GraphQLError) {
    return error;
  }

  var message = error && error.message ? error.message : String(error);
  var stack = error ? error.stack : null;
  return new GraphQLError(message, nodes, stack);
}