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


// DFS - Depth First Search (based on Stack)
const depthFirstSearch = (node, needle, cb) => {
    if (!node?.value) {
        return;
    }

    const stack = [node];

    while(stack.length > 0) {
        const current = stack.pop();
        if (current.value === needle) {
            cb(current);
        }
        
        // Right first then left will be first for processing
        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }
    }
}

depthFirstSearch(root, 6, console.log);