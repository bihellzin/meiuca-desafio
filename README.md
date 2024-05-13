# Desafio Meiuca

## Referência de estudo

Utilizei o próprio [repositório](https://github.com/amzn/style-dictionary) da ferramenta como material de estudo. A estrutura do projeto é baseada num [exemplo](https://github.com/amzn/style-dictionary/tree/main/examples/advanced/create-react-app) presente no repositório. Além disso, li alguns artigos que eu achei buscando por termos como `how to use style dictionary` ou `getting started with style dictionary`, como [este](https://didoo.medium.com/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa).

## Cenários de manutenção

### Escopo global

#### Distribuir pacotes

Eu usaria um repositório que contém tokens e/ou componentes. Sempre que o repositório é atualizado, uma pipeline é acionada para executar o comando style-dictionary build, usando a saída para atualizar pacotes privados armazenados em um serviço como o AWS CodeArtifact. Isso permitiria o uso dos pacotes contendo os tokens e/ou componentes.

#### Utilizar Git Submodules

A abordagem seria semelhante à anterior, porém, em vez de adicionar etapas extras para gerar pacotes, o submódulo estaria presente no repositório que utiliza o pacote importado como submódulo. Eu acredito que seria viável adicionar um Git hook para verificar se o submódulo está atualizado sempre que um desenvolvedor tentar fazer um commit e adicionar um build local toda vez que o projeto executar em desenvolvimento.

### Escopo local

#### Manter os tokens junto com o projeto

Manter tudo num único repositório e compartilhando espaço parece ser a solução mais simples. Utilizei essa abordagem considerando o escopo reduzido do projeto. Acredito que essa integração seja a forma mais direta e rápida de resolver o problema, mas acredito que precisaria de um critério mais rigoroso num processo de code review para evitar inconsistências.
