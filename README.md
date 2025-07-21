# 🌱 Pós Fiap - Sistema de Gestão Agrícola

Um aplicativo React Native desenvolvido com Expo para gestão de produção agrícola, permitindo controle completo de produtos, vendas, metas e status de produção.

![Expo](https://img.shields.io/badge/Expo-~53.0.10-000020?style=flat-square&logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.79.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-3178C6?style=flat-square&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-^11.10.0-FFCA28?style=flat-square&logo=firebase)

## 📱 Funcionalidades

### 🔐 Autenticação

- Sistema completo de login e cadastro
- Integração com Firebase Authentication
- Proteção de rotas baseada em autenticação
- Contexto global de usuário

### 📊 Dashboard Analítico

- **Aba Vendas**: Visão geral de transações, lucros e vendas por produto
- **Aba Produção**: Status da produção, controle de estoque e gráficos
- **Aba Metas**: Acompanhamento visual das metas com indicadores de progresso

### 🛠️ Gestão Completa

- **Produtos**: Cadastro e controle de produtos agrícolas
- **Vendas**: Registro de vendas com cálculo automático de lucros
- **Metas**: Definição e acompanhamento de objetivos financeiros
- **Status**: Atualização do ciclo de vida dos produtos (Em produção, Colhido, etc.)

### 📈 Visualização de Dados

- Gráficos de barras, pizza e linha interativos
- Cards informativos com métricas em tempo real
- Tabelas responsivas para listagem de dados
- Cálculos automáticos de percentuais e totais

### 🔔 Sistema de Notificações

- Notificações reativas com RxJS
- Alertas para metas atingidas
- Histórico de notificações

## 🏗️ Arquitetura

### 📁 Estrutura de Pastas

```
src/
├── app/                    # Páginas (File-based routing)
│   ├── (tabs)/            # Navegação principal por abas
│   │   ├── index.tsx      # Dashboard de Vendas
│   │   ├── producao/      # Dashboard de Produção
│   │   └── metas/         # Dashboard de Metas
│   ├── login/             # Autenticação
│   ├── signup/            # Cadastro de usuários
│   ├── new-product/       # Cadastro de produtos
│   ├── new-sale/          # Registro de vendas
│   ├── new-goal/          # Cadastro de metas
│   ├── update-status/     # Atualização de status
│   ├── profile/           # Perfil do usuário
│   └── notifications/     # Central de notificações
├── components/            # Componentes reutilizáveis
│   ├── button/           # Botão customizado
│   ├── card/             # Cards informativos
│   ├── charts/           # Gráficos (Bar, Pie, Line)
│   ├── form-template/    # Template para formulários
│   ├── header/           # Cabeçalho da aplicação
│   ├── input/            # Inputs customizados
│   ├── table/            # Tabelas responsivas
│   └── menu/             # Menu de navegação
├── hooks/                # Custom hooks
│   ├── useUsers.ts       # Gerenciamento de usuários
│   ├── useProduct.ts     # Gestão de produtos
│   ├── useSales.ts       # Análise de vendas
│   ├── useGoals.ts       # Controle de metas
│   └── useNotification.ts # Sistema de notificações
├── services/             # Serviços e configurações
│   ├── firebaseConfig.js # Configuração do Firebase
│   └── notificationService.ts # Serviço de notificações
├── context/              # Context providers
│   └── AuthContext.tsx   # Contexto de autenticação
├── styles/               # Estilos globais
│   └── colors.ts         # Paleta de cores
└── utils/                # Utilitários
    ├── formatter.ts      # Formatadores de dados
    └── validationUtils.ts # Validações
```

## 🛠️ Tecnologias Utilizadas

### Core

- **React Native** `0.79.3` - Framework para desenvolvimento mobile
- **Expo** `~53.0.10` - Plataforma de desenvolvimento e deployment
- **TypeScript** `~5.8.3` - Tipagem estática para JavaScript
- **Expo Router** `~5.0.7` - Roteamento file-based

### Backend & Database

- **Firebase** `^11.10.0` - Backend as a Service
  - Authentication (Login/Cadastro)
  - Firestore (Banco de dados NoSQL)
  - Real-time updates

### UI & Visualização

- **React Native Gifted Charts** `^1.4.61` - Biblioteca de gráficos interativos
- **React Native Linear Gradient** `^2.8.3` - Gradientes para UI
- **React Native SVG** `^15.12.0` - Suporte a SVG
- **Expo Vector Icons** `^14.1.0` - Biblioteca de ícones

### Formulários & Inputs

- **React Native Mask Input** `^1.2.3` - Máscaras para inputs
- **React Native DateTime Picker** `^8.4.2` - Seletor de data/hora

### Estado & Dados

- **RxJS** `^7.8.2` - Programação reativa para notificações
- **AsyncStorage** `^2.2.0` - Armazenamento local
- **React Navigation** `^7.1.6` - Navegação entre telas

## 🚀 Configuração e Instalação

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI** instalado globalmente
- Conta no **Firebase**
- **Android Studio** (para emulador Android) ou **Xcode** (para iOS)

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/challenge-react-native.git
cd challenge-react-native
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Configure **Authentication** (Email/Password)
4. Configure **Firestore Database**
5. Obtenha as credenciais do projeto
6. Configure o arquivo `src/services/firebaseConfig.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "sua-app-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### 4. Inicie o Projeto

```bash
npm start
# ou
expo start
```

### 5. Execute em Dispositivo/Emulador

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📱 Scripts Disponíveis

```bash
npm start          # Inicia o Expo development server
npm run android    # Executa no emulador/dispositivo Android
npm run ios        # Executa no simulador/dispositivo iOS
npm run web        # Executa no navegador web
npm test           # Executa os testes com Jest
```

## 🎨 Componentes Principais

### 📊 Charts Component

Localizado em `src/components/charts/index.tsx`

Componentes de gráficos customizados:

- **BarChart**: Gráficos de barras para vendas por produto
- **PieChart**: Gráficos de pizza para distribuição de metas
- **LineChart**: Gráficos de linha para evolução temporal

```tsx
<Charts
  type="bar"
  data={salesData}
  title="Vendas por Produto"
  color="#4CAF50"
/>
```

### 🎯 FormTemplate Component

Template reutilizável para formulários com validação automática:

```tsx
<FormTemplate
  fields={[
    { name: "name", label: "Nome", type: "text", required: true },
    { name: "price", label: "Preço", type: "currency", required: true },
    { name: "date", label: "Data", type: "date" },
  ]}
  onSubmit={handleSubmit}
  submitText="Salvar"
/>
```

### 📋 Cards Informativos

- **Card**: Métricas com percentuais e comparações
- **CardFull**: Cards de largura total para destaques principais

```tsx
<Card
  title="Total de Vendas"
  value="R$ 15.000,00"
  percentage="+12.5%"
  color="green"
/>
```

## 🔐 Sistema de Autenticação

### AuthContext

Gerenciamento global de autenticação através do contexto React:

```tsx
const { user, login, signup, logout } = useContext(AuthContext);

// Login
await login("user@email.com", "password");

// Cadastro
await signup("user@email.com", "password", "Nome do Usuário");

// Logout
await logout();
```

### Proteção de Rotas

As rotas são protegidas automaticamente através do `_layout.tsx` principal, redirecionando usuários não autenticados para a tela de login.

## 💾 Gerenciamento de Dados

### Firebase Firestore Collections

```
📁 Collections:
├── users/          # Dados dos usuários cadastrados
├── products/       # Produtos agrícolas cadastrados
├── sales/          # Registro de todas as vendas
├── goals/          # Metas financeiras definidas
├── notifications/  # Histórico de notificações
└── status/         # Status possíveis dos produtos
```

### Custom Hooks para CRUD

#### useProduct

```tsx
const { data: products, create, update, remove } = useProduct();

// Criar produto
await create({ name: "Tomate", price: 5.5, status: "Em produção" });
```

#### useSales

```tsx
const { data: sales, salesByProduct, totalProfit } = useSales();

// Análises automáticas de vendas
const averageTicket = totalSales / totalTransactions;
```

#### useGoals

```tsx
const { data: goals, progress } = useGoals();

// Progresso das metas em tempo real
const progressPercentage = (achieved / target) * 100;
```

## 🔔 Sistema de Notificações

Utiliza **RxJS** para notificações reativas:

```tsx
// Serviço de notificações
const notificationService = {
  notifications$: new BehaviorSubject([]),

  addNotification(message, type) {
    // Adiciona notificação ao stream
  },

  markAsRead(id) {
    // Marca como lida
  },
};
```

As notificações são disparadas automaticamente quando:

- Uma meta é atingida
- Um produto muda de status
- Uma venda é registrada

## 🎨 Design System

### Paleta de Cores

Definida em `src/styles/colors.ts`:

```typescript
export const colors = {
  primary: "#4CAF50", // Verde principal
  secondary: "#8BC34A", // Verde claro
  background: "#F5F5F5", // Cinza claro
  surface: "#FFFFFF", // Branco
  text: "#212121", // Cinza escuro
  textSecondary: "#757575", // Cinza médio
  error: "#F44336", // Vermelho
  warning: "#FF9800", // Laranja
  info: "#2196F3", // Azul
};
```

### Componentes de Interface

- **Inputs**: Campos com máscaras e validação
- **Buttons**: Variantes de estilo (primary, secondary, outline)
- **Cards**: Layouts responsivos com sombras
- **Headers**: Navegação com título e ações

## 📈 Funcionalidades de Análise

### Cálculos Automáticos

- **Lucro Total**: `sum(vendas.profit)`
- **Lucro Médio**: `lucroTotal / totalVendas`
- **Ticket Médio**: `valorTotal / numeroTransacoes`
- **Percentual de Lucro**: `(lucro / valorVenda) * 100`

### Métricas de Performance

- Vendas por produto
- Evolução temporal das vendas
- Status da produção
- Progresso das metas

### Dashboards Interativos

Três dashboards principais com dados em tempo real:

1. **Vendas**: Análise financeira e transacional
2. **Produção**: Controle de estoque e status
3. **Metas**: Acompanhamento de objetivos

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

Framework de testes:

- **Jest**: Framework de testes
- **React Test Renderer**: Testes de componentes React Native

## 📦 Build e Deploy

### Desenvolvimento Local

```bash
expo start --tunnel  # Para testar em dispositivos físicos
```

### Build de Produção

```bash
# Android APK
expo build:android --type apk

# Android AAB (Google Play)
expo build:android --type app-bundle

# iOS
expo build:ios
```

### Deploy Automático

```bash
# Publicar no Expo
expo publish

# Deploy para stores
expo upload:android
expo upload:ios
```

## 🛡️ Segurança

### Regras do Firestore

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários só podem acessar seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Dados dependem do userId
    match /{collection}/{document} {
      allow read, write: if request.auth != null
        && resource.data.userId == request.auth.uid;
    }
  }
}
```

### Validações

- Validação de campos obrigatórios
- Máscaras para formatação de dados
- Sanitização de inputs
- Verificação de tipos TypeScript

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- **ESLint**: Linting automático
- **Prettier**: Formatação de código
- **TypeScript**: Tipagem obrigatória
- **Componentes funcionais**: Apenas hooks, sem classes

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do curso de **Pós-graduação da FIAP**.

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como desafio do curso de Pós-graduação em Desenvolvimento Full Stack.

---

## 📞 Suporte

Para dúvidas ou suporte:

- 📧 Email: [seu-email@exemplo.com]
- 📱 WhatsApp: [seu-whatsapp]
- 🐛 Issues: [Link para Issues do GitHub]

---

**Desenvolvido com ❤️ usando React Native e Expo**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)
![FIAP](https://img.shields.io/badge/FIAP-Pós%20Graduação-blue?style=flat-square)
