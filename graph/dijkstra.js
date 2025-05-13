// Алгоритм поиска кратчайшего пути (Дейкстры) с очередью с приоритетами
// (сортируем массив, чтобы всегда работать с кратчайшими расстояниями)
function dijkstra(graph, start) {
    const distances = {};
    const previous = {};
    const visited = new Set();
    const queue = [];

    for (const vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }

    distances[start] = 0;
    queue.push({ current: start, weight: distances[start] });

    while(queue.length > 0) {
        queue.sort((a, b) => a.weight - b.weight);

       const { current, weight } = queue.shift();
       if (visited.has(current)) {
           continue;
       }

       visited.add(current);

       for (const vertex in graph[current]) {
           const distance = graph[current][vertex] + weight;

           if (distances[vertex] > distance) {
               distances[vertex] = distance;
               previous[vertex] = current;
               queue.push({ current: vertex, weight: distance });
           }
       }

    }

    return { distances, previous };

}

// Функция для восстановления пути от start до end
function getPath(previous, end) {
    const path = [];
    let cursor = end;
    while (previous[cursor]) {
        path.push(cursor);
        cursor = previous[cursor];
    }

    return path.reverse();
}

// Пример использования
const graph = {
    'A': { 'B': 5, 'C': 2 },
    'B': { 'D': 4, 'E': 2 },
    'C': { 'B': 8, 'E': 7 },
    'D': { 'E': 6, 'F': 3 },
    'E': { 'F': 1 },
    'F': {}
};

const start = 'A';
const { distances, previous } = dijkstra(graph, start);

console.log('Расстояния от вершины', start, ':', distances);
console.log('Предыдущие вершины:', previous);

// Получаем путь до конкретной вершины
const end = 'F';
const path = getPath(previous, end);
console.log('Кратчайший путь от', start, 'до', end, ':', path);
console.log('Длина пути:', distances[end]);
