class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST - Binary Search Tree
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);


// BFS - Breadth First Search (based on Queue)
const breadthFirstSearch = (node, needle, cb) => {
    if (!node?.value) {
        return;
    }

    const queue = [node];

    while(queue.length > 0) {
        const current = queue.shift();
        if (current.value === needle) {
            cb(current);
        }
        
        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
}

breadthFirstSearch(root, 6, console.log);