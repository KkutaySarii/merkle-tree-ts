import { createHash } from "crypto";

class MerkleNode {
  value: string;
  left: MerkleNode | null;
  right: MerkleNode | null;
  constructor(
    value: string,
    left: MerkleNode | null = null,
    right: MerkleNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  static hash(tx: string): string {
    return createHash("sha256").update(tx).digest("hex");
  }
}

export default MerkleNode;
