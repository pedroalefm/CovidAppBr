import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MiniCard = ({deaths, cases, suspects, state, uf}) => {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`,
          }}
        />
        <Text style={styles.title}>{state}</Text>
      </View>

      <View style={styles.containerData}>
        <View style={styles.textDataContainer}>
          <Icon name="medkit" color="#BB86FC" size={16} />
          <Text style={styles.textData}>{cases}</Text>
        </View>

        <View style={styles.textDataContainer}>
          <Icon name="cross" color="#BB86FC" size={16} />
          <Text style={styles.textData}>{deaths}</Text>
        </View>

        <View style={styles.textDataContainer}>
          <Icon name="mask" color="#BB86FC" size={16} />
          <Text style={styles.textData}>{suspects}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width * 0.6,
    height: 170,
    backgroundColor: '#121212',
    borderRadius: 8,
    elevation: 12,
    margin: 10,
  },
  textTitleData: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.5)',
    marginLeft: 2,
  },
  textDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  containerData: {
    marginTop: 20,
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  data: {
    alignItems: 'center',
    marginTop: 2,
  },
  textData: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 'bold',
    fontFamily: 'Noto Sans',
    marginLeft: 2,
  },
  imgContainer: {
    position: 'absolute',
    left: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 25,
    marginLeft: 10,
    fontFamily: 'Noto Sans',
  },
});

export default MiniCard;
