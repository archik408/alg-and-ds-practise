// Нахождение цикла в графе на основе поиска в глубину
const hasCycle = (graph, startVertex) => {
    const visited = new Set();
    const stack = [startVertex];

    while (stack.length) {
        const vertex = stack.pop();
        if (!visited.has(vertex)) {
            visited.add(vertex);

            for (let i = graph[vertex].length - 1; i >= 0; i--) {
                const neighborVertex = graph[vertex][i];
                if (!visited.has(neighborVertex)) {
                    stack.push(neighborVertex);
                } else if (vertex !== neighborVertex) {
                    return true;
                }
            }
        }
    }

    return false;
}

const undirectedGraph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};


console.log(hasCycle(undirectedGraph, 'A'));


