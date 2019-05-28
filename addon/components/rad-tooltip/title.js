import RadButton from '../rad-button'
const devAssets = {}

// Development Assets
// ---------------------------------------------------------------------------
if (NODE_ENV === 'development') {
  devAssets.init = function() {
    this._super(...arguments)

    // aria-describedby is required for A++ Accessibility
    if (!this.get('aria-describedby')) {
      console.warn(`tooltip requires aria-describedby: ${this.get('elementId')}`)
    }
  }
}

/**
 * CoreTooltip subcomponent extends the `RadButton` component. Requires
 * `aria-describedby` to bind to html attribute.
 *
 * Properties | Default | Description
 * --- | --- | ---
 * aria-describedby | '' | REQUIRED Used to bind html `aria-describedby` attribute to tooltip content id
 * basic | `true` | Button `basic` class status. Pass false for a button style target
 * link | `true` | Button `link` class status. Pass false to suppress link styles
 *
 * @class Component.RadTooltip.Title
 * @constructor
 * @extends Component.RadButton
 */
export default RadButton.extend(devAssets, {
  // Passed Properties
  // ---------------------------------------------------------------------------
  /**
   * Unique string generated by parent `rad-tooltip` Used for 508 attrs. Is
   * bound to the `aria-describedby` attr.
   * @property aria-describedby
   * @type {string}
   */
  'aria-describedby': '',

  // Properties
  // ---------------------------------------------------------------------------

  /**
   * Tooltips are tagged on hover by default. `RadButton` will check this flag
   * and the existence of `tagcategory` on mouseEnter. This means if you need
   * to fire a tag on hover, you only have to pass `tagcategory`.
   * @property taghover
   * @type {Boolean}
   * @default true
   */
  taghover: true,

  // Ember Props
  // ---------------------------------------------------------------------------
  /**
   * Auto-binds `data-test` attributes
   *
   * @property attributeBindings
   * @type {Array}
   */
  attributeBindings: ['data-test'],
  /**
   * Handle binding standard core class name `tooltip-title` and `basic-b`
   * bound for display purposes
   * @property classNames
   * @type {Array}
   */
  classNames: ['tooltip-title'],
})
