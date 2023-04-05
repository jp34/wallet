import React, { useState, forwardRef, useImperativeHandle } from "react";
import { FormControl, Input } from "native-base";

const TextInputFormControl = forwardRef((props, ref) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");

  useImperativeHandle(ref, () => ({
    focus: () => {
      setIsInvalid(false);
      inputRef.current.focus();
    },
    clear: () => {
      setIsInvalid(false);
      setErrorMessage("");
      setText("");
    },
    validate: () => {
      if (props.required && !text) {
        setIsInvalid(true);
        setErrorMessage("This field is required.");
        return false;
      }
      setIsInvalid(false);
      setErrorMessage("");
      return true;
    },
    getValue: () => text,
  }));

  const inputRef = React.useRef(null);

  return (
    <FormControl isRequired={props.required} isInvalid={isInvalid}>
      <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
        {props.label}
      </FormControl.Label>
      <Input
        size="xl"
        variant="primary"
        autoCorrect={false}
        value={text}
        onChangeText={setText}
        onFocus={() => setIsInvalid(false)}
        ref={inputRef}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={false}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
});

export default TextInputFormControl;
