import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';
import MiniCard from '../../components/MiniCard';
import {SearchBar} from 'react-native-elements';
import axios from 'axios';
import _ from 'lodash';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Home = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = async () => {
    const urlData = 'https://covid19-brazil-api.now.sh/api/report/v1';
    const data = await axios.get(urlData).then((res) => {
      return res.data.data;
    });
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    const query = search.toLowerCase();
    const result = _.filter(data, (uf) => {
      if (uf.state.toLowerCase().includes(query) && query != '') {
        return true;
      }
    });
    setSearchResult(result);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar estado"
        onChangeText={setSearch}
        value={search}
      />

      {data.length === 0 ? (
        <ActivityIndicator size="large" color="#BB86FC" />
      ) : (
        <View>
          <View style={styles.topCard}>
            <Card uf={searchResult.length > 0 ? searchResult[0] : data[1]} />
          </View>
          <ScrollView horizontal style={styles.miniCard}>
            {data.map((state) => {
              return <MiniCard uf={state} key={state.udi} />;
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topCard: {
    alignSelf: 'center',
    marginTop: 40,
  },
  miniCard: {
    marginTop: 40,
  },
});

export default Home;
