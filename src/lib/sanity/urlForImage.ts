import { client } from './client';

export function urlForImage(source: { asset: { _ref: string } } | undefined) {
  if (!source || !source.asset || !source.asset._ref) {
    return null;
  }

  const projectId = client.config().projectId;
  const dataset = client.config().dataset;
  
  // Example ref: image-Tb9Ew8CX...-2000x3000-jpg
  const ref = source.asset._ref;
  const parts = ref.split('-');
  
  if (parts.length < 4) return null;
  
  const id = parts[1];
  const dimensions = parts[2];
  const format = parts[3];
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}?auto=format&fit=max&w=1200`;
}
