# Tech Challenge - Fase 2 | MFE Shell

O **tc2-mfe-shell** é o microfrontend **container (Shell/Host)** do projeto **Tech Challenge – Fase 2**.

Este aplicativo é responsável por **orquestrar os microfrontends**, definir o layout global da aplicação e realizar o carregamento dinâmico dos módulos utilizando **Module Federation**.

<br />

## 🧱 Responsabilidades

- Atuar como container principal da aplicação
- Gerenciar o roteamento global
- Definir layout base (header, footer, navegação)
- Carregar os microfrontends remotamente
- Centralizar configurações compartilhadas

<br />

## 🧩 Microfrontends Integrados

- [tc2-mfe-main](https://github.com/mandi-tech/tc2-mfe-main)
- [tc2-mfe-auth](https://github.com/mandi-tech/tc2-mfe-auth)

<br />

## 🚀 Development server

Este projeto foi gerado utilizando o **Angular CLI v20.3.9**.

Para iniciar o servidor de desenvolvimento:

```bash
ng serve

# A aplicação estará disponível em:
# http://localhost:4200/
```
O app será recarregado automaticamente ao alterar os arquivos fonte.

<br />

## 📦 Build

Para gerar o build de produção:

```bash
ng build

# Os artefatos serão gerados no diretório dist/.
```

<br />

## 📘 Documentação

A documentação completa da arquitetura e padrões do projeto está disponível em:

➡️ [tc2-documentation](https://github.com/mandi-tech/tc2-documentation)

<br />

## 📄 Licença

Projeto desenvolvido para o Tech Challenge – Fase 2.
