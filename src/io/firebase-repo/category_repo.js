import { database } from '../firebase'
import Category from '@/entities/category'

class CategoryRepo {

    async getAll() {
        let snapshot = await database.ref('/categories').once('value'); 
        let val = snapshot.val();

        let result = [];
        if (val) {
            for(var key in val) {
                let item = val[key];
                let cat = new Category(key, item.name, item.icon)
                result.push(cat);
            }
        }
        return result;
    }

}


export default new CategoryRepo;