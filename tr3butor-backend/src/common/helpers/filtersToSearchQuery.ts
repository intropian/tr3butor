export function filtersToSearchQuery(filters: [string]): Object {
    const searchQuery = {};
    if(filters && Array.isArray(filters)) {
        filters.forEach(filter => {
        if(filter.includes('||$in||')) {
            const parts = filter.split('||');
            if(parts[0] == 'id') parts[0] = '_id'; // mongo doesn't want to search by virtual field
            searchQuery[parts[0]] = {$in:[parts[2]]};
        } else if(filter.includes('||=||')){
            const parts = filter.split('||');
            if(parts[0] == 'id') parts[0] = '_id'; // mongo doesn't want to search by virtual field
            searchQuery[parts[0]] = parts[2];
        }
        });
    }
    return searchQuery;
}
