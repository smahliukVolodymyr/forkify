import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View.js';

export class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it ;`;
  _message = '';
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new BookmarksView();
