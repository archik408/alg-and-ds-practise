class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST - Binary Search Tree
const root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(6);
root1.left.left = new Node(1);
root1.left.right = new Node(3);
root1.right.left = new Node(5);
root1.right.right = new Node(7);

const root2 = new Node(4);
root2.left = new Node(2);
root2.right = new Node(6);
root2.left.left = new Node(1);
root2.left.right = new Node(3);
root2.right.left = new Node(5);
root2.right.right = new Node(7);


// Compare 2 trees
const compareTrees = (tree1, tree2) => {
    if (!tree1?.value && !tree2?.value) {
        return true;
    }

    if (tree1?.value !== tree2?.value) {
        return false;
    }

    return compareTrees(tree1.left, tree2.left) && compareTrees(tree1.right, tree2.right)
    
}

console.log(compareTrees(root1, root2));