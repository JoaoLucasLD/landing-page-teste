import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Foto from '../../public/banner.jpg'
import InstagramLogo from '../../public/instagram-logo.svg'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <>
      <div className="bg-slate-50 h-screen w-screen flex flex-col justify-start items-center">
        <div className='w-full py-12 px-9 flex justify-center bg-slate-900'>

        <Image src={Foto} alt='Imagem com informações sobre o curso preparatório'  />
        </div>
        <div className='pt-10 pb-16 px-7'>
          <p>
          CONCURSO SECRETARIA ESTADO DE EDUCAÇÃO – COMISSÃO ORGANIZADORA DO CONCURSO JÁ FORMADA. EDITAL EM FASE DE FORMAÇÃO.
          </p>
          <p className='pt-7'>
          RESOLUÇÃO CONJUNTA  SEPLAG/SEE Nº 10617, DE 21 DE JULHO  DE 2022 Institui Comissão para acompanhamento da realização de Concurso Público para provimento de cargos efetivos das carreiras de
          </p>
          <ul className='pt-7 list-disc ml-5 font-medium'>
            <li>Assistente Técnico de Educação Básica</li>
            <li>Analista Educacional – Inspetor Escolar,</li>
            <li>Analista Educacional – ANE e</li>
            <li>Técnico da Educação</li>
          </ul>
          <p className='pt-7'>
          RESOLUÇÃO CONJUNTA SEPLAG/SEE Nº 10.618, DE 22 DE JULHO DE 2022 Institui Comissão para acompanhamento da realização de Concurso Público para provimento de cargos efetivos das carreiras de
          </p>
          <ul className='pt-7 list-disc ml-5 font-medium'>
            <li>Professor de Educação Básica,</li>
            <li>Especialista em Educação Básica (Orientação Educacional/Supervisão Pedagógica)</li>
            <li>Analista de Educação Básica</li>
          </ul>
          <p className='pt-7'>
          São atribuições da Comissão do Concurso Público, além daquelas prevista no artigo 2º, do Decreto Estadual 42.899/2002:
          </p>
          <p className='pt-7'>
          I              – definir as competências de cada um de seus membros quanto aos procedimentos a serem adotados;
          </p>
          <p className='pt-7'>
          II             – planejar, acompanhar e fiscalizar os procedimentos necessários para realização do certame;
          </p>
          <p className='pt-7'>
          III            – acompanhar todas as etapas do Concurso;
          </p>
          <p className='pt-7'>
          IV           – planejar e monitorar as atividades de execução do concurso, bem como solicitar relatórios a instituição executora para acompanhamento do processo;
          </p>
          <p className='pt-7'>
          V             – deliberar junto à instituição executora contratada para realização do Concurso Público, assuntos pertinentes aos editais, prazos, publicações e homologações;
          </p>
          <p className='pt-7'>
          VI           – acompanhar a execução do contrato com a instituição executora contratada para realização do concurso, realizando o registro por meio de atas toda e qualquer reunião, ocorrências, solicitações relacionadas com a execução dos serviços e determinando as providências cabíveis; Parágrafo único. Os casos omissos serão resolvidos pelo Secretário de Planejamento e Gestão, ouvidos, se necessário, a Advocacia-Geral do Estado, a Comissão instituída para acompanhar o concurso público e o órgão ou a entidade destinatário do concurso público.
          </p>
          <p className='pt-7'>EDITAL 2017</p>
          <ul className='pt-7 list-disc ml-5 font-medium'>
            <li>606 VAGAS PARA PROFESSOR DE EDUCAÇÃO BÁSICA E ESPECIALISTA EM EDUCAÇÃO BÁSICA </li>
          </ul>
          <p className='pt-7'>EDITAL 2011</p>
          <ul className='pt-7 list-disc ml-5 font-medium'>
            <li>515 VAGAS PARA Assistente Técnico de Educação Básica, Analista Educacional – Inspetor Escolar,  Analista Educacional – ANE</li>
          </ul>
          <h2 className='pt-7 font-bold'>ATRIBUIÇÕES DO CARGO</h2>
          <h2 className='pt-7 font-bold'>(PUBLICADO EDITAL 2011 SEE MG)</h2>
          <h3 className='pt-7 font-bold'>1. Assistente Técnico de Educação Básica – ATB Nível I Grau A:</h3>
          <p className="pt-7">
          – exercer suas atividades em unidade escolar, participando do processo que envolve o planejamento, a elaboração, a execução e a avaliação do plano de desenvolvimento pedagógico e institucional da escola;
          <br />
          <br />
          – organizar e manter atualizados cadastros, arquivos, fichários, livros e outros instrumentos de escrituração da escola, relativos aos registros funcionais dos servidores e à vida escolar dos alunos;
          <br />
          <br />
          – organizar e manter atualizado o sistema de informações legais e regulamentares de interesse da escola;
          <br />
          <br />
          – redigir ofícios, exposições de motivos, atas e outros expedientes;
          <br />
          <br />
          – coletar, apurar, selecionar, registrar e consolidar dados para a elaboração de informações estatísticas;
          <br />
          <br />
          – realizar trabalhos de digitação e mecanografia;
          <br />
          <br />
          – realizar trabalhos de protocolização, preparo, seleção, classificação, registro e arquivamento de documentos e formulários;
          <br />
          <br />
          – atender, orientar e encaminhar o público;
          <br />
          <br />
          – auxiliar na organização, manutenção e atendimento em biblioteca escolar e sala de multimeios;
          <br />
          <br />
          – auxiliar no cuidado e na distribuição de material esportivo, de laboratórios, de oficinas pedagógicas e outros sob sua guarda;
          <br />
          <br />
          – exercer outras atividades integrantes do plano de desenvolvimento pedagógico e institucional da escola, previstas no regulamento desta lei e no regimento escolar.
          </p>
          
          <h3 className='pt-7 font-bold'>1. b) Assistente Técnico Educacional – ATE Nível I Grau A:</h3>
          <p className="pt-7">
          – exercer suas atividades na Unidade Central da SEE e nas Superintendências Regionais de Ensino da SEE, participando do processo que envolve o planejamento, a elaboração, a execução e a avaliação do plano de desenvolvimento pedagógico e institucional;
          <br />
          <br />
          – organizar e manter atualizados cadastros, arquivos, fichários, livros e outros instrumentos de escrituração da escola, relativos aos registros funcionais dos servidores; – organizar e manter atualizado o sistema de informações legais e regulamentares de interesse da SEE;
          <br />
          <br />
          – redigir ofícios, exposições de motivos, atas e outros expedientes;
          <br />
          <br />
          – coletar, apurar, selecionar, registrar e consolidar dados para elaboração de informações estatísticas;
          <br />
          <br />
          – realizar trabalhos de digitação e mecanografia;
          <br />
          <br />
          – realizar trabalhos de protocolização, preparo, seleção, classificação, registro e arquivamento de documentos e formulários; – atender, orientar e encaminhar a clientela;
          <br />
          <br />
          – auxiliar na organização, manutenção e atendimento em biblioteca e sala de multimeios;
          <br />
          <br />
          – exercer outras atividades integrantes do plano de desenvolvimento pedagógico e institucional da SEE.
          </p>

          
          <h3 className='pt-7 font-bold'>1. c) Analista Educacional – ANE Nível I Grau A:</h3>
          <p className="pt-7">– exercer atividade profissional específica em nível superior de escolaridade nos setores pedagógico e administrativo no campo da educação, na Unidade Central da SEE e nas Superintendências Regionais de Ensino;
          <br />
          <br />
          – elaborar, analisar e avaliar planos, programas e projetos pedagógicos;
          <br />
          <br />
          
          – coordenar, acompanhar, avaliar e redirecionar a execução de propostas educacionais;
          <br />
          <br />
          – elaborar normas, instruções e orientações para aplicação da legislação relativa a programas e currículos escolares e à administração de pessoal, material, patrimônio e serviços;
          <br />
          <br />
          – elaborar, executar e acompanhar projetos de capacitação de pessoal e treinamentos operacionais nos vários âmbitos de atuação;
          <br />
          <br />
          – proporcionar assistência técnica na elaboração de instrumentos de avaliação do processo educacional;
          <br />
          <br />
          – elaborar programas, provas e material instrucional para o Ensino Fundamental e Médio;
          <br />
          <br />
          – realizar pesquisas e estudos que subsidiem a proposta de políticas, diretrizes e normas educacionais;
          <br />
          <br />
          – participar da elaboração de planejamentos ou propostas anuais de atividades do setor ou órgão em que atua;
          <br />
          <br />
          – organizar e produzir dados e informações educacionais;
          <br />
          <br />
          – elaborar a proposta de reforma, ampliação ou construção da rede física de atendimento e acompanhar a sua execução;
          <br />
          <br />
          – realizar trabalhos de escrituração contábil, cálculo de custos, perícia, previsão, levantamento, análise e revisão de balanços e demonstrativos, execução orçamentária e movimentação de contas financeiras e patrimoniais;
          <br />
          <br />
          – emitir pareceres e relatórios sobre assuntos financeiros e contábeis.
          
          </p>
          <h3 className='pt-7 font-bold'>1. d) Analista Educacional – ANE Nível I Grau A – Inspeção Escolar:</h3>
          <p className='pt-7'>
          – exercer a inspeção escolar, que compreende:
          <br />
          <br />
          1- orientação, assistência e controle do processo administrativo das escolas e, na forma do regulamento, do seu processo pedagógico;
          <br />
          <br />
          2- orientação da organização dos processos de criação, autorização de funcionamento, reconhecimento e registro de escolas, no âmbito de sua área de atuação;
          <br />
          <br />
          3- garantia de regularidade do funcionamento das escolas, em todos os aspectos; 4- responsabilidade pelo fluxo correto e regular de informações entre as escolas, os órgãos regionais e o órgão central da SEE;
          <br />
          <br />
          – exercer outras atividades compatíveis com a natureza do cargo, previstas na regulamentação aplicável e de acordo com a política pública educacional.
          </p>
          <h2 className='pt-7 font-bold'>ATRIBUIÇÕES DO CARGO (PUBLICADO EDITAL 2017 SEEMG)</h2>
          <h2 className='pt-7 font-bold'>ESPECIALISTA EM EDUCAÇÃO BÁSICA – EEB ATRIBUIÇÕES DO CARGO (conforme Anexo II da Lei 15.293, de 05 de agosto de 2004)</h2>
          <p className='pt-7'>
          − Exercer em unidade escolar a supervisão do processo didático como elemento articulador no planejamento, no acompanhamento, no controle e na avaliação das atividades pedagógicas, conforme o plano de desenvolvimento pedagógico e institucional da unidade escolar;
          <br />
          <br />
          − atuar como elemento articulador das relações interpessoais internas e externas da escola que envolvam os profissionais, os alunos e seus pais e a comunidade;
          <br />
          <br />
          − planejar, executar e coordenar cursos, atividades e programas internos de capacitação profissional e treinamento em serviço;
          <br />
          <br />
          − participar da elaboração do calendário escolar;
          <br />
          <br />
          − participar das atividades do Conselho de Classe ou coordená-las;
          <br />
          <br />
          − exercer, em trabalho individual ou em grupo, a orientação, o aconselhamento e o encaminhamento de alunos em sua formação geral e na sondagem de suas aptidões específicas;
          <br />
          <br />
          − atuar como elemento articulador das relações internas na escola e externas com as famílias dos alunos, comunidade e entidades de apoio psicopedagógicos e como ordenador das influências que incidam sobre a formação do educando;
          <br />
          <br />
          − exercer atividades de apoio à docência;
          <br />
          <br />
          − exercer outras atividades integrantes do plano de desenvolvimento pedagógico e institucional da escola, previstas no regulamento desta lei e no regimento escolar.
          </p>
          <h2 className='pt-7 font-bold'>CARREIRA: PROFESSOR DE EDUCAÇÃO BÁSICA – PEB CARGO ATRIBUIÇÕES DO CARGO (conforme Anexo II da Lei 15.293, de 05 de agosto de 2004)</h2>
          <p className='pt-7'>
          – Exercer a docência na educação básica, em unidade escolar, responsabilizando-se pela regência de turmas, pela orientação de aprendizagem na educação de jovens e adultos, pela substituição eventual de docente, pelo ensino do uso da biblioteca, pela docência em laboratório de ensino, em sala de recursos didáticos e em oficina pedagógica, por atividades artísticas de conjunto e acompanhamento musical nos conservatórios estaduais de música e pela recuperação de aluno com deficiência de aprendizagem;
          <br />
          <br />
          – participar do processo que envolve planejamento, elaboração, execução, controle e avaliação do projeto político-pedagógico e do plano de desenvolvimento pedagógico e institucional da escola;
          <br />
          <br />
          – participar da elaboração do calendário escolar;
          <br />
          <br />
          – exercer atividade de coordenação pedagógica de área de conhecimento específico, nos termos do regulamento;
          <br />
          <br />
          – atuar na elaboração e na implementação de projetos educativos ou, como docente, em projeto de formação continuada de educadores, na forma do regulamento;
          <br />
          <br />
          – participar da elaboração e da implementação de projetos e atividades de articulação e integração da escola com as famílias dos educandos e com a comunidade escolar;
          <br />
          <br />
          – participar de cursos, atividades e programas de capacitação profissional, quando convocado ou convidado; 
          <br />
          <br />
          – acompanhar e avaliar sistematicamente seus alunos durante o processo de ensino-aprendizagem;
          <br />
          <br />
          – realizar avaliações periódicas dos cursos ministrados e das atividades realizadas; – promover e participar de atividades complementares ao processo da sua formação profissional;
          <br />
          <br />
          – exercer outras atribuições integrantes do plano de desenvolvimento pedagógico e institucional da escola, previstas no regulamento desta lei e no regimento escolar..
          </p>
        </div>

        <div className="w-screen py-7 px-9 bg-slate-900 text-slate-50 flex justify-center items-center">
          

          
          <div className='flex flex-col justify-center items-start pt-5'>
          <p>WhatsApp - (33)99805-4430</p>
          <p className='pt-5'>
            E-mails de Contato
          </p>
          <div className='pt-2'>
          <p className=''>
          marceloviana.cienciascontabeis@gmail.com
          <br />
          marcelobada@hotmail.com</p>
          
          </div>
          </div>
          
          <div className='pl-14 hover:scale-110 ease-in duration-200 flex justify-center items-center'>
            <a href="https://www.instagram.com/mvsantos21/" target="_blank" className=''>
              <Image className=' fill-slate-50' src={InstagramLogo} width={35} height={35}></Image>
            </a>
          </div>
        </div>
        
      </div>
    </>
  )
}
