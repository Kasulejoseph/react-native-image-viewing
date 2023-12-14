import {StyleSheet, Text, View} from 'react-native';

const ImageOverlay = () => {
  return (
    <View style={styles.overlay}>
      {[1, 2, 3, 4, 5].map(index => (
        <View key={index} style={styles.watermarkContainer}>
          <View style={styles.watermarkText}>
            {[1, 2, 3, 4, 5].map(i => (
              <Text style={styles.watermarkItem} key={i}>
                Hello world{' '}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: 'none',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  watermarkText: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: [{rotate: '-25deg'}],
  },
  watermarkContainer: {
    alignItems: 'center',
    padding: 10,
  },
  watermarkItem: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.2,
    margin: 20,
  },
});

export default ImageOverlay;
