// Dados estáticos dos posts do blog
export interface StaticBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  readingTime: number;
  publishedAt: Date;
  imageUrl: string | null;
  isPublished: boolean;
}

export const blogPosts: StaticBlogPost[] = [
  {
    id: 1,
    title: "Informações Importantes para Todo Paciente Oncológico",
    slug: "informacoes-importantes-paciente-oncologico",
    excerpt: "Receber um diagnóstico de câncer traz muitas dúvidas. Este guia apresenta, de forma clara e baseada em evidências, os tratamentos validados, o papel dos cuidados paliativos integrados e um glossário com termos que você vai ouvir nas consultas.",
    content: `# Guia essencial para pacientes oncológicos

## Introdução

Receber um diagnóstico de câncer traz muitas dúvidas. Este guia apresenta, de forma clara e baseada em evidências, os tratamentos validados, o papel dos **cuidados paliativos** integrados e um glossário com termos que você vai ouvir nas consultas.
Importante: toda decisão terapêutica é individual e deve ser conduzida pela sua equipe.

## Primeiros passos após o diagnóstico

**Entenda o estadiamento**: mostra a extensão da doença e direciona o plano terapêutico.

**Defina objetivos do cuidado**: intenção curativa, controle da doença e/ou alívio de sintomas.

**Acompanhe de perto**: consultas regulares, exames e registro de sintomas/efeitos colaterais.

**Apoio emocional e social**: psicologia, família, amigos e grupos de apoio melhoram qualidade de vida e adesão ao tratamento.

## Tratamentos com eficácia comprovada

A indicação depende do tipo de câncer, estágio e condições clínicas. Modalidades validadas incluem:

**Cirurgia**: tratamento local para remoção do tumor quando viável.

**Radioterapia**: radiação para controle local/locorregional ou alívio de sintomas.

**Quimioterapia**: medicamentos sistêmicos que destroem ou inibem a proliferação tumoral.

**Hormonioterapia**: para tumores hormônio-sensíveis (ex.: alguns cânceres de mama e próstata).

**Terapias-alvo**: atuam em alvos moleculares específicos; exigem **biomarcadores**.

**Imunoterapia**: estimula o sistema imune a reconhecer e combater o tumor, conforme indicações.

**Transplante de células-tronco hematopoéticas (medula óssea)**: em neoplasias hematológicas selecionadas.

**Neoadjuvante** = antes do tratamento local para reduzir o tumor.
**Adjuvante** = após o tratamento local para diminuir risco de **recidiva**.

## Cuidados paliativos: o que são (e o que não são)

**Cuidados paliativos** são um conjunto de intervenções para controle de sintomas, suporte emocional e tomada de decisões, podendo e devendo ser integrados precocemente em casos de doença avançada — sem substituir o tratamento oncológico específico.
Exemplo: uma pessoa com câncer de mama **metastático** pode receber quimioterapia, hormonioterapia ou terapias-alvo junto de cuidados paliativos para manejar dor, fadiga, ansiedade e outros sintomas. Evidências mostram melhora consistente de qualidade de vida e, em alguns cenários, aumento de sobrevida com a integração precoce.

## Vida durante o tratamento

**Sintomas e efeitos colaterais**: relate cedo; há protocolos eficazes para náusea, dor, mucosite, fadiga, entre outros.

**Atividade física**: quando liberada pela equipe, exercícios aeróbicos e de resistência ajudam na capacidade funcional e no bem-estar.

**Nutrição**: personalize com nutricionista; não existe "dieta que cure câncer".

**Sexualidade e fertilidade**: converse sobre preservação de fertilidade antes de terapias que possam afetá-la.

## Glossário rápido de Oncologia

**Remissão**: desaparecimento de todos os sinais de câncer (**remissão completa**) ou redução importante (parcial) após o tratamento. Remissão não é sinônimo obrigatório de cura definitiva.

**Recidiva / Recorrência**: retorno do câncer depois de um período sem sinais, podendo ser local, regional (linfonodos próximos) ou à distância.

**Metástase**: disseminação de células do tumor primário para outros órgãos (como ossos, pulmões ou fígado). O tumor metastático mantém as características do câncer de origem.

**Estadiamento**: sistema que classifica a extensão da doença (ex.: TNM).

**Terapia sistêmica**: tratamento que atua no corpo todo (quimio, hormonioterapia, terapias-alvo, imunoterapia).

**Adjuvante / Neoadjuvante**: ver definições na seção de Tratamentos.

## Perguntas úteis para levar à consulta

• Qual é o meu tipo e estágio do câncer?

• Qual o objetivo do tratamento proposto?

• Existem alternativas com benefícios e riscos diferentes?

• O meu caso exige **biomarcadores**/ testes moleculares?

• Como integrar **cuidados paliativos** desde já para controle de sintomas?

• O que devo observar em casa e quando devo procurar o hospital?

## Referências bibliográficas essenciais

National Cancer Institute. About Cancer Treatment; Types of Cancer Treatment; Dictionary of Cancer Terms. Bethesda, MD: NCI.

Temel JS, et al. Early Palliative Care for Patients with Metastatic Non–Small-Cell Lung Cancer. New England Journal of Medicine. 2010;363(8):733–742.

Ferrell BR, Temel JS, Temin S, et al. Integration of Palliative Care Into Standard Oncology Care: American Society of Clinical Oncology Clinical Practice Guideline Update. Journal of Clinical Oncology. 2017.

Ligibel JA, et al. Exercise, Diet, and Weight Management During Cancer Treatment: American Society of Clinical Oncology Guideline. Journal of Clinical Oncology. 2022.`,
    author: "Dra. Ana Carolina Salles",
    readingTime: 8,
    publishedAt: new Date("2025-07-22T10:00:00Z"),
    imageUrl: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/medica-centro-de-recuperacao-covid-segurando-as-maos-de-um-paciente-idoso.webp",
    isPublished: true,
  },
  {
    id: 2,
    title: "Direitos dos Pacientes Oncológicos: Conheça e Exija!",
    slug: "direitos-pacientes-oncologicos",
    excerpt: "Para pacientes oncológicos, conhecer seus direitos é tão fundamental quanto o tratamento médico. A informação confiável é uma ferramenta poderosa para garantir acesso a todos os benefícios que a lei oferece.",
    content: `# Conhecer Seus Direitos é Fundamental

Para pacientes oncológicos, conhecer seus direitos é tão fundamental quanto o tratamento médico em si. A informação confiável é uma ferramenta poderosa para garantir que você tenha acesso a todos os benefícios e proteções que a lei oferece.

## Direitos Básicos no SUS

O Sistema Único de Saúde (SUS) garante uma série de direitos importantes para pacientes oncológicos:

### Atendimento Prioritário

Pacientes com câncer têm direito ao atendimento prioritário em todas as unidades de saúde do SUS. Isso inclui consultas, exames e tratamentos.

### Prazo para Início do Tratamento

A Lei 12.732/2012 estabelece que o paciente tem direito de iniciar o tratamento oncológico no SUS em até 60 dias após o diagnóstico confirmado em laudo patológico.

### Direito à Segunda Opinião

O paciente tem o direito de buscar uma segunda opinião médica, seja dentro do próprio SUS ou na rede privada, para confirmar o diagnóstico e as opções de tratamento.

## Direitos Trabalhistas

O diagnóstico de câncer também gera direitos importantes na esfera trabalhista:

### Auxílio-Doença

O trabalhador com câncer pode ter direito ao auxílio-doença do INSS, desde que comprove a incapacidade temporária para o trabalho.

### Estabilidade no Emprego

Em muitos casos, o trabalhador com câncer tem direito à estabilidade provisória no emprego por 12 meses após o retorno ao trabalho.

### FGTS

O portador de neoplasia maligna pode sacar o FGTS, mesmo estando empregado, apresentando a documentação médica adequada.

## Direitos Relacionados ao Tratamento

### Medicamentos de Alto Custo

O SUS deve fornecer gratuitamente todos os medicamentos necessários para o tratamento oncológico, incluindo medicamentos de alto custo.

### Transporte

Muitos municípios oferecem transporte gratuito para pacientes oncológicos que precisam se deslocar para tratamento fora de sua cidade.

### Acompanhante

O paciente tem direito a acompanhante durante internações, especialmente em casos de tratamento oncológico.

## Direitos Previdenciários

### Aposentadoria por Invalidez

Em casos de incapacidade permanente, o paciente pode ter direito à aposentadoria por invalidez.

### Isenção de Imposto de Renda

Aposentados e pensionistas portadores de neoplasia maligna têm direito à isenção do Imposto de Renda sobre seus proventos.

## Como Garantir Seus Direitos

### Documentação Necessária

Mantenha sempre em mãos:
- Laudo médico com CID da doença
- Exames que comprovem o diagnóstico
- Relatórios médicos atualizados
- Documentos pessoais

### Onde Buscar Ajuda

- Defensoria Pública
- Ministério Público
- Associações de pacientes
- Assistência social dos hospitais
- Advogados especializados

## Legislação de Apoio

Conheça as principais leis que protegem os direitos dos pacientes oncológicos:

- Lei 12.732/2012 (prazo para início do tratamento)
- Lei 8.080/1990 (Lei do SUS)
- Lei 8.213/1991 (benefícios previdenciários)
- Estatuto da Pessoa com Deficiência

## Conclusão

Conhecer e exercer seus direitos é parte fundamental do tratamento oncológico. Não hesite em buscar informações e exigir que seus direitos sejam respeitados. Lembre-se de que você tem o direito a um tratamento digno, completo e humanizado.

Se você está enfrentando dificuldades para acessar seus direitos, procure ajuda junto aos órgãos competentes. Sua saúde e bem-estar são prioridades que devem ser garantidas por lei.

## Referências bibliográficas

### Direitos e princípios gerais

1. BRASIL. Lei nº 14.238, de 19 de novembro de 2021. Institui o Estatuto da Pessoa com Câncer.

2. BRASIL. Lei nº 12.732, de 22 de novembro de 2012. Garante o início do primeiro tratamento no SUS em até 60 dias após o diagnóstico de neoplasia maligna.

3. BRASIL. Lei nº 13.896, de 30 de outubro de 2019. Estabelece prazo de até 30 dias para a realização de exames diagnósticos de neoplasia maligna no SUS.

### Planos de saúde e medicamentos

4. BRASIL. Lei nº 9.656, de 3 de junho de 1998. Dispõe sobre os planos e seguros privados de assistência à saúde.

5. BRASIL. Lei nº 12.880, de 13 de novembro de 2013. Torna obrigatória a cobertura de antineoplásicos orais de uso domiciliar e medicamentos de suporte pelos planos de saúde.

6. BRASIL. Lei nº 14.454, de 21 de setembro de 2022. Altera a Lei nº 9.656/1998 e estabelece que o rol de procedimentos da ANS tem caráter exemplificativo, coibindo negativas abusivas.

### Benefícios previdenciários e assistenciais

7. BRASIL. Lei nº 8.213, de 24 de julho de 1991. Planos de Benefícios da Previdência Social — auxílio por incapacidade temporária e aposentadoria por incapacidade permanente.

8. BRASIL. Lei nº 8.742, de 7 de dezembro de 1993. Lei Orgânica da Assistência Social (BPC/LOAS).

### FGTS, PIS/PASEP e tributação

9. BRASIL. Lei nº 8.036, de 11 de maio de 1990. Dispõe sobre o FGTS; autoriza saque em casos de neoplasia maligna do trabalhador ou dependente.

10. BRASIL. Decreto nº 99.684, de 8 de novembro de 1990. Regulamento do FGTS (detalha as hipóteses de saque por doença grave).

11. BRASIL. Lei nº 7.713, de 22 de dezembro de 1988. Isenção de Imposto de Renda sobre proventos de aposentadoria/pensão para portadores de neoplasia maligna (art. 6º, XIV).

12. BRASIL. Lei nº 8.989, de 24 de fevereiro de 1995. Isenção de IPI na aquisição de automóveis por pessoas com deficiência — aplicável quando o câncer gera deficiência comprovada por laudo (regras da RFB).

13. Leis estaduais e municipais de IPVA e transporte público. A gratuidade e a isenção de IPVA variam por unidade federativa e município; verificar normas locais vigentes.

### Tratamento Fora de Domicílio, atenção domiciliar e educação

14. MINISTÉRIO DA SAÚDE. Portaria SAS/MS nº 55, de 24 de fevereiro de 1999. Institui o Tratamento Fora de Domicílio (TFD) no âmbito do SUS.

15. MINISTÉRIO DA SAÚDE. Portaria GM/MS nº 825, de 25 de abril de 2016. Redefine a Atenção Domiciliar no SUS (Programa Melhor em Casa).

16. BRASIL. Lei nº 13.716, de 24 de setembro de 2018. Altera a LDB para assegurar atendimento educacional hospitalar e domiciliar ao estudante em tratamento de saúde.

### Direitos específicos da mulher com câncer de mama

17. BRASIL. Lei nº 9.797, de 6 de maio de 1999. Garante cirurgia plástica reconstrutiva da mama após mastectomia no SUS.

18. BRASIL. Lei nº 12.802, de 24 de abril de 2013. Assegura reconstrução mamária imediata quando houver condições técnicas e clínicas.`,
    author: "Dra. Ana Carolina Salles",
    readingTime: 6,
    publishedAt: new Date("2025-07-20T14:30:00Z"),
    imageUrl: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/mao-com-pena-preencher-um-documento.webp",
    isPublished: true,
  },
  {
    id: 3,
    title: "Prevenção e Detecção Precoce do Câncer",
    slug: "prevencao-deteccao-precoce",
    excerpt: "A prevenção e a detecção precoce são as melhores estratégias no combate ao câncer. Conhecer os fatores de risco e realizar exames regulares pode salvar vidas.",
    content: `# A Importância da Prevenção

A prevenção e a detecção precoce são as melhores estratégias que temos no combate ao câncer. Quanto mais cedo a doença for identificada, maiores são as chances de cura e melhor é a qualidade de vida durante o tratamento.

## Fatores de Risco Modificáveis

Muitos fatores de risco para o câncer podem ser controlados através de mudanças no estilo de vida:

### Tabagismo

O tabaco é responsável por cerca de 30% de todas as mortes por câncer. Parar de fumar é uma das medidas mais importantes que você pode tomar para prevenir a doença.

### Alimentação

Uma dieta rica em frutas, verduras e cereais integrais, com baixo consumo de carnes processadas e gorduras saturadas, reduz significativamente o risco de diversos tipos de câncer.

### Atividade Física

A prática regular de exercícios físicos diminui o risco de câncer de mama, cólon, endométrio e outros tipos de tumor.

### Controle do Peso

Manter um peso adequado é fundamental, pois a obesidade está relacionada ao desenvolvimento de vários tipos de câncer.

### Consumo de Álcool

O consumo excessivo de álcool aumenta o risco de câncer de fígado, mama, boca, garganta e esôfago.

## Detecção Precoce

A detecção precoce envolve tanto o rastreamento em pessoas sem sintomas quanto o diagnóstico precoce em pessoas com sinais e sintomas da doença.

### Exames de Rastreamento Recomendados

#### Câncer de Mama
- Mamografia anual a partir dos 50 anos
- Mulheres com histórico familiar podem precisar iniciar antes

#### Câncer de Colo do Útero
- Papanicolau (exame preventivo) a partir dos 25 anos
- Frequência definida pelo médico, geralmente a cada 1-3 anos

#### Câncer de Intestino
- Colonoscopia a partir dos 50 anos
- Pesquisa de sangue oculto nas fezes pode ser uma alternativa

#### Câncer de Próstata
- PSA e toque retal a partir dos 50 anos
- Homens com fatores de risco podem precisar iniciar aos 45 anos

## Sinais de Alerta

Esteja atento aos seguintes sinais que podem indicar a presença de câncer:

### Sinais Gerais
- Perda de peso inexplicada
- Febre persistente
- Fadiga extrema
- Mudanças na pele

### Sinais Específicos por Região
- **Mama**: Nódulos, mudanças na pele ou no mamilo
- **Intestino**: Mudanças nos hábitos intestinais, sangue nas fezes
- **Pulmão**: Tosse persistente, sangue no escarro
- **Pele**: Mudanças em pintas ou manchas

## Prevenção Secundária

Além dos exames de rastreamento, algumas medidas podem ajudar na prevenção:

### Vacinação
- Vacina contra HPV para prevenção do câncer de colo do útero
- Vacina contra Hepatite B para prevenção do câncer de fígado

### Proteção Solar
- Uso de protetor solar
- Evitar exposição solar nos horários de pico
- Usar roupas e acessórios de proteção

## O Papel do Médico de Família

Seu médico de família ou clínico geral é fundamental na estratégia de prevenção:

- Pode orientar sobre exames adequados para sua idade e fatores de risco
- Ajuda a interpretar resultados e definir condutas
- Coordena o cuidado com especialistas quando necessário

## Genética e Câncer

Em alguns casos, fatores genéticos podem aumentar o risco de câncer:

### Quando Considerar Aconselhamento Genético
- Múltiplos casos de câncer na família
- Câncer em idade muito jovem
- Tipos raros de câncer
- Câncer em ambas as mamas ou ovários

## Conclusão

A prevenção do câncer é responsabilidade de todos nós. Adotar um estilo de vida saudável, realizar exames de rastreamento regularmente e estar atento aos sinais do corpo são medidas fundamentais.

Lembre-se: não existe uma fórmula mágica para prevenir 100% dos cânceres, mas podemos reduzir significativamente nossos riscos através de escolhas conscientes e cuidados preventivos regulares.

Converse sempre com seu médico sobre o melhor programa de prevenção para seu perfil individual. Cada pessoa tem necessidades específicas baseadas em sua idade, histórico familiar e fatores de risco pessoais.`,
    author: "Dra. Ana Carolina Salles",
    readingTime: 7,
    publishedAt: new Date("2025-07-18T09:15:00Z"),
    imageUrl: null,
    isPublished: false,
  }
];

// Função para obter todos os posts publicados
export function getPublishedPosts(): StaticBlogPost[] {
  return blogPosts.filter(post => post.isPublished);
}

// Função para obter um post por slug
export function getPostBySlug(slug: string): StaticBlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.isPublished);
}

// Função para obter posts para preview (limitado) - inclui posts publicados e não publicados
export function getPreviewPosts(limit: number = 3): StaticBlogPost[] {
  return blogPosts.slice(0, limit);
}