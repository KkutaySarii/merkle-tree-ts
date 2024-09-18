import MerkleNode from "./MerkleNode";

export const makeRoot = (transactions: Array<MerkleNode>): MerkleNode => {
  if (transactions.length === 0) {
    throw new Error("No transactions to make root from");
  }
  if (transactions.length === 1) {
    return transactions[0];
  }

  const newTransactions: MerkleNode[] = [];

  for (let i = 0; i < transactions.length; i += 2) {
    const left = transactions[i];
    const right = i + 1 === transactions.length ? left : transactions[i + 1];
    newTransactions.push(
      new MerkleNode(MerkleNode.hash(left.value + right.value), left, right)
    );
  }

  return makeRoot(newTransactions);
};

export const txArrayToNodeArray = (
  transactions: Array<string>
): MerkleNode[] => {
  return transactions.map((tx) => new MerkleNode(MerkleNode.hash(tx)));
};
