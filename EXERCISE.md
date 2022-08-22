# unificação dos três exercises

## 1 EXERCISE

- foi componentizado, documentado: tipografia, cor, botão
- a documentação esta no storybook, rode o comando:

```sh
yarn storybook
```

## 2 EXERCISE

```sh
yarn dev
json-server --watch db.json
```

## 3 EXERCISE

### Framework NextJS

- Produtividade no desenvolvimento
- Eficiência no carregamento das páginas
- Sistema de rotas
- Capacidade de geração de conteúdo do lado do servidor e estático, proporcionando maior desenpenho, economizando requisições
- A capacidade de gerar conteúdo do lado do servidor (recebendo o conteúdo pronto) eleva o nível do SEO
- Comunidade é muito ativa, o que faz ter melhorias constantes e muita ajuda/soluções nos fóruns

### Para padronização de código e agilidade:

- Editor config => ajuda na formatação.
- ESLint + Prettier => ajuda a identificar erros, sinaliza variáveis não utilizadas, da dicas de boas praticas no código.

### Para seguir padrões de commits:

- Commitlint
- Husky
- Commitizen

### Arquitetura

[arquitetura utilizada](https://github.com/Lilia10010/appFormEvalution/blob/main/public/img/arquiteturaForm.png)

- api => para usar uma api fake
- pages => aqui fica todas as páginas da aplicação
- public => arquivos estáticos globais como: images, fonts
- src => aqui fica o source:
  - args => arquivos estáticos (geralmente json) que descreve algo como: depoimentos, citações, notícias, sobre, Faq
  - componentes => componentes
    - aqui gosto de unificar: o componente, o estilo e stories do StoryBook
  - context => arquivos de gerenciamento dos estados dos seus componentes
  - hooks => caso precise criar algum hook especifico
  - services => arquivos responsáveis por consumir serviços externos, configuração do axios
  - styles => estilos globais, configuração de variáveis de estilos
  - utils => funções que serão reaproveitadas e utilizadas em várias partes dos códigos como: regex, algum tipo de conta ou conversão de dados
  - stories => arquivos mais genéricos do StoryBook
