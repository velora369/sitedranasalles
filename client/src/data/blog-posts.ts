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
    excerpt: "O diagnóstico de câncer gera muitas dúvidas e incertezas. Conhecer a doença, suas implicações e opções de tratamento oferece as ferramentas necessárias para que o paciente assuma um papel ativo em sua jornada.",
    content: `# O Diagnóstico e o Início da Jornada

Receber o diagnóstico de câncer é um momento que gera muitas dúvidas e incertezas. Além das preocupações com o tratamento e seus efeitos colaterais, o paciente também lida com uma carga emocional significativa que afeta a família, o trabalho e as relações sociais. É fundamental entender que essa é uma fase de adaptação e que o bem-estar pode ser mantido.

## A Importância da Informação

A informação é a maior aliada do paciente oncológico. Conhecer a doença, suas implicações e as opções de tratamento disponíveis oferece as ferramentas necessárias para que o paciente assuma um papel ativo e tenha maior controle sobre sua jornada. Buscar informações confiáveis e de qualidade é crucial para tomar decisões informadas e enfrentar o câncer da melhor maneira possível.

## Lidando com as Mudanças no Estilo de Vida

O tratamento oncológico pode exigir algumas mudanças no estilo de vida. No entanto, é possível se adaptar a essas mudanças e manter o bem estar. Esteja aberto a novas rotinas e busque apoio para lidar com as dificuldades que surgem. O Instituto Oncoguia oferece diversas dicas e orientações para ajudar os pacientes a enfrentar esses desafios.

## Dicas e Orientações Gerais

Neste espaço, você encontrará uma série de dicas e orientações que podem auxiliar a lidar com as dificuldades decorrentes do diagnóstico. É importante lembrar que você não está sozinho nessa jornada e que há recursos e apoio disponíveis para te guiar e fortalecer.

## Tipos de Tratamento

Existem diversos tipos de tratamento disponíveis para pacientes oncológicos, cada um com suas particularidades e indicações específicas. É fundamental conhecer as opções disponíveis para tomar decisões informadas sobre o seu cuidado.

### Quimioterapia

A quimioterapia é um tratamento sistêmico que utiliza medicamentos para destruir células cancerosas. Pode ser administrada por via oral ou intravenosa, dependendo do tipo de medicamento e da condição do paciente.

### Radioterapia

A radioterapia utiliza radiação de alta energia para destruir células cancerosas. É um tratamento localizado que pode ser usado isoladamente ou em combinação com outros tratamentos.

### Cirurgia Oncológica

A cirurgia pode ser curativa ou paliativa, dependendo do estágio da doença. É importante discutir com seu médico todas as opções cirúrgicas disponíveis.

## Cuidados Durante o Tratamento

Durante o tratamento oncológico, é essencial manter cuidados especiais para preservar a qualidade de vida e minimizar os efeitos colaterais.

### Alimentação

Uma alimentação adequada é fundamental durante o tratamento. Procure orientação nutricional especializada para manter uma dieta equilibrada e adequada às suas necessidades.

### Atividade Física

Quando possível e com orientação médica, manter atividades físicas leves pode contribuir para o bem-estar e recuperação.

### Apoio Emocional

O apoio psicológico é uma parte importante do tratamento. Não hesite em buscar ajuda profissional quando necessário.

## Conclusão

Lembre-se de que cada jornada oncológica é única, e o mais importante é manter um diálogo aberto com sua equipe médica. Não hesite em fazer perguntas e buscar esclarecimentos sempre que necessário. Sua participação ativa no tratamento é fundamental para os melhores resultados possíveis.`,
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

Se você está enfrentando dificuldades para acessar seus direitos, procure ajuda junto aos órgãos competentes. Sua saúde e bem-estar são prioridades que devem ser garantidas por lei.`,
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

// Função para obter posts para preview (limitado)
export function getPreviewPosts(limit: number = 3): StaticBlogPost[] {
  return getPublishedPosts().slice(0, limit);
}