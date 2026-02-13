import paper from 'paper';

export type BooleanOp = 'union' | 'subtract' | 'intersect' | 'exclude';

export async function performBooleanOp(
  path1Data: string,
  path2Data: string,
  op: BooleanOp,
  transform1: { x: number, y: number, rotation: number },
  transform2: { x: number, y: number, rotation: number }
): Promise<string> {
  // Setup paper.js in a headless environment
  if (!paper.project) {
    paper.setup([1000, 1000]);
  }

  const path1 = new paper.CompoundPath(path1Data);
  const path2 = new paper.CompoundPath(path2Data);

  // Apply transforms
  path1.position = new paper.Point(transform1.x, transform1.y);
  path1.rotate(transform1.rotation);

  path2.position = new paper.Point(transform2.x, transform2.y);
  path2.rotate(transform2.rotation);

  let result: paper.Item;

  switch(op) {
    case 'union':
      result = path1.unite(path2);
      break;
    case 'subtract':
      result = path1.subtract(path2);
      break;
    case 'intersect':
      result = path1.intersect(path2);
      break;
    case 'exclude':
      result = path1.exclude(path2);
      break;
    default:
      result = path1;
  }

  const svgData = result.exportSVG({ asString: true }) as string;

  // Cleanup
  path1.remove();
  path2.remove();
  result.remove();

  return svgData;
}
