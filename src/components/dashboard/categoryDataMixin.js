import { CategoryData } from '@/services';

export default {
    methods: {
        async getCategoryList() {
            var result = await CategoryData.getAll();
            console.log('>> list category', result)
    
            return result.map((cat, index) => {
                index++;
                return {
                    index: index + '', //  to string
                    name: cat.getName(),
                    icon: cat.getIcon(),
                    slug: cat.getId(),
                }
            });
        }
    }
}