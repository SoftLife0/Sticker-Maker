import { StyleSheet, Image } from 'react-native';

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {

    const imageSource = selectedImage ? { uri:selectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});


export default ImageViewer;