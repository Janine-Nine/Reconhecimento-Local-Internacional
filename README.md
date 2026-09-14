# Reconhecimento Local Web

**Seu negócio valorizado em todos os países**

O **Reconhecimento Local Web** é uma aplicação web voltada à valorização e divulgação de negócios, serviços e projetos, com atendimento remoto para todos os países.

O projeto possui duas implementações:

```text
projeto/
├── app-principal/       → Aplicação principal (Ionic + Angular + TypeScript + Firebase)
└── legado-prototype/    → Protótipo legado (HTML5 + CSS3 + Bootstrap + JavaScript)

As duas versões possuem as mesmas 5 páginas principais e suporte a 3 idiomas.

A identidade visual utiliza uma paleta coordenada de:

Azul · Verde · Preto · Vermelho · Amarelo · Laranja · Branco · Azul escuro

🌎 Área de atendimento

Atendimento remoto para todos os países.

📄 Páginas do projeto
Página	Arquivo / Rota	Cor do tema
Início	home.html / /home	Azul
Sobre	sobre.html / /sobre	Branco
Projetos	projetos.html / /projetos	Verde
Serviços	servicos.html / /servicos	Preto
Contato	contato.html / /contato	Azul escuro
🌐 Idiomas

Disponível em todas as páginas:

🇧🇷 Português (PT)
🇺🇸 Inglês (EN)
🇪🇸 Espanhol (ES)

O idioma pode ser alterado pelo seletor disponível no navbar.

1. Protótipo legado

Diretório:

legado-prototype/

O protótipo legado é uma versão estática do projeto, desenvolvida com tecnologias web tradicionais.

Não requer instalação de dependências ou processo de build para ser visualizado localmente.

Stack
HTML5
CSS3
Bootstrap 5 via CDN
JavaScript puro
Como visualizar

Basta abrir:

legado-prototype/index.html

ou:

legado-prototype/home.html

diretamente no navegador.

Também é possível hospedar a pasta em serviços de hospedagem estática, como:

Firebase Hosting
Netlify
Vercel
GitHub Pages
cPanel
Estrutura
legado-prototype/
├── index.html              → Redireciona para home.html
├── home.html               → Página inicial
├── sobre.html              → Sobre o projeto
├── projetos.html           → Projetos
├── servicos.html           → Serviços
├── contato.html            → Formulário de contato
├── css/
│   └── style.css           → Estilos e temas de cores
├── js/
│   ├── i18n.js             → Traduções PT / EN / ES
│   └── main.js             → Idioma, menu mobile e formulário
└── images/
    └── logo.png            → Logotipo
🚀 Publicação do protótipo no Firebase Hosting

Instale o Firebase CLI:

npm install -g firebase-tools

Entre na pasta do protótipo:

cd legado-prototype

Faça login:

firebase login

Inicialize o Firebase Hosting:

firebase init hosting

Escolha um projeto Firebase existente ou crie um novo.

Depois, publique:

firebase deploy
2. Aplicação principal

Diretório:

app-principal/

A aplicação principal é a versão moderna do Reconhecimento Local Web, desenvolvida com Ionic, Angular e TypeScript.

A estrutura permite evolução para:

Web App
PWA
Aplicativo Android
Aplicativo iOS

por meio do Capacitor.

O Firebase é utilizado como infraestrutura de backend para armazenamento dos leads do formulário de contato e recursos de análise.

🛠️ Stack principal
Ionic Framework 8
Angular 18
TypeScript
SCSS
Firebase
Firebase Firestore
Firebase Analytics
@ngx-translate
Capacitor
Git / GitHub
Internacionalização

O sistema utiliza:

src/assets/i18n/
├── pt.json
├── en.json
└── es.json
📁 Estrutura principal
app-principal/
├── src/
│   ├── app/
│   │   ├── app.module.ts
│   │   ├── app.component.*
│   │   │
│   │   ├── app-routing.module.ts
│   │   │   └── Rotas:
│   │   │       ├── /home
│   │   │       ├── /sobre
│   │   │       ├── /projetos
│   │   │       ├── /servicos
│   │   │       └── /contato
│   │   │
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── sobre/
│   │   │   ├── projetos/
│   │   │   ├── servicos/
│   │   │   └── contato/
│   │   │
│   │   └── services/
│   │       ├── theme.service.ts
│   │       └── lead.service.ts
│   │
│   ├── assets/
│   │   └── i18n/
│   │       ├── pt.json
│   │       ├── en.json
│   │       └── es.json
│   │
│   ├── environments/
│   │   └── environment.ts
│   │
│   ├── theme/
│   │   └── variables.scss
│   │
│   └── global.scss
│
├── firebase.json
├── .firebaserc
├── firestore.rules
├── angular.json
├── package.json
└── tsconfig*.json
💻 Como executar localmente

Entre na pasta da aplicação:

cd app-principal

Instale as dependências:

npm install

Execute o projeto:

npm start

A aplicação estará disponível em:

http://localhost:4200
🔥 Configuração do Firebase

A aplicação utiliza o projeto Firebase:

reconhecimento-local-web

Antes de publicar, confirme no Firebase Console se os seguintes serviços estão configurados:

Firestore Database
Firebase Hosting
Firebase Analytics
Regras do Firestore

Para publicar as regras de segurança:

firebase deploy --only firestore:rules
Teste do formulário

Após executar a aplicação:

Acesse a página /contato.
Preencha o formulário.
Envie os dados.
Acesse o Firestore.
Confirme a criação de um novo documento na coleção:
leads

A leitura pública da coleção deve permanecer bloqueada pelas regras de segurança.

🚀 Build de produção

Para gerar a versão de produção:

npm run build

O processo de build gera os arquivos necessários para publicação.

Depois, publique no Firebase Hosting:

firebase deploy --only hosting

Caso o projeto possua um script de deploy configurado:

npm run deploy
📱 Aplicativo mobile com Capacitor

A aplicação pode ser preparada para Android e iOS utilizando Capacitor.

Instalação:

npm install @capacitor/core @capacitor/android @capacitor/ios

Adicionar Android:

npx cap add android

Adicionar iOS:

npx cap add ios

Gerar a aplicação e copiar os arquivos:

npm run build
npx cap copy

Abrir no Android Studio:

npx cap open android

Ou no Xcode:

npx cap open ios
🎨 Personalização rápida
Textos e traduções
Aplicação principal

Edite:

app-principal/src/assets/i18n/

Arquivos:

pt.json
en.json
es.json
Protótipo legado

Edite:

legado-prototype/js/i18n.js
🎨 Cores e temas
Aplicação principal

Arquivo:

app-principal/src/theme/variables.scss

Os temas são organizados por página.

Protótipo legado

Arquivo:

legado-prototype/css/style.css
🏪 Logotipo

Para substituir o logotipo, atualize os arquivos de imagem utilizados pelo projeto.

Protótipo:

legado-prototype/images/logo.png

Aplicação principal:

app-principal/src/assets/logo.png

Recomenda-se utilizar uma versão em alta resolução para preservar a qualidade visual.

📩 Formulário de contato

Os contatos enviados pela aplicação principal são armazenados no Firebase Firestore.

Coleção:

leads

Caso necessário, podem ser configuradas notificações automáticas por e-mail utilizando Firebase Cloud Functions.

✅ Checklist antes da publicação

Antes de colocar o projeto em produção:

 Confirmar Firestore no Firebase Console.
 Confirmar Firebase Hosting.
 Confirmar Firebase Analytics.
 Publicar as regras do Firestore.
 Testar o formulário de contato.
 Confirmar a criação dos documentos na coleção leads.
 Testar os três idiomas.
 Testar o menu responsivo.
 Testar todas as rotas.
 Testar a versão mobile.
 Confirmar o logotipo oficial.
 Confirmar os links oficiais de WhatsApp, LinkedIn, X e Instagram.
 Verificar o domínio antes da divulgação.
🌎 Reconhecimento Local Web

Seu negócio valorizado em todos os países.

Uma solução web preparada para apresentar negócios, serviços e projetos para um público cada vez mais conectado e global.

© 2026 Reconhecimento Local Web
Seu negócio valorizado em todos os países.
