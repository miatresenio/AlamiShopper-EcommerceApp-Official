import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import GoogleLogo from "@/assets/images/google-logo.png";
import { Link, LinkProps } from "expo-router";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

type Props = {
  emailHref: LinkProps["href"]; //prop for email link
};

const SocialLoginButtons = (props: Props) => {
  const { emailHref } = props; //destructure it from props
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500).springify()}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonTxt}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(500).springify()}>
        <TouchableOpacity style={styles.button}>
          {/* <Google width={20} height={20} /> */}
          <Image source={GoogleLogo} style={{ width: 20, height: 20 }} />
          <Text style={styles.buttonTxt}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(1100).duration(500).springify()}
      >
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text style={styles.buttonTxt}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    gap: 5,
    marginBottom: 15,
    paddingVertical: 13,
  },
  buttonTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
});
