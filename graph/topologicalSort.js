function topologicalSortDFS(graph) {
    const visited = new Set();
    const result = [];

    for (const vertex in graph) {
        if (!visited.has(vertex)) {
            dfs(vertex, graph, visited, result);
        }
    }

    return result.reverse();
}

function dfs(vertex, graph, visited, result) {
    visited.add(vertex);

    for (const neighbor of graph[vertex] || []) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited, result);
        }
    }

    result.push(vertex);
}

function topologicalSortKahn(graph) {
    const inDegree = {};
    const queue = [];
    const result = [];

    // Инициализация степеней входа
    for (const vertex in graph) {
        inDegree[vertex] = 0;
    }

    // Вычисление степеней входа
    for (const vertex in graph) {
        for (const neighbor of graph[vertex]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Добавление вершин с нулевой степенью входа
    for (const vertex in inDegree) {
        if (inDegree[vertex] === 0) {
            queue.push(vertex);
        }
    }

    // Обработка вершин
    while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);

        for (const neighbor of graph[vertex] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Проверка на наличие циклов
    if (result.length !== Object.keys(graph).length) {
        throw new Error("Граф содержит цикл, топологическая сортировка невозможна");
    }

    return result;
}

// Ориентированный ациклический граф (DAG)
const dag = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F', 'H'],
    'F': ['G'],
    'G': [],
    'H': []
};

console.log("Топологическая сортировка (DFS):", topologicalSortDFS(dag));
console.log("Топологическая сортировка (Kahn):", topologicalSortKahn(dag));

// Основные задачи, которые решает топологическая сортировка
// 1. Управление зависимостями
// Пример: Определение порядка компиляции файлов
//
// Файл A зависит от файла B → B должен быть обработан перед A
//
// Топологическая сортировка даёт корректную последовательность обработки
//
// 2. Планирование задач
// Пример: Управление проектами
//
// Задача "построить стены" должна быть выполнена до задачи "покрасить стены"
//
// Сортировка определяет допустимую последовательность этапов
//
// 3. Разрешение символьных зависимостей
// Пример: Инициализация классов или модулей
//
// Класс A использует класс B → B должен быть инициализирован первым
//
// 4. Обучение с учётом пререквизитов
// Пример: Учебный план вуза
//
// Курс "Математический анализ" должен быть пройден до "Теории вероятностей"
//
// Сортировка строит корректную последовательность изучения
//
// Практические примеры применения
// В системах сборки (make, npm, gradle)
// javascript
// // package.json с зависимостями
// {
//   "dependencies": {
//     "react": "^18.2.0",  // Должен быть установлен первым
//     "react-dom": "^18.2.0" // Зависит от react
//   }
// }
// Система пакетов использует топологическую сортировку для определения порядка установки.
