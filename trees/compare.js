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


// Compare 2 trees (based on Recursion)
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

// Compare 2 trees (based on Stack)
const compareTreesStack = (tree1, tree2) => {
    const stack1 = [tree1];
    const stack2 = [tree2];

    while (stack1.length && stack2.length) {
        const node1 = stack1.pop();
        const node2 = stack2.pop();

        if (node1?.value !== node2?.value) {
            return false;
        }

        stack1.push(node1.left);
        stack1.push(node1.right);
        stack2.push(node2.left);
        stack2.push(node2.right);
    }

    // Если один из стеков не пуст, структура отличается
    if (stack1.length > 0 || stack2.length > 0) {
        return false;
    }

    // Если все узлы совпали, структура одинакова
    return true;
    
}

console.log(compareTreesStack(root1, root2));