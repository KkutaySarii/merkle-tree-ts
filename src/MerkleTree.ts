import { makeRoot, txArrayToNodeArray } from "./helper";
import MerkleNode from "./MerkleNode";

class MerkleTree {
  root: MerkleNode;
  size: number;
  constructor(root: MerkleNode, size: number) {
    this.root = root;
    this.size = size;
  }

  static create(transactions: Array<string>) {
    const size = Math.ceil(Math.log2(transactions.length) + 1);
    const root = makeRoot(txArrayToNodeArray(transactions));

    return new MerkleTree(root, size);
  }

  findSiblingOf(
    hash: string,
    node: MerkleNode = this.root
  ): {
    node: MerkleNode | null;
    left?: boolean;
  } | null {
    if (node.value === hash) return { node };
    if (!node.left && !node.right) return null;
    if (node.left?.value === hash) return { node: node.right, left: false };
    if (node.right?.value === hash) return { node: node.left, left: true };
    return (
      (node.left ? this.findSiblingOf(hash, node.left) : null) ||
      (node.right ? this.findSiblingOf(hash, node.right) : null)
    );
  }

  verify(data: string): boolean {
    let hash = MerkleNode.hash(data);
    let sibling = this.findSiblingOf(hash);
    while (
      sibling !== null &&
      sibling.node !== null &&
      sibling.node.value !== this.root.value
    ) {
      const val = sibling.left
        ? sibling.node.value + hash
        : hash + sibling.node.value;
      hash = MerkleNode.hash(val);
      sibling = this.findSiblingOf(hash, this.root);
    }

    return sibling !== null &&
      sibling.node !== null &&
      sibling.node.value === this.root.value
      ? true
      : false;
  }
}

export default MerkleTree;
