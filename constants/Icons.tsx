import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet } from "react-native";

export type IconName =
  | "index"
  | "explore"
  | "notifications"
  | "cart"
  | "profile"
  | "userImage";

export const icon: Record<IconName, any> = {
  index: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),
  explore: ({ color }: { color: string }) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),
  notifications: ({ color }: { color: string }) => (
    <Ionicons name="notifications-outline" size={22} color={color} />
  ),
  cart: ({ color }: { color: string }) => (
    <Ionicons name="cart-outline" size={22} color={color} />
  ),
  profile: ({ color }: { color: string }) => (
    <Ionicons name="person-outline" size={22} color={color} />
  ),
  userImage: () => (
    <Image
      source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
      style={styles.userImg}
    />
  ),
};

const styles = StyleSheet.create({
  userImg: {
    height: 24,
    width: 24,
    borderRadius: 20,
  },
});
