import id from '../locales/id.json';
import en from '../locales/en.json';

function ListOfLanguage(lang) {
    switch (lang) {
        case 'id':
            return id;
        case 'en':
            return en;
        default:
            return en;
    }
}

export default ListOfLanguage