
# 📱 Pokémon Ionic App - Consumo de PokeAPI

Este projeto foi desenvolvido utilizando **Ionic com Angular**, com o objetivo de consumir os serviços RESTful da **PokeAPI**.  
Implementei uma **tela inicial** que lista os Pokémons, exibindo seus **nomes e imagens**, com paginação para carregar mais resultados sob demanda.  
A aplicação permite ao usuário **favoritar Pokémons**, com a opção de marcar ou desmarcar diretamente na lista da tela principal.  
Ao clicar em um Pokémon, o usuário é redirecionado para a **tela de detalhes**, que exibe **mais de 6 informações adicionais**, incluindo tipos, altura, peso, habilidades, status e sprites alternativos.  
Utilizei **injeção de dependência via Angular Services (PokemonService)** para buscar os dados da API de forma desacoplada e reutilizável.  
Segui boas práticas de organização de código e **componentização**, separando a lógica de serviço, as rotas e as páginas.  
O layout foi feito de forma simples, mas com foco em **responsividade**, permitindo visualização tanto no modo retrato quanto paisagem de dispositivos móveis.  
Fiz uso de **modularização (HomePageModule, AppModule)** para facilitar a manutenção e evolução do projeto.  
Realizei **commits frequentes e descritivos**, mostrando a evolução de cada funcionalidade implementada.  
Este projeto pode servir como base para futuras melhorias, como adicionar testes unitários ou novas features.