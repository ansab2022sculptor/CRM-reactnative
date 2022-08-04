import React from "react";
import {
  ToastAndroid,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../../components/Button";
import { clear } from "../../../utilities/asyncStorage";

const Welcome = () => {
  const { navigate } = useNavigation();

  const handleClear = () => {
    clear();
    ToastAndroid.show("Data is cleared!!", ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.containerText}>
          {"Welcome to Customer Relation Management App"}
        </Text>
      </View>
      <View>
        <Button text={"Regions"} onPress={() => navigate("Regions")} />
      </View>
      <View>
        <Button text={"Clear data"} onPress={handleClear} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
