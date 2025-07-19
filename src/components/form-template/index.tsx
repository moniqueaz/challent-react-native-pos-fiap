import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { validateFields } from "@/utils/validationUtils";

type InputField = {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  type?: "text" | "date" | "dropdown" | "checkbox";
  options?: string[];
  keyboardType?: "default" | "numeric" | "email-address";
  disabled?: boolean;
  required?: boolean;
};

type ButtonProps = {
  text: string;
  onPress: () => void;
  variant?: "cancel" | "submit";
};

type FormTemplateProps = {
  title: string;
  inputs: InputField[];
  buttons: ButtonProps[];
  onInputChange: (name: string, value: string) => void;
};

export const FormTemplate = ({
  title,
  inputs,
  buttons,
  onInputChange,
}: FormTemplateProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDateField, setCurrentDateField] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState<
    string[]
  >([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [currentDropdownField, setCurrentDropdownField] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {inputs.map((input, index) => {
          if (input.disabled) {
            return (
              <View key={index} style={styles.inputWrapper}>
                <Text style={styles.label}>{input.label}</Text>
                <TextInput
                  placeholder={input.placeholder}
                  value={input.value}
                  editable={false}
                  style={[styles.input, styles.disabledInput]}
                />
              </View>
            );
          }

          if (input.type === "checkbox") {
            const isChecked = input.value === "true";
            return (
              <View key={index} style={styles.inputWrapper}>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() =>
                    onInputChange(input.name, isChecked ? "false" : "true")
                  }
                >
                  <View
                    style={[
                      styles.checkbox,
                      isChecked && styles.checkboxChecked,
                    ]}
                  >
                    {isChecked && (
                      <MaterialIcons name="check" size={16} color="#fff" />
                    )}
                  </View>
                  <Text style={styles.label}>{input.label}</Text>
                </TouchableOpacity>
                {errors[input.name] && (
                  <Text style={styles.errorText}>{errors[input.name]}</Text>
                )}
              </View>
            );
          }

          if (input.type === "date") {
            return (
              <View key={index} style={styles.inputWrapper}>
                <Text style={styles.label}>{input.label}</Text>
                <TouchableOpacity
                  style={[
                    styles.input,
                    styles.dateInput,
                    errors[input.name] && styles.inputError,
                  ]}
                  onPress={() => {
                    setCurrentDateField(input.name);
                    setShowDatePicker(true);
                  }}
                >
                  <Text>{input.value || input.placeholder}</Text>
                  <MaterialIcons name="calendar-today" size={20} color="#555" />
                </TouchableOpacity>
                {errors[input.name] && (
                  <Text style={styles.errorText}>{errors[input.name]}</Text>
                )}
              </View>
            );
          }

          if (input.type === "dropdown") {
            return (
              <View key={index} style={styles.inputWrapper}>
                <Text style={styles.label}>{input.label}</Text>
                <TouchableOpacity
                  style={[
                    styles.input,
                    errors[input.name] && styles.inputError,
                  ]}
                  onPress={() => {
                    setCurrentDropdownField(input.name);
                    setCurrentDropdownOptions(input.options || []);
                    setDropdownVisible(true);
                  }}
                >
                  <Text>{input.value || input.placeholder}</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="#555"
                  />
                </TouchableOpacity>
                {errors[input.name] && (
                  <Text style={styles.errorText}>{errors[input.name]}</Text>
                )}
              </View>
            );
          }

          return (
            <View key={index} style={styles.inputWrapper}>
              <Text style={styles.label}>{input.label}</Text>
              <TextInput
                placeholder={input.placeholder}
                value={input.value}
                onChangeText={(value) => onInputChange(input.name, value)}
                style={[styles.input, errors[input.name] && styles.inputError]}
                keyboardType={input.keyboardType || "default"}
              />
              {errors[input.name] && (
                <Text style={styles.errorText}>{errors[input.name]}</Text>
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.buttonRow}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (
                button.variant === "submit" &&
                !validateFields(inputs, setErrors)
              ) {
                return;
              }
              button.onPress();
            }}
            style={[
              styles.button,
              button.variant === "cancel"
                ? styles.cancelButton
                : styles.submitButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                button.variant === "cancel"
                  ? styles.cancelButtonText
                  : styles.submitButtonText,
              ]}
            >
              {button.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={new Date()}
          onChange={(_, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              const formattedDay = selectedDate
                .getDate()
                .toString()
                .padStart(2, "0");
              const formattedMonth = (selectedDate.getMonth() + 1)
                .toString()
                .padStart(2, "0");
              const formattedYear = selectedDate.getFullYear().toString();
              const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;
              onInputChange(currentDateField, formattedDate);
            }
          }}
        />
      )}

      {dropdownVisible && (
        <Modal
          transparent
          animationType="fade"
          visible={dropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setDropdownVisible(false)}
          />
          <View style={styles.modalContent}>
            <FlatList
              data={currentDropdownOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => {
                    onInputChange(currentDropdownField, item);
                    setDropdownVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};
