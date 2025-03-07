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

const inOrderTraversal = (node, cb) => {
    if (node?.value) {
        inOrderTraversal(node.left, cb);
        cb(node.value);
        inOrderTraversal(node.right, cb);
    }
}

console.log('inOrderTraversal');
inOrderTraversal(root, console.log);

const preOrderTraversal = (node, cb) => {
    if (node?.value) {
        cb(node.value);
        preOrderTraversal(node.left, cb);
        preOrderTraversal(node.right, cb);
    }
}

console.log('preOrderTraversal');
preOrderTraversal(root, console.log);


const postOrderTraversal = (node, cb) => {
    if (node?.value) {
        postOrderTraversal(node.left, cb);
        postOrderTraversal(node.right, cb);
        cb(node.value);
    }
}

console.log('postOrderTraversal');
postOrderTraversal(root, console.log);


const breadthFirstTraversal = (node, cb) => {
    if (!node?.value) {
        return;
    }

    const queue = [node];
    while(queue.length > 0) {
        const current = queue.shift();
        cb(current.value);
        
        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
}

console.log('breadthFirstTraversal');
breadthFirstTraversal(root, console.log);