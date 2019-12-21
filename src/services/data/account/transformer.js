import Account from '@/entities/account'

// function entityToRaw(account) {
//     return {
//         id: account.getId(),
//         catId: account.getCategoryId(),
//         loginUrl: account.getLoginUrl(),
//         username: category.getUsername(),
//         password: category.getPassword(),
//         note: category.getNote(),
//     }
// }

function rawToEntity(rawObject) {
    const {id, catId, password, username, loginUrl, note } = rawObject;
    return new Account(id, catId, password, username, loginUrl, note);
}


function arrRawToEntities(arrObjects) {
    return arrObjects.map((item) => rawToEntity(item));
}

export {
    arrRawToEntities
}