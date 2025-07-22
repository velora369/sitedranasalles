import { users, blogPosts, type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private currentUserId: number;
  private currentBlogId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.currentUserId = 1;
    this.currentBlogId = 1;
    
    // Initialize with the two blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const post1: BlogPost = {
      id: this.currentBlogId++,
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

Existem diversas abordagens para o tratamento do câncer, e a escolha da melhor opção depende de vários fatores, incluindo o tipo e estágio do câncer, a saúde geral do paciente e suas preferências. É fundamental discutir todas as opções com a equipe médica para tomar a decisão mais adequada.

### Cirurgia

A cirurgia oncológica é um dos métodos mais antigos e eficazes, especialmente quando o câncer é diagnosticado em estágios iniciais. Pode ser utilizada para remover o tumor, aliviar sintomas ou até mesmo para diagnóstico (biópsia cirúrgica).

### Quimioterapia

A quimioterapia utiliza medicamentos para destruir as células cancerígenas. Por ser um tratamento sistêmico, afeta tanto as células doentes quanto as saudáveis. Pode ser administrada por via venosa ou oral e ter diferentes objetivos: curativa, adjuvante (após cirurgia para eliminar células remanescentes), neoadjuvante (para reduzir o tumor antes da cirurgia) ou paliativa (para melhorar a qualidade de vida).

### Radioterapia

A radioterapia emprega radiações ionizantes para destruir ou inibir o crescimento de células tumorais. Embora afete células normais, estas geralmente conseguem se reparar. Pode ser o tratamento principal, adjuvante, neoadjuvante ou paliativo, visando aliviar sintomas como dor e sangramento.

### Hormonioterapia

Indicada para cânceres sensíveis a hormônios (como mama e próstata), a hormonioterapia impede a ação hormonal que estimula o crescimento das células malignas. Pode ser usada isoladamente ou em combinação com outras terapias.

### Terapia-alvo

Este tratamento sistêmico utiliza medicamentos que atacam especificamente as células cancerígenas, minimizando os danos às células saudáveis. As terapias-alvo alteram o crescimento, divisão e reparo das células cancerígenas, podendo ser usadas sozinhas ou em conjunto com outras modalidades.

### Imunoterapia

A imunoterapia potencializa o sistema imunológico do paciente para combater o câncer. Ao bloquear certos fatores, ela estimula as células de defesa do organismo a reconhecerem e atacarem o tumor.

### Medicina Personalizada

Um conceito inovador que trata o paciente de forma individualizada, considerando dados clínicos, genéticos e ambientais. O objetivo é identificar estratégias de prevenção, rastreamento e tratamento mais eficazes e com menos efeitos colaterais, baseadas na biologia única do tumor de cada paciente.

### Transplante de Medula Óssea (TMO)

O TMO é um procedimento que envolve a coleta de medula óssea (rica em células-tronco) para tratar certos tipos de câncer, como leucemias e linfomas. Após quimioterapia de altas doses, o paciente recebe a medula óssea por transfusão, que pode ser do próprio paciente ou de um doador.

## Qualidade de Vida Durante e Após o Tratamento

Manter a qualidade de vida é um aspecto crucial durante e após o tratamento do câncer. É possível viver bem e com bem-estar, mesmo diante dos desafios. O Instituto Oncoguia oferece diversas dicas e orientações para auxiliar nesse processo.

### Nutrição

A nutrição adequada é fundamental para fortalecer o organismo e ajudar a lidar com os efeitos colaterais dos tratamentos. Uma alimentação balanceada pode fazer uma grande diferença na recuperação e no bem-estar geral.

### Atividades Físicas

A prática de atividades físicas, adaptadas às condições de cada paciente, pode reduzir a fadiga, manter a força muscular e melhorar a energia, contribuindo para o bem-estar físico e mental. Sempre consulte seu médico antes de iniciar qualquer programa de exercícios.

### Saúde Mental

O impacto emocional do câncer é significativo. Cuidar da saúde mental é tão importante quanto cuidar da saúde física. Buscar apoio psicológico, participar de grupos de apoio e manter hobbies e atividades prazerosas podem auxiliar a lidar com a ansiedade, o estresse e a depressão.

### Estética e Autoestima

As mudanças físicas decorrentes do tratamento podem afetar a autoestima. É importante buscar recursos e dicas para lidar com essas alterações, como o uso de lenços, perucas ou maquiagem, e focar no autocuidado para manter a confiança e o bem-estar.

### Sexualidade e Intimidade

Alterações na libido, autoestima e outras mudanças podem afetar a vida sexual de pacientes com câncer. É fundamental conversar abertamente com o parceiro(a) e com a equipe médica sobre essas questões para encontrar soluções e manter a intimidade.

### Fertilidade

Para muitos pacientes, especialmente os mais jovens, a fertilidade pode ser uma preocupação. É importante discutir com o médico as opções de preservação da fertilidade antes de iniciar o tratamento, se for o caso.

## Vivendo com Câncer: Um Novo Normal

O diagnóstico e o tratamento do câncer alteram a vida em diversos aspectos. No entanto, é possível construir um "novo normal" e viver bem, mesmo nas fases avançadas da doença. A adaptação e a busca por qualidade de vida são fundamentais.

### Câncer como Doença Crônica

Em alguns casos, o câncer pode se tornar uma doença crônica, que exige acompanhamento contínuo. Entender essa perspectiva ajuda a gerenciar as expectativas e a planejar a vida a longo prazo.

### Câncer Avançado e Metastático

Mesmo em estágios avançados ou metastáticos, o câncer pode ser tratado. É importante compreender o significado desses diagnósticos e as opções de tratamento disponíveis para cada situação.

### Pesquisa Clínica como Opção

Novos medicamentos e procedimentos estão constantemente sendo desenvolvidos e testados em pesquisas clínicas. Participar de um estudo clínico pode ser uma opção de tratamento para alguns pacientes, oferecendo acesso a terapias inovadoras.

### Trabalho e Câncer

O câncer impacta diversos aspectos da vida, incluindo a rotina de trabalho. É comum que pacientes tenham preocupações sobre como conciliar o tratamento com suas atividades profissionais. Existem direitos e apoios para auxiliar nessa fase.

### Equipe Multiprofissional

O paciente oncológico pode contar com o suporte de uma equipe multiprofissional, composta por médicos, enfermeiros, psicólogos, nutricionistas, fisioterapeutas, entre outros. Essa equipe oferece um cuidado integral e personalizado, abordando todas as necessidades do paciente.

### Cuidado Paliativo

Quando o câncer não pode mais ser curado ou controlado, o foco do cuidado se volta para a qualidade de vida. Os cuidados paliativos visam aliviar o sofrimento, controlar os sintomas e proporcionar conforto ao paciente e sua família, garantindo dignidade em todas as fases da doença.

## Referências Bibliográficas

* Instituto Oncoguia. Câncer, e agora?. Disponível em: https://www.oncoguia.org.br/conteudo/orientacoes-gerais/2651/173/. Acesso em: 22 jul. 2025.
* Instituto Oncoguia. Tratamentos do câncer. Disponível em: https://www.oncoguia.org.br/conteudo/tratamentos/77/50/. Acesso em: 22 jul. 2025.
* Instituto Oncoguia. Qualidade de vida. Disponível em: https://www.oncoguia.org.br/qualidade-de-vida/. Acesso em: 22 jul. 2025.
* Instituto Oncoguia. Vivendo com câncer. Disponível em: https://www.oncoguia.org.br/vivendo-com-cancer/. Acesso em: 22 jul. 2025.`,
      author: "Dra. Ana Carolina Salles",
      readingTime: 8,
      publishedAt: new Date("2025-07-22T10:00:00Z"),
      imageUrl: null,
      isPublished: true,
    };

    const post2: BlogPost = {
      id: this.currentBlogId++,
      title: "Direitos dos Pacientes Oncológicos: Conheça e Exija!",
      slug: "direitos-pacientes-oncologicos",
      excerpt: "Para pacientes oncológicos, conhecer seus direitos é tão fundamental quanto o tratamento médico. A informação confiável é uma ferramenta poderosa para garantir acesso a todos os benefícios que a lei oferece.",
      content: `# A Informação como Aliada na Luta pelos Direitos

Para pacientes oncológicos, conhecer seus direitos é tão fundamental quanto o tratamento médico. A informação confiável e de qualidade é uma ferramenta poderosa para garantir acesso a todos os benefícios e assistências que a lei oferece. O Instituto Oncoguia disponibiliza um Manual de Direitos dos Pacientes com Câncer, que é um recurso valioso para entender e reivindicar esses direitos.

## Principais Direitos e Benefícios

### Lei dos 60 Dias

É crucial que o paciente oncológico esteja ciente da Lei dos 60 Dias, que garante o início do tratamento no SUS em até 60 dias após o diagnóstico. Fique atento aos prazos e faça valer esse direito para evitar atrasos que podem comprometer a eficácia do tratamento.

### Medicamentos e Gratuidade

Entenda seus direitos em relação aos medicamentos. Existem medicamentos incorporados ao SUS e protocolos clínicos que garantem a gratuidade. Além disso, a lista de medicamentos orais contra o câncer de cobertura obrigatória é atualizada periodicamente, e é importante estar informado sobre essas atualizações.

### Plano de Saúde

Saiba como lidar com negativas abusivas de cobertura, reajustes indevidos e outras questões relacionadas ao seu plano de saúde. Os pacientes oncológicos possuem direitos garantidos que devem ser respeitados pelas operadoras de planos de saúde.

### Benefícios Sociais e Trabalhistas

Pacientes oncológicos podem ter direito a benefícios como Auxílio-Doença, relacionado à incapacidade temporária para o trabalho, e o Benefício de Prestação Continuada (LOAS), que favorece pessoas que não contribuíram para o INSS. Além disso, há direitos relacionados ao saque do FGTS e à isenção de tarifas no transporte urbano.

### Tratamento Fora de Domicílio (TFD)

O TFD busca garantir o acesso à atenção integral do paciente, mesmo que o tratamento seja realizado em outro município. Informe-se sobre esse benefício para assegurar que todos os seus direitos sejam garantidos, independentemente da sua localização.

## Organize-se e Busque Apoio

Organizar a documentação necessária e buscar apoio em instituições como o Instituto Oncoguia são passos importantes para garantir que seus direitos sejam plenamente exercidos. Não hesite em procurar informações e orientação para navegar por esse processo de forma mais tranquila e segura.

## Detalhamento dos Direitos e Benefícios

### Aposentadoria por Invalidez

Pacientes com câncer que se encontram incapacitados para o trabalho de forma permanente podem ter direito à aposentadoria por invalidez. É fundamental reunir a documentação médica que comprove a incapacidade e seguir os trâmites junto ao INSS.

### Auxílio-Doença

Em casos de incapacidade temporária para o trabalho devido à doença ou ao tratamento, o paciente pode solicitar o auxílio-doença. Este benefício visa garantir uma renda durante o período de afastamento.

### Benefício de Prestação Continuada (BPC/LOAS)

Para pacientes com câncer que não contribuíram para o INSS e que se encontram em situação de vulnerabilidade social e econômica, o BPC/LOAS pode ser uma opção. Este benefício assistencial garante um salário mínimo mensal.

### Tratamento Fora de Domicílio (TFD)

O TFD é um benefício que garante o acesso a tratamento médico em outro município ou estado, quando não há disponibilidade na localidade de origem do paciente. Abrange despesas com transporte, alimentação e hospedagem, visando assegurar a integralidade do cuidado.

### Isenção de Impostos

Pacientes com câncer podem ter direito à isenção de Imposto de Renda sobre proventos de aposentadoria, pensão ou reforma, bem como à isenção de IPI na compra de veículos adaptados e IPVA.

### Saque do FGTS e PIS/PASEP

Trabalhadores com câncer, ou seus dependentes, podem sacar o saldo do FGTS e do PIS/PASEP. Este direito visa auxiliar financeiramente o paciente e sua família durante o período de tratamento.

### Transporte Urbano Gratuito

Em muitas cidades, pacientes com câncer têm direito à isenção de tarifas no transporte público, facilitando o acesso aos locais de tratamento e consultas.

### Cirurgia de Reconstrução Mamária

Mulheres que passaram por mastectomia devido ao câncer de mama têm direito à cirurgia plástica reconstrutiva da mama, tanto no SUS quanto em planos de saúde.

### Atendimento Domiciliar (Home Care)

Em alguns casos, o tratamento ou os cuidados paliativos podem ser realizados em casa, com o suporte de equipes de saúde. O atendimento domiciliar busca oferecer conforto e qualidade de vida ao paciente em seu próprio ambiente.

### Câncer e Educação

Pacientes em idade escolar ou universitária têm direitos que garantem a continuidade de seus estudos durante o tratamento, como o direito a atendimento educacional domiciliar ou adaptações no currículo.

### Câncer e o Trabalho

A legislação trabalhista prevê direitos para pacientes com câncer, como a estabilidade no emprego em alguns casos, a possibilidade de afastamento para tratamento e a readaptação de função. É importante buscar orientação jurídica para garantir o cumprimento desses direitos.

## Organização e Documentação

Para ter acesso a esses direitos, é fundamental organizar toda a documentação médica, como laudos, exames e relatórios. Manter um registro detalhado do histórico da doença e do tratamento facilita o processo de solicitação de benefícios e assistências.

## Busque Apoio e Informação Contínua

O Instituto Oncoguia e outras instituições de apoio oferecem informações atualizadas e suporte para pacientes e seus familiares. Não hesite em buscar orientação e compartilhar suas dúvidas e experiências. A informação é a chave para garantir seus direitos e viver com mais dignidade durante o tratamento do câncer.

## Referências Bibliográficas

* Instituto Oncoguia. Direitos dos Pacientes. Disponível em: https://www.oncoguia.org.br/direitos-dos-pacientes/. Acesso em: 22 jul. 2025.
* Instituto Oncoguia. Conheça seus Direitos. Disponível em: https://www.oncoguia.org.br/conteudo/conheca-seus-direitos/102/4/. Acesso em: 22 jul. 2025.`,
      author: "Dra. Ana Carolina Salles",
      readingTime: 6,
      publishedAt: new Date("2025-07-22T14:00:00Z"),
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      isPublished: true,
    };

    this.blogPosts.set(post1.id, post1);
    this.blogPosts.set(post2.id, post2);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.isPublished)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogId++;
    const post: BlogPost = { 
      ...insertPost, 
      id,
      author: insertPost.author || "Dra. Ana Carolina Salles",
      imageUrl: insertPost.imageUrl || null,
      isPublished: insertPost.isPublished ?? true
    };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
