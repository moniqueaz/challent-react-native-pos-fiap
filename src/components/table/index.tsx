import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { EmptyMessage } from "@/components/EmptyMessage";

type TableProps = {
  header: string[];
  data: string[][];
};

export const Table: FC<TableProps> = ({ header, data }) => {
  if (!header || header.length === 0 || !data || data.length === 0) {
    return (
      <View style={styles.container}>
        <EmptyMessage>Sem dados disponíveis</EmptyMessage>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {header.map((item, index) => (
          <Text key={index} style={styles.headerItem}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.body}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <Text key={cellIndex} style={styles.cell}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};
