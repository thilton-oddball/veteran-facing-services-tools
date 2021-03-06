/* eslint-disable func-names, prefer-arrow-callback */

/**
 * Evaluate select menus for basic keyboard functionality:
 *
 * Each select can receive keyboard focus by pressing TAB.
 * Select menus should open with SPACE press, and user
 * should be able to enter keys. This is an imperfect
 * approximation, but Nightwatch doesn't support arrow
 * keys for traversing options in the open select.
 *
 * ```javascript
 *  this.demoTest = function (client) {
 *    client.evaluateSelectMenu('selector', 'option text', 'option value');
 *  };
 * ```
 *
 * @method evaluateSelectMenu
 * @param {string} [selectMenu] The selector (CSS / Xpath) used to locate the element.
 * @param {string} [optionText] The text of the <option> that should be selected.
 * @param {string} [selectedOption] Value attribute of the <option> that should be selected.
 * @api commands
 */
module.exports.command = function evaluateSelectMenu(
  selectMenu,
  optionText,
  selectedOption,
) {
  const { SPACE } = this.Keys;
  const client = this;

  return client.waitForElementVisible(selectMenu, 1000, () => {
    this.assert
      .isAllyDisabledElement(selectMenu, false)
      .assert.isActiveElement(selectMenu)
      .keys(SPACE)
      .sendKeys(selectMenu, optionText)
      .assert.value(selectMenu, selectedOption);
  });
};
