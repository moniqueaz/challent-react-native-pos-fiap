import { View, Image, Text, TouchableOpacity } from "react-native";

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

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.editIcon}>
          <TouchableOpacity onPress={() => alert("Editar perfil")}>
            <MaterialIcons
              name="edit-square"
              size={24}
              color={colors.gray[300]}
            />
          </TouchableOpacity>
        </View>
        <Image source={require("@/assets/profile.jpg")} style={styles.image} />
        <Text style={styles.name}>{profile.name}</Text>
      </View>
      <View style={styles.address}>
        <View style={styles.addressGroup}>
          <Text style={styles.addressTitle}>Email</Text>
          <Text style={styles.addressValue}>{profile.email}</Text>
        </View>
        <View style={styles.addressGroup}>
          <Text style={styles.addressTitle}>Nascimento</Text>
          <Text style={styles.addressValue}>{profile.birthDate}</Text>
        </View>
        <View style={styles.addressGroup}>
          <Text style={styles.addressTitle}>Telefone</Text>
          <Text style={styles.addressValue}>{profile.phone}</Text>
        </View>
        <View style={styles.addressGroup}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressValue}>{profile.address}</Text>
        </View>
      </View>
    </View>
  );
};
