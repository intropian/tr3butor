export type BlockInfo = {
    title?: string;
    content?: string|string[];
};

type IndexableObject = {[key:string]: string|string[]|[]}

export function transformDataToBlockInfo (fields: string[], data: IndexableObject): BlockInfo[] {
  return fields.map(field => {
    const value = data[field]
    if (value) {
      if (Array.isArray(value)) {
        return { title: field, content: value.map(array_item => array_item.toString()) }
      }
      return { title: field, content: value.toString() }
    } else return {}
  }).filter(block => block && block.title)
}
