import NewPosts from '../features/new/list/NewList';
import AsksPosts from '../features/ask/list/AsksList';
import JobsPosts from '../features/job/list/JobsList';
import ShowPosts from '../features/show/list/ShowList';

export default function getComponent(type) {
    const typesComponents = {
        'new': NewPosts,
        'jobs': JobsPosts,
        'ask': AsksPosts,
        'show': ShowPosts
    };
    return typesComponents[type];
}
