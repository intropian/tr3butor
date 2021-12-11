export type BlockInfo = {
    title?: string;
    content?: string|string[];
};

type IndexableObject = {[key:string]: string|string[]|[]}

export function transformDataToBlockInfo (fields: string[], data: IndexableObject, mapName?: (name: string)=> string): BlockInfo[] {
  const localMapName = mapName ?? (s => s)
  return fields.map(field => {
    const value = data[field]
    if (value) {
      if (Array.isArray(value)) {
        return { title: localMapName(field), content: value.map(array_item => array_item.toString()) }
      }
      return { title: localMapName(field), content: value.toString() }
    } else return {}
  }).filter(block => block && block.title && block.content && block.content.length !== 0)
}
