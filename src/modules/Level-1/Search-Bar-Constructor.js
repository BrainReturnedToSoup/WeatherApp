import { ElementRefManager } from "../Level-0/Element-Ref-Manager"; //requires this class reference for its argument validation

export class SearchBarConstructor {
  constructor(argsObj) {
    try {
      this.#argValidator("constructor", argsObj);

      //reference the properties within the supplied argsObj
      const { uniqueIdentifier, elementReferenceManager, dynamicOptionsOn } =
        argsObj;

      //config data to determine some characteristics of the constructed search bar
      this.#configData.uniqueIdentifier = uniqueIdentifier;
      this.#configData.dynamicOptionsOn = dynamicOptionsOn;

      this.#helperClasses.elementReferenceManager = elementReferenceManager; //class instance to store each individual element reference

      this.#completeSearchBar = this.#createSearchBarFrag(); //create the entire search bar fragment and save it to the state
    } catch (error) {
      console.error(error, error.stack);
    }
  }

  //--------------------ARGUMENT-VALIDATION-------------------------//

  #argValidationData = {
    //method
    constructor: {
      //args
      uniqueIdentifier: {
        //properties
        type: "string",
      },
      elementReferenceManager: { instanceof: ElementRefManager },
      dynamicOptionsOn: { type: "boolean" },
    },
  };

  #validate = {
    type: (suppliedArg, argName, methodOrigin, correctType) => {
      if (typeof suppliedArg !== correctType) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed type validation,
             received '${suppliedArg}' which has a type of '${typeof suppliedArg}',
              needs to have the type '${correctType}'`
        );
      }
    },
    instanceof: (suppliedArg, argName, methodOrigin, correctInstance) => {
      if (!(suppliedArg instanceof correctInstance)) {
        throw new Error(
          `Argument '${argName}' for method '${methodOrigin}' failed instance validation,
             received '${suppliedArg}' which is not an instance of '${correctInstance}'`
        );
      }
    },
  };

  #argValidator(methodName, argsObj) {
    if (this.#argValidationData.hasOwnProperty(methodName)) {
      const methodValidationData = this.#argValidationData[methodName];

      for (let arg in argsObj) {
        const argValue = argsObj[arg];

        //check if a supplied arg is a valid arg to supply
        if (!methodValidationData.hasOwnProperty(arg)) {
          throw new ReferenceError(
            `Unrecognized argument for a specific method, received '${arg}' with a value of '${argsObj[arg]}'`
          );
        }

        //go down the list of properties to check for on the specific arg
        for (let property in methodValidationData[arg]) {
          const correctValue = methodValidationData[arg][property]; //retrieve the data that will be used as a reference for validating the arg

          this.#validate[property](argValue, arg, methodName, correctValue); //validate the arg based on the property being checked currently
        }
      }
    } else {
      throw new ReferenceError(
        `Failed to validate the supplied arguments for a specific method, validation data
           corresponding to this method does not exist, received '${methodName}' as the method being validated`
      );
    }
  }

  //---------------------STATE-AND-CONFIG-DATA---------------------//

  #configData = {
    uniqueIdentifier: null, //used to distinguish instances, as well as make the search bar unique on the DOM
    dynamicOptionsOn: null, //decides whether to append a datalist and configure the input with it as well
  };

  #helperClasses = {
    elementReferenceManager: null, //used to store references instead of spam querying
  };

  #completeSearchBar = null;

  //--------------------ELEMENT-REFERENCE-CACHING-------------------//

  #storeElementRef(identifier, element) {
    this.#helperClasses.elementReferenceManager.addRef(identifier, element);
  }

  //----------------------ELEMENT-CONSTRUCTION----------------------//

  #elementConstructors = {
    form: () => {
      const formElement = document.createElement("form"),
        { uniqueIdentifier } = this.#configData;

      //define classes
      formElement.classList.add("Search-Bar-Form");
      formElement.classList.add(uniqueIdentifier);

      //define attributes
      formElement.setAttribute("novalidate", ""); //part of implementing the search bar functionality manually

      //store reference
      this.#storeElementRef("Search-Bar-Form", formElement);

      return formElement;
    },
    input: () => {
      const inputElement = document.createElement("input"),
        { uniqueIdentifier, dynamicOptionsOn } = this.#configData;

      //define classes
      inputElement.classList.add("Search-Bar-Input");
      inputElement.classList.add(uniqueIdentifier);

      //define attributes
      if (dynamicOptionsOn) {
        //if this search bar will feature dynamic options in some capacity
        //add the necessary attribute to link the data list to the input
        inputElement.setAttribute(
          "list",
          `Search-Bar-Data-List-${uniqueIdentifier}`
        );
      }

      //store reference
      this.#storeElementRef("Search-Bar-Input", inputElement);

      return inputElement;
    },
    dataList: () => {
      const dataListElement = document.createElement("datalist"),
        { uniqueIdentifier } = this.#configData;

      //define classes
      dataListElement.classList.add("Search-Bar-Data-List");
      dataListElement.classList.add(uniqueIdentifier);

      //define attributes
      dataListElement.setAttribute(
        "id",
        `Search-Bar-Data-List-${uniqueIdentifier}`
      ); //should match the list attribute value on the corresponding input field

      //store reference
      this.#storeElementRef("Search-Bar-Data-List", dataListElement);

      return dataListElement;
    },
  };

  //----------------------SEARCH-BAR-ASSEMBLY-----------------------//

  #createSearchBarFrag() {
    const { dynamicOptionsOn } = this.#configData;

    //create base search bar
    const formElement = this.#elementConstructors.form(),
      inputElement = this.#elementConstructors.input();

    formElement.append(inputElement);

    if (dynamicOptionsOn) {
      //transform search bar into one with a data list for dynamic options
      const dataListElement = this.#elementConstructors.dataList();

      formElement.append(dataListElement);

      return formElement; //return data list search bar
    } else {
      return formElement; //return base search bar
    }
  }

  //------------------------------APIs------------------------------//

  returnSearchBarFragment() {
    return this.#completeSearchBar;
    //return the complete search bar that was constructed and save to state upon the class instance being made
  }
}
