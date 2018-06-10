import defaultThumbnail from '../Assets/bg/maplestory.jpg';

function createPageObject(route, component, title = "Default", thumbnail = defaultThumbnail) {
    let page = {
        route: route,
        component: component,
        title: title,
        thumbnail: thumbnail
    };

    return page;
}

export {
    createPageObject
}