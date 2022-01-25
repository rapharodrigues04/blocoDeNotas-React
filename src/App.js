import { Component } from 'react/cjs/react.production.min';
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import "./App.css"

class App extends Component {
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }

}

export default App;
