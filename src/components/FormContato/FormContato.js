import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormContato.css';

// TODO: Instalar formik e yup: npm install formik yup

const FormContato = ({ className }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Schema de validação com Yup
  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, 'Nome deve ter pelo menos 3 caracteres')
      .required('Nome é obrigatório'),
    email: Yup.string()
      .email('Email inválido')
      .required('Email é obrigatório'),
    telefone: Yup.string()
      // Regex corrigido para validação de telefone (XX) XXXXX-XXXX
      .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Formato: (00) 00000-0000')
      .required('Telefone é obrigatório'),
    assunto: Yup.string()
      .required('Assunto é obrigatório'),
    mensagem: Yup.string()
      .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
      .required('Mensagem é obrigatória'),
    politicaPrivacidade: Yup.boolean()
      .oneOf([true], 'Você deve concordar com a política de privacidade')
  });

  // Configuração do Formik
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
      politicaPrivacidade: false
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setSubmitStatus(null);
      try {
        // Simulação de envio para API
        console.log('Dados do formulário:', values);
        
        // TODO: Implementar chamada real à API (ex: ContatosService.enviarContato(values))
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da API
        
        // Simulando resposta bem-sucedida
        setSubmitStatus('success');
        resetForm();
        
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        setSubmitStatus('error');
      } finally {
        setLoading(false);
      }
    }
  });

  // Função para formatar o telefone
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.substring(0, 11); // Limita a 11 dígitos (DDD + 9 dígitos)
    
    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 9) { // Para (XX) XXXXX-XXXX
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    // else if (value.length > 8) { // Para (XX) XXXX-XXXX (se precisar suportar 8 dígitos)
    //     value = value.replace(/(\d{4})(\d)/, '$1-$2');
    // }

    formik.setFieldValue('telefone', value);
  };

  return (
    <div className={`form-contato ${className || ''}`}>
      {/* Usar h2 ou h3 dependendo do contexto da página */}
      <h2>Entre em Contato</h2> 
      <p>Preencha o formulário abaixo para agendar uma consulta ou tirar suas dúvidas.</p>
      
      {submitStatus === 'success' && (
        <div className="form-status success">
          <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="form-status error">
          <p>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</p>
        </div>
      )}
      
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome completo"
            {...formik.getFieldProps('nome')} // Simplifica props do formik
            aria-invalid={formik.touched.nome && !!formik.errors.nome}
            aria-describedby="nome-error"
            disabled={loading}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div id="nome-error" className="error-message">{formik.errors.nome}</div>
          )}
        </div>
        
        {/* Usar grid para campos lado a lado */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu.email@exemplo.com"
              {...formik.getFieldProps('email')}
              aria-invalid={formik.touched.email && !!formik.errors.email}
              aria-describedby="email-error"
              disabled={loading}
            />
            {formik.touched.email && formik.errors.email && (
              <div id="email-error" className="error-message">{formik.errors.email}</div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="telefone">Telefone*</label>
            <input
              type="tel" // Usar type="tel"
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              value={formik.values.telefone} // Controlado pelo handlePhoneChange
              onChange={handlePhoneChange}
              onBlur={formik.handleBlur}
              aria-invalid={formik.touched.telefone && !!formik.errors.telefone}
              aria-describedby="telefone-error"
              disabled={loading}
            />
            {formik.touched.telefone && formik.errors.telefone && (
              <div id="telefone-error" className="error-message">{formik.errors.telefone}</div>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="assunto">Assunto*</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            placeholder="Assunto da mensagem"
            {...formik.getFieldProps('assunto')}
            aria-invalid={formik.touched.assunto && !!formik.errors.assunto}
            aria-describedby="assunto-error"
            disabled={loading}
          />
          {formik.touched.assunto && formik.errors.assunto && (
            <div id="assunto-error" className="error-message">{formik.errors.assunto}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem*</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            placeholder="Descreva sua situação ou dúvida"
            {...formik.getFieldProps('mensagem')}
            aria-invalid={formik.touched.mensagem && !!formik.errors.mensagem}
            aria-describedby="mensagem-error"
            disabled={loading}
          ></textarea>
          {formik.touched.mensagem && formik.errors.mensagem && (
            <div id="mensagem-error" className="error-message">{formik.errors.mensagem}</div>
          )}
        </div>
        
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="politicaPrivacidade"
            name="politicaPrivacidade"
            {...formik.getFieldProps('politicaPrivacidade')}
            checked={formik.values.politicaPrivacidade} // Garante que o estado visual reflita o valor
            aria-invalid={formik.touched.politicaPrivacidade && !!formik.errors.politicaPrivacidade}
            aria-describedby="politica-error"
            disabled={loading}
          />
          <label htmlFor="politicaPrivacidade">
            Concordo com a <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>*
          </label>
          {/* Mensagem de erro posicionada abaixo do label para melhor acessibilidade */}
          {formik.touched.politicaPrivacidade && formik.errors.politicaPrivacidade && (
            <div id="politica-error" className="error-message policy-error">{formik.errors.politicaPrivacidade}</div>
          )}
        </div>
        
        <button 
          type="submit" 
          className="button submit-button" 
          // Desabilitar se estiver carregando, enviando ou se o formulário for inválido
          disabled={loading || formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
};

export default FormContato; 