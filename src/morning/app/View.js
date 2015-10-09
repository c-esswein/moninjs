goog.provide('morning.app.View');
goog.require('goog.ui.Component');

/**
 * @constructor
 * @param {string} name
 * @extends {goog.ui.Component}
 */
morning.app.View = function(name)
{
  goog.base(this);

  /**
   * Name of the current view.
   *
   * @type {string}
   */
  this.name = name;

  /**
   * Dynamically initialized components in the view
   *
   * @type {morning.controllers.ComponentController}
   * @protected
   */
  this.componentController = new morning.controllers.ComponentController();
  this.componentController.setParentEventTarget(this);
  this.registerDisposable(this.componentController);
};
goog.inherits(morning.app.View, goog.ui.Component);

/** @inheritDoc */
morning.app.View.prototype.createDom = function()
{
  var el = this.getDomHelper().createDom('div', 'view');
  this.decorateInternal(el);
};

/** @inheritDoc */
morning.app.View.prototype.decorateInternal = function(el)
{
  goog.base(this, 'decorateInternal', el);

  this.componentController.initialize({
    element: this.getElement(),
    selector: '.cmp'
  });
};

/**
 * Returns sub component by specified name, which was initialized automatically
 * (through .cmp selector)
 *
 * @param {string} name
 * @return {goog.ui.Component}
 */
morning.app.View.prototype.getComponent = function(name)
{
  return this.componentController.getComponentByName(name);
};