import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import i18n from "../i18n";

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div data-testid='Togglable'>
      <div style={hideWhenVisible}>
        <button id="new-blog-btn" onClick={toggleVisibility}>
          {props.buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button id="cancel-btn" onClick={toggleVisibility}>
          {i18n.TOGGABLE.CANCEL_BUTTON}
        </button>
      </div>
    </div>
  );
});

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

Togglable.displayName = "Togglable";

export default Togglable;
