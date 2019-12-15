import Category from '@/entities/category'

function entityToRaw(category) {
    return {
        id: category.getId(),
        name: category.getName(),
        icon: category.getIcon(),
    }
}

function rawToEntity(rawObject) {
    const {id, name, icon  } = rawObject;
    return new Category(id, name, icon)
}

function arrEntityToRaws(arrEntities) {
    return arrEntities.map((item) => entityToRaw(item));
}

function arrRawToEntities(arrObjects) {
    return arrObjects.map((item) => rawToEntity(item));
}

export { 
    entityToRaw,
    rawToEntity,
    arrEntityToRaws,
    arrRawToEntities
}