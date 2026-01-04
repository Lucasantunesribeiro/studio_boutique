import { Dumbbell, Users, Target, Heart, TrendingUp, Calendar } from "lucide-react";

export const heroContent = {
  headline: "Treino boutique. Atenção total.",
  subheadline: "Turmas pequenas. Método inteligente. Resultados consistentes.",
  cta: "Reservar visita no WhatsApp",
  proofPoints: [
    { label: "200+ alunos", icon: Users },
    { label: "Turmas reduzidas", icon: Dumbbell },
    { label: "Acompanhamento", icon: Target },
  ],
};

export const studioIn60Seconds = {
  title: "O Studio em 60 segundos",
  items: [
    {
      icon: Users,
      title: "Turmas de até 8 pessoas",
      description: "Atenção individualizada em cada treino. Seu professor conhece seu nome, seus objetivos e suas limitações.",
    },
    {
      icon: Target,
      title: "Método baseado em periodização",
      description: "Programa estruturado com progressão inteligente. Não repetimos treinos aleatoriamente.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento contínuo",
      description: "Avaliações físicas regulares, ajustes no programa e suporte constante para garantir seus resultados.",
    },
  ],
};

export const testimonials = [
  {
    name: "Mariana Silva",
    role: "Executiva",
    content: "Depois de anos pulando de academia em academia, finalmente encontrei um lugar onde sou acompanhada de verdade. Perdi 12kg em 6 meses.",
    avatar: "/studio-boutique/avatar-1.jpg",
  },
  {
    name: "Roberto Alves",
    role: "Empresário",
    content: "A diferença está nos detalhes. Não é só fazer exercício, é fazer o exercício CERTO. A equipe é excepcional.",
    avatar: "/studio-boutique/avatar-2.jpg",
  },
  {
    name: "Juliana Costa",
    role: "Designer",
    content: "O ambiente é impecável e as turmas pequenas fazem toda diferença. Vale cada centavo.",
    avatar: "/studio-boutique/avatar-3.jpg",
  },
  {
    name: "Carlos Mendes",
    role: "Advogado",
    content: "Treino aqui há 2 anos. Nunca tive resultados tão consistentes. A metodologia realmente funciona.",
    avatar: "/studio-boutique/avatar-4.jpg",
  },
];

export const plans = [
  {
    name: "Starter",
    description: "Para quem está começando",
    price: "R$ 497",
    period: "/mês",
    features: [
      "2x por semana",
      "Avaliação física inicial",
      "Programa personalizado",
      "App de acompanhamento",
      "Suporte via WhatsApp",
    ],
    cta: "Começar agora",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Mais escolhido",
    price: "R$ 697",
    period: "/mês",
    features: [
      "3x por semana",
      "Avaliação física mensal",
      "Programa personalizado",
      "App de acompanhamento",
      "Suporte prioritário",
      "Nutrição básica inclusa",
    ],
    cta: "Começar agora",
    highlighted: true,
    badge: "Mais popular",
  },
  {
    name: "Unlimited",
    description: "Resultados máximos",
    price: "R$ 997",
    period: "/mês",
    features: [
      "Treinos ilimitados",
      "Avaliação física quinzenal",
      "Programa personalizado",
      "App de acompanhamento",
      "Suporte 24/7",
      "Nutrição completa",
      "Aulas extras (yoga, pilates)",
    ],
    cta: "Começar agora",
    highlighted: false,
  },
];

export const schedule = {
  title: "Horários disponíveis",
  description: "Escolha o melhor horário para sua rotina",
  shifts: [
    {
      name: "Manhã",
      icon: "sunrise",
      times: ["05:30", "06:30", "07:30", "08:30", "09:30"],
    },
    {
      name: "Tarde",
      icon: "sun",
      times: ["12:00", "14:00", "15:00", "16:00", "17:00"],
    },
    {
      name: "Noite",
      icon: "moon",
      times: ["18:00", "19:00", "20:00", "21:00"],
    },
  ],
};

