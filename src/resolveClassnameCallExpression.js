// @flow

import {
  isStringLiteral,
  isObjectExpression
} from 'babel-types';
import getClassName from './getClassName';
import type {
  StyleModuleImportMapType,
  HandleMissingStyleNameOptionType
} from './types';

type OptionsType = {|
  handleMissingStyleName: HandleMissingStyleNameOptionType
|};

/**
 * Updates the className value of a JSX element using a provided styleName attribute.
 */
export default (
  path: *,
  stats: *,
  styleModuleImportMap: StyleModuleImportMapType,
  options: OptionsType): void => {
  const replaceCallArguments = function (callExpressionArguments) {
    for (const argument of callExpressionArguments) {
      if (isStringLiteral(argument)) {
        argument.value = getClassName(argument.value, styleModuleImportMap, options);
      } else if (isObjectExpression(argument)) {
        for (const property of argument.properties) {
          if (isStringLiteral(property.key)) {
            property.key.value = getClassName(property.key.value, styleModuleImportMap, options);
          }
        }
      }
    }
  };

  replaceCallArguments(path.node.arguments);
};
