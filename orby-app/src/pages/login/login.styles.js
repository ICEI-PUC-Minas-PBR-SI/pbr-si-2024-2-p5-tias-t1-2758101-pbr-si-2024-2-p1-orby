import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  rememberMeText: {
    color: "#333",
  },
  forgotPasswordText: {
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  socialButtonGoogle: {
    flexDirection: "row",
    backgroundColor: "#db4437",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  socialButtonFacebook: {
    flexDirection: "row",
    backgroundColor: "#3b5998",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  socialButtonText: {
    color: "#fff",
    marginLeft: 10,
  },
  signUpText: {
    textAlign: "center",
    color: "#666",
  },
  signUpLink: {
    color: "#1e88e5",
  },
});

export default styles;
