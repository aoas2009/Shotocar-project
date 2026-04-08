/**
 * @class ComponentError
 * @extends Error
 * @description
 * Base error for UI components. Represents failures related
 * to incorrect usage of component props.
 */
class ComponentError extends Error {
  /**
   * Creates an instance of ComponentError.
   *
   * @param {string} propName - Name of the prop that caused the error.
   * @param {string} componentName - Name of the component where the error occurred.
   */
  constructor(propName, componentName) {
    super(`${componentName}: prop '${propName}' is required`);
    this.name = "ComponentError";
  }
}

/**
 * @class MissingPropError
 * @extends ComponentError
 * @description
 * Error thrown when a required prop is not provided
 * to a component.
 */
class MissingPropError extends ComponentError {
  /**
   * Creates an instance of MissingPropError.
   *
   * @param {string} propName - Name of the missing prop.
   * @param {string} componentName - Name of the affected component.
   */
  constructor(propName, componentName) {
    super(propName, componentName);
    this.name = "MissingPropError";
  }
}

export { ComponentError, MissingPropError };