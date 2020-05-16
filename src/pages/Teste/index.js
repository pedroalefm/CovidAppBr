import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
let count = 0;
let text = [
  'Você não tem sintomas, continue se precavendo',
  'Você tem sintomas leves, é recomendado descanço. Hidrate-se e se alimente bem!',
  'Você tem sintomas moderados, é recomendado descanço. Caso os sintomas persistam, entre em contato com o posto de saúde mais próximo de você!',
  'Você tem sintomas graves, procure ajuda de um profissional!',
];
const Teste = () => {
  const [questions, setQuestions] = useState([
    {sintoma: 'febre', texto: 'Você teve febre nas últimas 24hrs?'},
    {sintoma: 'tosse', texto: 'Você está com tosse seca?'},
    {sintoma: 'cansaco', texto: 'Você se sente cansado?'},
    {
      sintoma: 'dores',
      texto: 'Você esteve com dor de cabeça ou dores no corpo?',
    },
    {sintoma: 'diarreia', texto: 'Você está com diarréia?'},
    {sintoma: 'faltaDeAr', texto: 'Você está sentindo falta de ar?'},
    {
      sintoma: 'risco',
      texto: 'Você está grávida ou é pessoa com mais de 60 anos?',
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [finish, setFinish] = useState(false);
  const [currentSintomas, setCurrentSintomas] = useState([]);
  const [result, setResult] = useState('');
  const yes = () => {
    let sintomas = [...currentSintomas];
    sintomas.push(currentQuestion.sintoma);
    setCurrentSintomas(sintomas);
    if (count < questions.length - 1) {
      count++;
      setCurrentQuestion(questions[count]);
    } else {
      getResult();

      setFinish(true);
    }
  };

  const noQuestions = () => {
    if (count < questions.length - 1) {
      count++;
      setCurrentQuestion(questions[count]);
    } else {
      getResult();

      setFinish(true);
    }
  };

  const getResult = () => {
    let result = 'nd';
    if (currentSintomas.includes('febre')) {
      result = 'leve';
    }
    if (
      (currentSintomas.includes('febre') &&
        currentSintomas.includes('tosse')) ||
      currentSintomas.includes('dores')
    ) {
      result = 'moderado';
    }
    if (
      currentSintomas.includes('febre') &&
      currentSintomas.includes('faltaDeAr')
    ) {
      result = 'grave';
    }
    if (
      currentSintomas.includes('febre') &&
      currentSintomas.includes('faltaDeAr') &&
      currentSintomas.includes('risco')
    ) {
      result = 'gravissimo';
    }
    setResult(result);
  };
  const reset = () => {
    setResult('');
    setCurrentSintomas([]);
    setFinish(false);
    setCurrentQuestion(questions[0]);
    count = 0;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.warningText}>
        O seguinte teste é um guia para identificar sintomas, ele não tira de
        jeito nenhum o mérito de se procurar um profissional preparado para um
        diagnóstico correto.
      </Text>
      {!finish ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.texto}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => noQuestions()}
              style={styles.notBtn}>
              <Text style={styles.btnText}>NÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => yes()} style={styles.yesBtn}>
              <Text style={styles.btnText}>SIM</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {result === 'nd'
              ? text[0]
              : result === 'leve'
              ? text[1]
              : result === 'moderado'
              ? text[2]
              : result === 'grave' || result === 'gravissimo'
              ? text[3]
              : null}
          </Text>

          <TouchableOpacity onPress={() => reset()} style={styles.resetBtn}>
            <Text style={styles.btnText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  warningText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'justify',
    marginTop: 40,
    width: Dimensions.get('screen').width * 0.9,
  },
  questionText: {
    fontSize: 26,
    color: 'rgba(255,255,255,0.8)',
    alignSelf: 'flex-start',
    width: Dimensions.get('screen').width * 0.9,
    marginLeft: 10,
  },
  notBtn: {
    borderRadius: 8,
    borderColor: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(255,4,8,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    marginRight: 5,
  },
  resetBtn: {
    borderRadius: 8,
    borderColor: 'rgba(255,255,255,0.8)',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    marginRight: 5,
    marginTop: 20,
  },
  questionContainer: {
    alignItems: 'center',
    height: Dimensions.get('screen').height * 0.5,
    marginTop: 50,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  yesBtn: {
    borderRadius: 8,
    borderColor: 'rgba(255,255,255,0.8)',
    backgroundColor: '#BB86FC',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    marginLeft: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
  },
});
export default Teste;
