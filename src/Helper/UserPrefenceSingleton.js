import { LANGUAGE_IDS } from "../Global/Languages/Constants";

let singleton; // For Global Scope , To check for if created another instance or not
const singletonEnforcer = Symbol(); //for to check data type and every Symbol is created is unique with Symbol();

const parseDataFile = (defaults) => {
  try {
    const settings = localStorage.getItem("UserPreferences");
    if (settings) return JSON.parse(settings);
    return {};
  } catch (error) {
    return defaults;
  }
};

const containsKey = (obj, key) => ({}.hasOwnProperty.call(obj || {}, key));

class UserPreferences {
  constructor(opts) {
    this.defaults = opts.defaults;
    this.data = parseDataFile(opts.defaults);
  }
  // Methods for settings ,set the data in localStorage

  get(key, defaultValue) {
    if (containsKey(this.data, key)) {
      return this.data[key];
    }
    return defaultValue;
  }

  save(settings) {
    localStorage.setItem("UserPreferences", JSON.stringify(settings));
  }

  set(key, value) {
    this.data = parseDataFile(this.defaults);
    this.data[key] = value;
    this.save(this.data);
  }

  parseDataFile() {
    this.data = parseDataFile(this.defaults);
  }
}

class UserPreferenceSingleton {
  // The static keyword defines a static method or field for a class,
  // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

  static get ACCESS_TOKEN() {
    return "access_tokens";
  }
  static get LANGUAGE() {
    return "language";
  }
  static get COMPANY_ID() {
    return "company_id";
  }
  static get EMAIL() {
    return "email";
  }
  static get DISPLAY_NAME() {
    return "display_name";
  }
  constructor() {
    this.userPreferences = new UserPreferences({
      configName: "user-preferences",
      defaults: {
        windowBounds: { width: 800, height: 600 },
      },
    });
    if (singleton) {
      throw new Error("New singleton cannot be created!!"); // To Check for if New Instance created then throw error
    }
    singleton = this; // Assigning singleton to this class itself
  }

  static getInstance() {
    if (!singleton) {
      singleton = new UserPreferenceSingleton(singletonEnforcer);
    }
    return singleton;
  }

  getUserToken() {
    return this.userPreferences.get(
      UserPreferenceSingleton.ACCESS_TOKEN,
      undefined
    );
  }

  setUserToken(value) {
    return this.userPreferences.set(
      UserPreferenceSingleton.ACCESS_TOKEN,
      value
    );
  }

  getEmail(value) {
    return this.userPreferences.get(UserPreferenceSingleton.EMAIL, undefined);
  }

  setEmail(value) {
    return this.userPreferences.set(UserPreferenceSingleton.EMAIL, value);
  }

  getDisplayName() {
    return this.userPreferences.get(
      UserPreferenceSingleton.DISPLAY_NAME,
      undefined
    );
  }

  setDisplayName(value) {
    return this.userPreferences.set(
      UserPreferenceSingleton.DISPLAY_NAME,
      value
    );
  }

  setLanguage(value) {
    return this.userPreferences.set(UserPreferenceSingleton.LANGUAGE, value);
  }

  getLanguage() {
    return this.userPreferences.get(
      UserPreferenceSingleton.LANGUAGE,
      LANGUAGE_IDS.ENG
    );
  }

  getCompanyId() {
    return this.userPreferences.get(
      UserPreferenceSingleton.COMPANY_ID,
      undefined
    );
  }

  setCompanyId(value) {
    return this.userPreferences.set(UserPreferenceSingleton.COMPANY_ID, value);
  }
}
export default UserPreferenceSingleton;

/**
 *
 * The above piece of code is a module that has a singleton class StateUtility and default exports the instance of the same class.
 *
 *  */

/**
 * It consists of constructor and two class methods called getPropertyByName and setPropertyValue.
 * Both of these class method are pretty self explanatory: one gets the property's value and the other sets its value.
 */

/**
 * Next, we have the constructor function. It is a function that gets invoked whenever we create a new of object of this class.
 */

/**
 * But here is a catch: for a class to be a singleton we need to make sure that it creates only one instance, and that's all.
 */

/**
 * To make sure that this happens, we simply create a global variable called instance. We define it at the top of the module.
 *  This variable acts as a checker. We add a condition in the constructor function such that if instance variable has any value (that is, the object of the StateUtility class) then
 * throw an error or else assign instance to the current class instance (the this object).
 */

/**
 *
 * In this example, we implemented the class StateUtility so that it can expose and alter the globalState variable.
 * We make sure that we don't expose the globalState. We expose them using the class methods of StateUtility. In this way, we protect the global state from being altered directly.
 * Finally, we create the instance of the class as follows: let stateUtilityInstance = Object.freeze(new StateUtility());.
 * We have used Object.freeze so that no other class/component/module is able to modify the exposed stateUtilityInstance.
 *
 *  */
