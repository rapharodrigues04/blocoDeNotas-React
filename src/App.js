import { Component } from 'react/cjs/react.production.min';
import ListaDeNotas from './components/listaDeNotas'
import FormularioCadastro from './components/formularioCadastro';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }

}

export default App;
