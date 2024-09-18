import list from "../list";
import MerkleNode from "../src/MerkleNode";
import MerkleTree from "../src/MerkleTree";

test(`should return ${MerkleNode.hash(list[3][2])}`, () => {
  const hash = MerkleNode.hash(list[3][2]);
  const tree = MerkleTree.create(list[3]);
  const sibling = tree.findSiblingOf(MerkleNode.hash(list[3][3]));
  expect(sibling?.node && sibling.node.value).toBe(hash);
});

test(`should return ${MerkleNode.hash(list[4][5])}`, () => {
  const hash = MerkleNode.hash(list[4][5]);
  const tree = MerkleTree.create(list[4]);
  const sibling = tree.findSiblingOf(MerkleNode.hash(list[4][4]));
  expect(sibling?.node && sibling.node.value).toBe(hash);
});

test(`should return null`, () => {
  const tree = MerkleTree.create(list[5]);
  const sibling = tree.findSiblingOf(MerkleNode.hash(list[5][0] + "null"));
  expect(sibling).toBe(null);
});
