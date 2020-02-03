import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <button className="ui button primary">
          <LanguageContext.Consumer>
            {value => (value === "english" ? "Submit" : "Voorleggen")}
          </LanguageContext.Consumer>
        </button>
      </div>
    );
  }
}
export default Button;
