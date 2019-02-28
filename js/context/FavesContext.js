import React, { createContext, Component } from "react";
import { setFave, getFaves, removeFave } from "../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIDs: []
    };
  }
  componentDidMount() {
    this.getFaveIDs();
  }
  getFaveIDs = async () => {
    try {
      const allFaves = await getFaves();
      const faveIDs = allFaves.map(fave => {
        fave[0];
      });

      this.setState({ faveIDs });
    } catch (error) {
      console.log(error);
    }
  };
  setFaveID = async faveID => {
    try {
      await setFave(faveID);
      this.getFaveIDs();
    } catch (error) {
      console.log(error);
    }
  };
  removeFaveID = async faveID => {
    try {
      await removeFave(faveID);
      this.getFaveIDs;
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          setFaveId: this.setFaveID,
          removeFaveId: this.removeFaveID
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
