import { FlatList } from 'react-native-gesture-handler';

const profiles = [
    {
      id: 1,
      nome: 'Carlos Caixa Dágua',
      src: require('../assets/images/pedreiro/pedreiro1.png'),
      nota:5.0,
      idade: 42,
      exp: 10,
      texto: 'Me chamo Carlos, possuo 10 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 2,
      nome: 'Luva de Pedreiro',
      src: require('../assets/images/pedreiro/pedreiro2.png'),
      nota: 5.0,
      idade: 36,
      exp: 20,
      texto: 'Me chamo Luva, possuo 20 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 3,
      nome: 'Marcio Araújo',
      src: require('../assets/images/pedreiro/pedreiro3.png'),
      nota: 5.0,
      idade: 35,
      exp: 8,
      texto: 'Me chamo Márcio, possuo 8 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 4,
      nome: 'Cleiton Xavier',
      src: require('../assets/images/pedreiro/pedreiro4.png'),
      nota: 4.9,
      idade: 24,
      exp: 3,
      texto: 'Me chamo Cleiton, possuo 3 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 5,
      nome: 'Saulo Hernandes',
      src: require('../assets/images/pedreiro/pedreiro5.png'),
      nota: 4.9,
      idade: 39,
      exp: 11,
      texto: 'Me chamo Saulo, possuo 11 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 6,
      nome: 'Lindomar Castilho',
      src: require('../assets/images/pedreiro/pedreiro6.png'),
      nota: 4.8,
      idade: 51,
      exp: 32,
      texto: 'Me chamo Lindomar, possuo 32 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 7,
      nome: 'Bartô Galeno',
      src: require('../assets/images/pedreiro/pedreiro7.png'),
      nota: 4.8,
      idade: 36,
      exp: 15,
      texto: 'Me chamo Bartô, possuo 15 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 8,
      nome: 'Genival Santos',
      src: require('../assets/images/pedreiro/pedreiro8.png'),
      nota: 4.8,
      idade: 40,
      exp: 1,
      texto: 'Me chamo Genival, possuo 1 ano de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 9,
      nome: 'Pereira Sales',
      src: require('../assets/images/pedreiro/pedreiro9.png'),
      nota: 4.7,
      idade: 30,
      exp: 5,
      texto: 'Me chamo Pereira, possuo 5 anos de experiência na area de construção civil e sou muito bom no que faço.',

    },
    {
      id: 10,
      nome: 'Bartô Galeno',
      src: require('../assets/images/pedreiro/pedreiro7.png'),
      nota: 4.6,
      idade: 36,
      exp: 15,
      texto: 'Me chamo Bartô, possuo 15 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
    {
      id: 11,
      nome: 'Luva de Pedreiro',
      src: require('../assets/images/pedreiro/pedreiro2.png'),
      nota: 4.5,
      idade: 36,
      exp: 20,
      texto: 'Me chamo Luva, possuo 20 anos de experiência na area de construção civil e sou muito bom no que faço.',
    },
  ];

  function getProfessional(){
    return profiles;
  }
  function getProfessionalbyid(id){
    return profiles.find(p=>p.id===id)
  }
  export {getProfessional, getProfessionalbyid}
