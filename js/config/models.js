import { AsyncStorage } from "react-native";

export const setFave = async faveID => {
  try {
    await AsyncStorage.setItem(
      `${faveID}`,
      JSON.stringify({ id: faveID, favedOn: new Date() })
    );
  } catch (error) {
    console.log(error);
  }
};

export const getFaves = async () => {
  try {
    let allKey = await AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(allKey);
  } catch (error) {
    console.log(error);
  }
};

export const removeFave = async faveID => {
  try {
    await AsyncStorage.removeItem(`${faveID}`);
  } catch (error) {
    console.group(error);
  }
};
