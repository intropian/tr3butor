export type BlockInfo = {
    title?: string;
    content?: string|string[];
};

type IndexableObject = {[key:string]: string|string[]|[]}

export function transformDataToBlockInfo (fields: string[], data: IndexableObject): BlockInfo[] {
  return fields.map(field => {
    const value = data[field]
    if (data[field]) {
      if (Array.isArray(value)) {
        return { title: field.replaceAll('_', ' '), content: value.map(array_item => array_item.toString()) }
      }
      return { title: field.replaceAll('_', ' '), content: value.toString() }
    } else return {}
  }).filter(block => block && block.title && block.content && block.content.length !== 0)
}

