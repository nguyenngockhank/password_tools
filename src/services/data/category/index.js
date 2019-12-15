import FireCategoryRepo from '@/io/firebase-repo/category_repo'

import localStore from './io/local_store'

import { arrEntityToRaws, arrRawToEntities } from './transformer'

class CategoryData {

    async getAll() {
        // get from local
        if (localStore.hasValue()) {
            var val = localStore.getValue();
            return arrRawToEntities(val);
        }

        // get from firebase
        const result =  await FireCategoryRepo.getAll();

        // save 
        localStore.saveValue(arrEntityToRaws(result));

        return result;
    }
}

export default new CategoryData;
