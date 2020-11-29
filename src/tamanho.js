import React, {useState} from 'react';

const Tamanho = props => {

  let [tamanho, setTamanho] = useState({
    descricao: '',
    tamanho: 0
  });

  function editOnChange(event) {
    setTamanho({
      descricao: '',
      tamanho: event.target.value.length
    });
  }

  return(
    <div className="identificaLogado">
      <input 
        type="text" onChange={event => editOnChange(event)}>
      </input>

      <p>
        Este texto contém {tamanho.tamanho} caracteres.
      </p>
    </div>
  );
}

export default Tamanho;