import logo from './logo.svg';
import './App.css';
import { useForm} from 'react-hook-form';

function App() {


  const {register, handleSubmit, setValue, setFocus} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log('cep =>', cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json()).then(data => {
      console.log(data);
      setValue('logradouro', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('uf', data.uf);
      setValue('complemento', data.complemento);
      setValue('ibge', data.ibge);
      setValue('gia', data.gia);
      setValue('ddd', data.ddd);
      setValue('siafi', data.siafi);
      
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCEP} />
      </label>
      <label>
        Estado:
        <input type="text" {...register("uf" )}/>
      </label>
      <label>
        Cidade:
        <input type="text" {...register("cidade" )}/>
      </label>
      <label>
        Rua:
        <input type="text" {...register("logradouro" )}/>
      </label>
      <label>
        Bairro:
        <input type="text" {...register("bairro" )}/>
      </label>
      <label>
        Complemento:
        <input type="text" {...register("complemento" )}/>
      </label>
      <label>
        IBGE:
        <input type="text" {...register("ibge" )}/>
      </label>
      <label>
        GIA:
        <input type="text" {...register("gia" )}/>
      </label>
      <label>
        DDD:
        <input type="text" {...register("ddd" )}/>
      </label>
      <label>
        Siafi:
        <input type="text" {...register("siafi" )}/>
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}


export default App;
