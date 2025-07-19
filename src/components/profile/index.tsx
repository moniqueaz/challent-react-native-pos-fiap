import { FC, useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import MaskInput, { MaskInputProps, Masks } from "react-native-mask-input";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { useUsers } from "@/hooks/useUsers";

type ProfileProps = {
  isEditMode?: boolean;
};

const EditInput = ({
  placeholder,
  value,
  onChangeText,
  mask,
  ...props
}: MaskInputProps) => (
  <MaskInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    mask={mask}
    {...props}
  />
);

export const Profile: FC<ProfileProps> = ({ isEditMode }) => {
  const {
    nome,
    sobrenome,
    email,
    dataNascimento,
    numero,
    logradouro,
    urlFotoPerfil,
    updateUser,
  } = useUsers();

  const [isEditing, setIsEditing] = useState(isEditMode || false);
  const [name, setName] = useState(nome || "");
  const [emailState, setEmailState] = useState(email || "");
  const [birthDate, setBirthDate] = useState(dataNascimento || "");
  const [phone, setPhone] = useState(numero || "");
  const [address, setAddress] = useState(logradouro || "");

  useEffect(() => {
    setName(nome || "");
    setEmailState(email || "");
    setBirthDate(dataNascimento || "");
    setPhone(numero || "");
    setAddress(logradouro || "");
  }, [nome, sobrenome, email, dataNascimento, numero, logradouro]);

  const handleSave = async () => {
    try {
      await updateUser({
        nome: name,
        email: emailState,
        dataNascimento: birthDate,
        numero: phone,
        logradouro: address,
      });

      setName(name);
      setEmailState(emailState);
      setBirthDate(birthDate);
      setPhone(phone);
      setAddress(address);

      setIsEditing(false);
      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      Alert.alert("Erro", "Não foi possível atualizar o perfil.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.editIcon}>
              <TouchableOpacity
                onPress={isEditing ? handleSave : () => setIsEditing(true)}
              >
                <MaterialIcons
                  name={isEditing ? "save" : "edit-square"}
                  size={24}
                  color={isEditing ? colors.blue[200] : colors.gray[300]}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={
                urlFotoPerfil
                  ? { uri: urlFotoPerfil }
                  : require("@/assets/profile.jpg")
              }
              style={styles.image}
            />
            {!isEditing ? (
              <Text style={styles.name}>{`${nome || ""} ${
                sobrenome || ""
              }`}</Text>
            ) : (
              <TextInput
                style={[styles.input, { fontSize: 22, fontWeight: "bold" }]}
                value={name}
                onChangeText={setName}
                placeholder="Nome"
              />
            )}
          </View>

          <View style={styles.address}>
            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Email</Text>
              {!isEditing ? (
                <Text style={styles.addressValue}>{email}</Text>
              ) : (
                <TextInput
                  style={styles.input}
                  value={emailState}
                  onChangeText={setEmailState}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            </View>

            <View style={styles.addressGroup}>
              <Text style={styles.addressTitle}>Nascimento</Text>
              {!isEditing && (
                <Text style={styles.addressValue}>{birthDate}</Text>
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
