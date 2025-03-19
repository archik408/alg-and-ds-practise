const Colors = {
    RED: true,
    BLACK: false
};

class Node {
    constructor(value, color = Colors.RED, parent = null, left = null, right = null) {
        this.value = value;
        this.color = color;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

// Черно-красное дерево - это сбалансированное бинарное дерево поиска
// Binary Search Tree / BST
// Черно-красное дерево это одна из реализаций 2-3 дерева в виде бинарного дерева
// Свойства:
// - цвет используется для балансировки
// - все листья (NIL) черные
// - красные узлы не могут иметь красных потомков (2 красных подряд)
// - черная выстота должна быть одинаковой на всех путях от корня к листьям
// - новый узел всегда вставляется, как красный, после происходит балансировка и вращение

// O(logN)
// AVL-дерево тоже имеет O(logN), оно лучше сбалансировано (отклонение высоты 1, -1, 0)
// соответственно оно оптимальнее для операции поиска,
// но операции вставки и удаления, а также поддержания баланса дороже, чем в ЧК-дереве
class RBTree {
    constructor() {
        this.NIL = new Node(null, Colors.BLACK);
        this.root = this.NIL;
    }

    find (value) {
        let node = this.root;
        while (node) {
            if(node === this.NIL || value === node?.value) {
                return node;
            }
            if (value < node?.value) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
    }

    insert(value) {
        const newNode = new Node(value, Colors.RED, null, this.NIL, this.NIL);
        this._insert(newNode);
        this._balancing(newNode);
    }

    _insert(node) {
        let parent = null;
        let current = this.root;

        while (current !== this.NIL) {
            parent = current;
            if (node.value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        node.parent = parent;

        if (parent === null) {
            this.root = node;
        } else if (node.value < parent.value) {
            parent.left = node;
        } else {
            parent.right = node;
        }
    }

    _balancing(node) {
        while (node.parent?.color === Colors.RED) {
            if (node.parent === node.parent.parent.left) {
                const uncle = node.parent.parent.right;

                // Case 1: uncle is red
                if (uncle.color === Colors.RED) {
                    node.parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node.parent.parent.color = Colors.RED;
                    node = node.parent.parent; 
                } else {
                    // Case 2: uncle is black, node right child
                    if (node === node.parent.right) {
                        node = node.parent;
                        this._leftRotate(node);
                    }

                    // Case 3: uncle is black, node left child
                    node.parent.color = Colors.BLACK;
                    node.parent.parent.color = Colors.RED;
                    this._rightRotate(node.parent.parent);
                }
            } else {
                // Symmetriy case
                const uncle = node.parent.parent.left;

                // Case 1: uncle is red
                if (uncle.color === Colors.RED) {
                    uncle.color = Colors.BLACK;
                    node.parent.color = Colors.BLACK;
                    node.parent.parent.color = Colors.RED;
                    node = node.parent.parent;
                } else {
                    // Case 2: uncle is black, node left child
                    if (node === node.parent.left) {
                        node = node.parent;
                        this._rightRotate(node);
                    }
                    // Case 3: uncle is black, node right child
                    node.parent.color = Colors.BLACK;
                    node.parent.parent.color = Colors.RED;
                    this._leftRotate(node.parent.parent);
                }
            }
        }

        this.root.color = Colors.BLACK;
    }

    _leftRotate(node) {
        const temp = node.right;
        node.right = temp.left;

        if (temp.left !== this.NIL) {
            temp.left.parent = node;
        }

        temp.parent = node.parent;

        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.left) {
            node.parent.left = temp;
        } else {
            node.parent.right = temp;
        }

        temp.left = node;
        node.parent = temp;
    }

    _rightRotate(node) {
        const temp = node.left;
        node.left = temp.right;

        if (temp.right !== this.NIL) {
            temp.right.parent = node;
        }

        temp.parent = node.parent;

        if (node.parent === null) {
            this.root = temp;
        } else if (node === node.parent.right) {
            node.parent.right = temp;
        } else {
            node.parent.left = temp;
        }

        temp.right = node;
        node.parent = temp;
    }

}


const tree = new RBTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(25);

console.log(tree.find(20));