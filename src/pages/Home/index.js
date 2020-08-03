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
import {fetchData} from './fetchData';
import axios from 'axios';
import _ from 'lodash';

const Home = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(async () => {
    setLoading(true);
    let data = [];
    data = await fetchData();
    setData(data);
    setLoading(false);
  }, []);

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
            {searchResult.length > 0 ? (
              <Card
                deaths={searchResult[0].deaths}
                cases={searchResult[0].cases}
                suspects={searchResult[0].suspects}
                state={searchResult[0].state}
                uf={searchResult[0].uf}
              />
            ) : (
              <Card
                deaths={data[1].deaths}
                cases={data[1].cases}
                suspects={data[1].suspects}
                state={data[1].state}
                uf={data[1].uf}
              />
            )}
          </View>
          <ScrollView horizontal style={styles.miniCard}>
            {data.map((state) => {
              return (
                <MiniCard
                  deaths={state.deaths}
                  cases={state.cases}
                  suspects={state.suspects}
                  state={state.state}
                  uf={state.uf}
                  key={state.udi}
                />
              );
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
    marginTop: 60,
  },
});

export default Home;
