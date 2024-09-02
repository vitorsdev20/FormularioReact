import { useState } from "react";
import "./Form.css";
const Form = () => {
    const initilform = {
        nome: "",
        senha: "",
        email: ""
    
    }
    /* estado do formulario */
    const [FormState, setFormState] = useState(initilform);
    /*  função para lidar quando a alteração do campos de entrada  */
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name,email,senha } = target;
        setFormState({ ...FormState, [name]  : value,[senha]  : value,[email]  : value  })
    }
    /* função para lida com a submição do formulario */
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(FormState.nome,FormState.senha,FormState.email);

        setFormState({ ...initilform });
    }
    return (
        <div className="containerForm">
        <div className="box">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome</label>
                        <input type="text"
                            id="nome"
                            name="nome"
                            value={FormState.nome}
                            onChange={handleInput}
                            placeholder="Digite seu nome"/>
                    </div>
                </form>

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            name="email"
                            value={FormState.email}
                            onChange={handleInput}
                            placeholder="Digite seu email"
                            required/>
                    </div>
                </form>

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="senha">Senha</label>
                        <input type="password"
                            id="senha"
                            name="senha"
                            value={FormState.senha}
                            onChange={handleInput}
                            placeholder="Digite sua senha"
                            required/>
                    </div>
                    <div className="form-control">
                        <button className="btn" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Form;
