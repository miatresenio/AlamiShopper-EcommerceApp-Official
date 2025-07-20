import { Colors } from "@/constants/Colors";
import { icon, IconName } from "@/constants/Icons";
import {
  GestureResponderEvent,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
  label: string;
  routeName: IconName; // 🟢 ITO LANG BINAGO: IconName galing sa Icons.tsx
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {routeName == "cart" && (
        //  Cart Badge
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}

      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? Colors.primary : Colors.gray }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1, // para equal width bawat TabBarButton
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Colors.highlight,
    top: -7,
    right: 16,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: {
    color: Colors.black,
    fontSize: 12,
  },
});
