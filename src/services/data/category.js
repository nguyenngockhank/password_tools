import FireCategoryRepo from '@/io/firebase-repo/category_repo'

class CategoryData {

    async getAll() {
        // get from local 

        // get from firebase
        const result =  await FireCategoryRepo.getAll();

        return result;
    }
}

export default new CategoryData;
