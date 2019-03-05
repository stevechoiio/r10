import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  location: {
    fontSize: 17,
    color: "#999999",
    justifyContent: "space-between",
    marginBottom: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  time: { color: "#cf392a", marginTop: 10 },
  content: {
    lineHeight: 25,
    marginTop: 20,
    marginBottom: 10
  },
  favouriteButton: {
    fontSize: 17,
    marginTop: 10,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  speakerImage: {
    borderRadius: 25
  },
  activeTitle: {
    color: "red"
  }
});
