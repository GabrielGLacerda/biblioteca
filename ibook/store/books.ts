import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: Book['id'] //id é do tipo id do array Book, assim se eu mudar o tipo do "id" na interface, não preciso vir aqui e mudar também.
}

@Module( {name: 'books', stateFactory: true, namespaced: true})
export default class Books extends VuexModule {
 private books = [] as Book[] //receber todos os livros
 private book = {} as Book //receber um livro em especifico

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Action({rawError: true}) //mostra o erro exato
  public async index() {
    const books =  await $axios.$get('/books')
    this.context.commit('SET_ALL', books)
  }

  @Action({rawError: true})
  public async show({ id }: Show) { //books.show({ id: 1 })
    const book =  await $axios.$get(`/books/${id}`)
    this.context.commit('SET_SINGLE', book)
  }
}
//invés de fazer "data.id: Show" no parâmetro da função eu desestruturei o id, assim na linha 40 eu só preciso dizer "id" invés de data.id