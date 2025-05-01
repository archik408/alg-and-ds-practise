// Обход вершин в графе в ширину на основе очереди
// Пример: Найти кратчайший путь от вершины к вершине
const bfs = (graph, startVertex) => {
    const visited = new Set();
    const edgeTo = {};
    const queue = [startVertex];
    visited.add(startVertex);

    while (queue.length) {
        const vertex = queue.shift();
        console.log('processing vertex:', vertex);

        for (const neighborVertex of graph[vertex]) {
            if (!visited.has(neighborVertex)) {
                visited.add(neighborVertex);
                queue.push(neighborVertex);
                edgeTo[neighborVertex] = vertex;
            }
        }
    }

    return { visited, edgeTo };
}

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log("BFS traversal:");
const { visited, edgeTo } = bfs(graph, 'A');
console.log('edgeTo list', edgeTo);
console.log();
console.log('graph has path to F:', visited.has('F'));
console.log('come to F from:', edgeTo['F']);
console.log();

console.log('shortest path from A to F:');
const path = ['F'];
while(edgeTo[path[path.length - 1]]) {
    path.push(edgeTo[path[path.length - 1]]);
}
console.log(path.reverse().join('->'));
