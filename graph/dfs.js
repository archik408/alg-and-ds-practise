// Обход вершин в графе в глубину на основе стека
const dfs = (graph, startVertex) => {
    const visited = new Set();
    const edgeTo = {};
    const stack = [startVertex];

    while (stack.length) {
        const vertex = stack.pop();
        if (!visited.has(vertex)) {
            console.log('processing vertex:', vertex);
            visited.add(vertex);

            for (let i = graph[vertex].length - 1; i >= 0; i--) {
                const neighborVertex = graph[vertex][i];
                console.log('neighborVertex:', neighborVertex);
                if (!visited.has(neighborVertex)) {
                    stack.push(neighborVertex);
                    edgeTo[neighborVertex] = vertex;
                }
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

console.log("DFS traversal:");
const { visited, edgeTo } = dfs(graph, 'A');
console.log();
console.log('graph has path to F:', visited.has('F'));
console.log('come to F from:', edgeTo['F']);
console.log();

