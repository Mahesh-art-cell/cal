// App.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      // Use eval for simplicity; in production, consider a safer alternative
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Calculator"
          value={input}
          style={styles.input}
          editable={false}
        />
        <View style={styles.buttonContainer}>
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C', '/'].map((item) => (
            <Button
              key={item}
              title={item}
              onPress={() => {
                if (item === '=') {
                  calculateResult();
                } else if (item === 'C') {
                  clearInput();
                } else {
                  handleButtonPress(item);
                }
              }}
            />
          ))}
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 20,
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;