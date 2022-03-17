import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'

let books: Books

function initializeStores(store: Store<any>): void {
  books = getModule(Books, store) //converte a classe Books legível para o veux padrão
}

export { initializeStores, books } //exporta a classe Books para o index.ts na pasta store

//