export const gallery = {
  title: "Conheça nosso espaço",
  images: [
    { src: "/studio-boutique/space-1.jpg", alt: "Área de treino funcional" },
    { src: "/studio-boutique/space-2.jpg", alt: "Equipamentos premium" },
    { src: "/studio-boutique/space-3.jpg", alt: "Vestiário" },
    { src: "/studio-boutique/space-4.jpg", alt: "Recepção" },
    { src: "/studio-boutique/space-5.jpg", alt: "Área de musculação" },
    { src: "/studio-boutique/space-6.jpg", alt: "Estúdio de aulas" },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      question: "Como funciona a primeira visita?",
      answer: "Agendamos um horário para você conhecer o espaço, conversar sobre seus objetivos e fazer uma avaliação física completa. Sem compromisso.",
    },
    {
      question: "Preciso de experiência prévia?",
      answer: "Não. Atendemos desde iniciantes até atletas avançados. O programa é 100% adaptado ao seu nível.",
    },
    {
      question: "Quantas pessoas treinam por turma?",
      answer: "Máximo de 8 pessoas por turma. Isso garante atenção individualizada e correção constante.",
    },
    {
      question: "Posso experimentar antes de assinar?",
      answer: "Sim! Oferecemos 1 semana experimental por R$ 97. Se decidir continuar, abatemos do primeiro mês.",
    },
    {
      question: "Vocês trabalham com nutrição?",
      answer: "Sim. Nos planos Pro e Unlimited incluímos orientação nutricional básica. Para acompanhamento completo, temos parcerias com nutricionistas.",
    },
    {
      question: "Posso trancar a matrícula?",
      answer: "Sim, mediante aviso prévio de 30 dias. Permitimos 1 trancamento por ano de até 30 dias.",
    },
  ],
};

export const experienceContent = {
  hero: {
    title: "Experiência Studio Boutique",
    subtitle: "Mais do que treino. Um método completo.",
  },
  method: {
    title: "Nosso método",
    steps: [
      {
        number: "01",
        title: "Avaliação completa",
        description: "Análise de composição corporal, testes de movimento, histórico de lesões e definição de objetivos claros.",
        icon: Target,
      },
      {
        number: "02",
        title: "Periodização inteligente",
        description: "Programa estruturado em ciclos de 4-6 semanas, com progressão planejada e variação estratégica.",
        icon: Calendar,
      },
      {
        number: "03",
        title: "Acompanhamento constante",
        description: "Reavaliações mensais, ajustes no programa e suporte contínuo para garantir resultados sustentáveis.",
        icon: Heart,
      },
    ],
  },
  forWho: {
    title: "Para quem é o Studio Boutique",
    items: [
      "Pessoas que buscam resultados consistentes e duradouros",
      "Quem valoriza atenção individualizada",
      "Profissionais com agenda corrida que precisam de eficiência",
      "Iniciantes que querem aprender da forma certa desde o começo",
      "Atletas amadores que querem evoluir com segurança",
    ],
  },
  notForWho: {
    title: "Talvez não seja para você se:",
    items: [
      "Você procura apenas um espaço para treinar sozinho",
      "Prefere treinos sempre iguais e previsíveis",
      "Não está disposto a seguir orientação profissional",
      "Busca apenas o preço mais baixo do mercado",
    ],
  },
};

export const locationContent = {
  title: "Onde estamos",
  address: {
    title: "Endereço",
    full: "Rua dos Pinheiros, 1234 - Pinheiros, São Paulo - SP, 05422-000",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr",
  },
  parking: {
    title: "Estacionamento",
    options: [
      "Estacionamento conveniado (desconto para alunos)",
      "Vaga rotativa na rua (zona azul)",
      "Bicicletário coberto",
    ],
  },
  neighborhoods: {
    title: "Atendemos",
    list: ["Pinheiros", "Vila Madalena", "Jardim Paulista", "Itaim Bibi", "Cerqueira César", "Consolação"],
  },
  transport: {
    title: "Transporte público",
    options: [
      "Metrô Faria Lima (10min caminhando)",
      "Ônibus: 177M, 478P, 775P",
    ],
  },
};

export const contactContent = {
  title: "Agende sua visita",
  subtitle: "Preencha o formulário abaixo e entraremos em contato via WhatsApp",
  objectives: [
    { value: "emagrecer", label: "Emagrecimento" },
    { value: "condicionamento", label: "Condicionamento físico" },
    { value: "hipertrofia", label: "Hipertrofia/Ganho de massa" },
    { value: "reabilitacao", label: "Reabilitação leve" },
    { value: "outro", label: "Outro objetivo" },
  ],
  schedulePreference: [
    { value: "manha", label: "Manhã (05:30 - 11:00)" },
    { value: "tarde", label: "Tarde (12:00 - 17:00)" },
    { value: "noite", label: "Noite (18:00 - 21:30)" },
    { value: "flexivel", label: "Horário flexível" },
  ],
};
