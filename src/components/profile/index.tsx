import { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import MaskInput, { MaskInputProps, Masks } from "react-native-mask-input";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

const profile = {
  image: "@/assets/profile.jpg",
  name: "Jessica Sabino",
  email: "enos.bogisich@orland.tv",
  birthDate: "10-04-1980",
  phone: "11987655678",
  address: "Rua dos Bobos",
};

type ProfileProps = {
  isEditMode?: boolean;
};

const EditInput = ({
  placeholder,
  value,
  onChangeText,
  mask,
  ...props
}: MaskInputProps) => {
  return (
    <MaskInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      mask={mask}
      {...props}
    />
  );
};

export const Profile = ({ isEditMode }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(isEditMode || false);
  const [birthDate, setBirthDate] = useState(profile.birthDate);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.editIcon}>
              <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                <MaterialIcons
                  name={isEditing ? "save" : "edit-square"}
                  size={24}
                  color={isEditing ? colors.blue[200] : colors.gray[300]}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("@/assets/profile.jpg")}
              style={styles.image}
            />
            <Text style={styles.name}>{profile.name}</Text>
          </View>
          <View style={styles.address}>
            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Email</Text>
              <Text style={styles.addressValue}>{profile.email}</Text>
            </View>
            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Nascimento</Text>
              {!isEditing && (
                <Text style={styles.addressValue}>{profile.birthDate}</Text>
              )}
              {isEditing && (
                <EditInput
                  placeholder="Data de Nascimento"
                  value={birthDate}
                  onChangeText={setBirthDate}
                  mask={Masks.DATE_DDMMYYYY}
                  inputMode="numeric"
                />
              )}
            </View>
            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Telefone</Text>
              {!isEditing && <Text style={styles.addressValue}>{phone}</Text>}
              {isEditing && (
                <EditInput
                  placeholder="Telefone"
                  value={phone}
                  onChangeText={setPhone}
                  mask={Masks.BRL_PHONE}
                  inputMode="tel"
                />
              )}
            </View>
            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Endereço</Text>
              {!isEditing && <Text style={styles.addressValue}>{address}</Text>}
              {isEditing && (
                <EditInput
                  placeholder="Endereço"
                  value={address}
                  onChangeText={setAddress}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
