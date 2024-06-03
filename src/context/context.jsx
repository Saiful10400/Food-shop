import contextProvider from "./appContext";
import PropTypes from "prop-types";

const Context = ({ children }) => {
  //context data object.
  const contextData = {};
  return (
    <contextProvider.Provider value={contextData}>
      {children}
    </contextProvider.Provider>
  );
};

// props validation.
Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
