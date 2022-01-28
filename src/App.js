import { Component } from 'react/cjs/react.production.min';
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro';
import "./App.css"

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }

}

export default App;
