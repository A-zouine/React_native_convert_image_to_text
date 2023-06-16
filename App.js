import React, { useEffect, useState } from 'react';
import { View, Image, Button } from 'react-native';
import TextDetector from 'react-native-text-detector';



const App = () => {
  const [text, setText] = useState('');

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.8, base64: true };
      const data = await this.camera.takePictureAsync(options);
      
      Tesseract.recognize(data.uri, 'eng', { logger: m => console.log(m) })
        .then(result => {
          setText(result.data.text);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
      />
      <TouchableOpacity onPress={takePicture}>
        <Text>Convert Image to Text</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
};

export default App;
