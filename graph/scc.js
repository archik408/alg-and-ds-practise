// Алгоритм Косараю для поиска сильно связанных компонентов
// Сильно связанные компоненты это такие вершины, которые соединены и взаимно достижимы в графе -
// имеют ориентированный путь как в одну сторону, так и в другую

// Типичное применение: веб-ссылки, пищевые цепи
function kosaraju(graph) {
    const visited = new Set();
    const order = [];
    const components = [];

    // Шаг 1: Первый проход DFS для заполнения порядка
    for (const vertex in graph) {
        if (!visited.has(vertex)) {
            firstDFS(vertex, graph, visited, order);
        }
    }

    // Шаг 2: Транспонирование графа
    const reversedGraph = reverseGraph(graph);

    // Шаг 3: Второй проход DFS по транспонированному графу
    visited.clear();
    while (order.length > 0) {
        const vertex = order.pop();
        if (!visited.has(vertex)) {
            const component = [];
            secondDFS(vertex, reversedGraph, visited, component);
            components.push(component);
        }
    }

    return components;
}

// Первый DFS для определения порядка обработки
function firstDFS(vertex, graph, visited, order) {
    visited.add(vertex);

    for (const neighbor of graph[vertex] || []) {
        if (!visited.has(neighbor)) {
            firstDFS(neighbor, graph, visited, order);
        }
    }

    order.push(vertex);
}

// Транспонирование графа (разворот ребер)
function reverseGraph(graph) {
    const reversed = {};

    // Инициализация для всех вершин
    for (const vertex in graph) {
        reversed[vertex] = [];
    }

    // Добавление обратных ребер
    for (const vertex in graph) {
        for (const neighbor of graph[vertex]) {
            reversed[neighbor].push(vertex);
        }
    }

    return reversed;
}

// Второй DFS для нахождения компонент
function secondDFS(vertex, reversedGraph, visited, component) {
    visited.add(vertex);
    component.push(vertex);

    for (const neighbor of reversedGraph[vertex] || []) {
        if (!visited.has(neighbor)) {
            secondDFS(neighbor, reversedGraph, visited, component);
        }
    }
}

// Пример использования
const graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['F'],
    'F': ['D'],
    'G': ['F', 'H'],
    'H': ['I'],
    'I': ['J'],
    'J': ['G', 'K'],
    'K': []
};

console.log("Сильно связные компоненты:");
const scc = kosaraju(graph);
scc.forEach((component, i) => {
    console.log(`Компонента ${i + 1}:`, component.join(', '));
});
