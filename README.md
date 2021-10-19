# The Reading List :books:

Desafio em grupo do terceiro módulo do Santander Coders | Web Full-Stack: uma lista de livros orientada a objetos!

Com base no exercício: [The Reading List](https://github.com/gSchool/JS-Intro-OOP-Exercises)

### Integrantes do grupo:

- [Heloísa Schilmer](https://github.com/BluedHat)
- [Marisa Sales](https://github.com/marisasales)
- [Yan Matheus](https://github.com/yanvr)

---

### Resumo sobre o projeto:

- Contem duas classes: ``` BookList``` e ```Book```

#### BookList tem as seguintes propriedades:

- Referência ao livro que está sendo lido
- Referência ao próximo livro a ser lido
- Referência ao último livro lido
- Um array com todos os livros
- Um array com livros lidos
- Um array com livros não lidos

- Número de livros marcados como lidos

- Número de livros marcados como não lidos

#### Cada Book tem as seguintes propriedades:

- Title

- Genre

- Author

- Read (true ou false)

- ReadDate

#### BookList tem alguns métodos:

##### .add({ *title*, *genre*, *author*, *read*, *readDate* })

- Adiciona um livro à lista de livros.
- Atualiza as listas de livros lidos, não lidos e todos os livros
- Atualiza o último livro lido (se read === true)
- Atualiza a contagem de livros lidos e não lidos

##### .setCurrentBook(*title*)

- Define o livro atual, define como lido e atualiza a data para a data atual
- Adiciona o livro a lista de livros lidos
- Remove da lista de não lidos
- Atualiza a contagem de livros lidos e não lidos

##### .getCurrentBook()

- Retorna o livro atual

##### .finishCurrentBook()

- Finaliza o livro atual e define como o último livro lido

##### .getSuggestion()

- Sugere o primeiro livro da lista de não lidos

##### .getUnreadBooks()

- Retorna a lista de livros não lidos

##### .getReadBooks()

- Retorna a lista de livros lidos

##### .getBooksByAuthor(*author*)

- Retorna um array com todos os livros escritos pelo autor

##### .getBooksByGenre(*genre*)

- Retorna um array com todos os livros filtrados por gênero

##### .getBooksByTitle(*title*)

- Retorna o livro que contém o título buscado pelo usuário

##### .getStatistics()

- Retorna estatísticas da contagem de livros lidos e não lidos

---


> Desenvolvido com ❤️ durante as aulas da **[Let's Code](https://letscode.com.br/)** :computer:

