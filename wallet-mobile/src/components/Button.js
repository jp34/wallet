import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import styles from './styles';

const Button = ({ text, imgSource, textColor, backColor }) => {
  return (
    <TouchableOpacity style={styles.buttons.view} activeOpacity={0.5}>
      {imgSource && <Image source={imgSource} style={styles.buttons.image} />}
      {imgSource && (
        <View
          style={StyleSheet.compose(styles.buttons.separator, {
            backgroundColor: backColor,
          })}
        />
      )}
      <Text
        style={StyleSheet.compose(styles.buttons.text, {
          color: textColor,
        })}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
