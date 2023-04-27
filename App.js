import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {classe: '', nota: '', resultado: 0.0, info: ''}
    this.calculaCarreira = this.calculaCarreira.bind(this)
  }

  calculaCarreira(){
    let s = this.state
    let calculaCarreira = s.classe
    if (calculaCarreira === 'Sisu') {
      s.resultado = parseFloat(s.nota)
      if(s.resultado < 850){
        s.info ='Entre 750 e 850, Medicina, odontologia, engenharia civil, Direito, Arquitetura e Urbanismo, Farmácia'
      }
      else if (s.resultado < 750){
        s.info ='Entre 650 e 750, Nutrição, Psicologia, Cinema, Jornalismo, Enfermagem, Biomedicina, Publicidade e Propaganda, Administração, Agronomia, Gastronomia, Ciências Contábeis, Comércio Exterior, Filosofia, Relações Internacionais, Fisioterapia, Sistemas de Informação, Medicina Veterinária'
      }
      else if (s.resultado < 650){
        s.info ='Entre 580 e 650, Pedagogia, História, Geografia, Gestão de Recursos Humanos, Sistemas de Informação, Gestão Financeira, Marketing, Logística, Química, Física, Análise e Desenvolvimento de Sistemas'
      }
    }
    else if (calculaCarreira === 'Prouni') {
      s.resultado = parseFloat(s.nota)
      if(s.resultado < 770){
        s.info ='Entre 650 a 770, Medicina, Engenharia Civil, Direito'
      }
      else if (s.resultado < 650){
        s.info ='Entre 550 e 650, Psicologia, Engenharia (várias habilitações), Jornalismo, Farmácia, Arquitetura e Urbanismo, Direito, Odontologia, Nutrição, Gastronomia'
      }
    }
  }

  clear = () => {
    this.setState({
      classe: '',
      nota: '',
      resultado: '',
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Nota Redação</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={nota => this.setState({ nota })}
          value={this.state.nota}
          placeholder='Insira sua pontuação'
          keyboardType='decimal-pad'
          
        />
        <Text style={styles.text}>Classe</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={classe => this.setState({ classe })}
          value={this.state.classe}
          placeholder='Insira sua classe (Sisu, Fies ou Prouni)'
          keyboardType='default'
        />
        <Button
          onPress={this.calculaCarreira}
          title='Calcular'
          color='green'
        />
        <Text style={styles.input}>
         Carreiras que poderá concorrer: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 5,
    margin: 20,
  }
});