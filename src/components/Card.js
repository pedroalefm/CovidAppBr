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

const Card = ({deaths, cases, suspects, state, uf}) => {
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
        <View style={styles.data}>
          <Text style={styles.textTitleData}>Casos</Text>
          <View style={styles.textDataContainer}>
            <Icon name="medkit" color="#BB86FC" size={16} />
            <Text style={styles.textData}>{cases}</Text>
          </View>
        </View>

        <View style={styles.data}>
          <Text style={styles.textTitleData}>Mortes</Text>

          <View style={styles.textDataContainer}>
            <Icon name="cross" color="#BB86FC" size={16} />
            <Text style={styles.textData}>{deaths}</Text>
          </View>
        </View>

        <View style={styles.data}>
          <Text style={styles.textTitleData}>Suspeitos</Text>

          <View style={styles.textDataContainer}>
            <Icon name="mask" color="#BB86FC" size={16} />
            <Text style={styles.textData}>{suspects}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width * 0.9,
    height: 200,
    backgroundColor: '#121212',
    borderRadius: 8,
    elevation: 12,
  },
  textTitleData: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.5)',
    marginLeft: 2,
  },
  textDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerData: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  img: {
    width: 50,
    height: 50,
  },
  data: {
    margin: 20,
    alignItems: 'center',
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
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Noto Sans',
  },
});

export default Card;
