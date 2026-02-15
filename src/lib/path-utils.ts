import paper from 'paper';

export function parsePath(d: string) {
    if (typeof window === 'undefined') return [];
    if (!paper.project) paper.setup([1, 1]);
    const path = new paper.CompoundPath(d);
    const segments = path.children.flatMap((child: any) =>
        child instanceof paper.Path ? child.segments : []
    );

    const result = segments.map((s: any) => ({
        point: { x: s.point.x, y: s.point.y },
        handleIn: { x: s.handleIn.x, y: s.handleIn.y },
        handleOut: { x: s.handleOut.x, y: s.handleOut.y },
    }));
    path.remove();
    return result;
}

export function updatePathSegment(d: string, index: number, updates: any) {
    if (typeof window === 'undefined') return d;
    if (!paper.project) paper.setup([1, 1]);
    const path = new paper.CompoundPath(d);

    let currentIndex = 0;
    let targetSegment = null;

    for (const child of path.children) {
        if (child instanceof paper.Path) {
            if (index < currentIndex + child.segments.length) {
                targetSegment = child.segments[index - currentIndex];
                break;
            }
            currentIndex += child.segments.length;
        }
    }

    if (targetSegment) {
        if (updates.point) {
            targetSegment.point.x = updates.point.x;
            targetSegment.point.y = updates.point.y;
        }
        if (updates.handleIn) {
            targetSegment.handleIn.x = updates.handleIn.x;
            targetSegment.handleIn.y = updates.handleIn.y;
        }
        if (updates.handleOut) {
            targetSegment.handleOut.x = updates.handleOut.x;
            targetSegment.handleOut.y = updates.handleOut.y;
        }
    }

    const svg = path.exportSVG({ asString: true }) as string;
    const match = svg.match(/d="([^"]+)"/);
    path.remove();
    return match ? match[1] : d;
}
