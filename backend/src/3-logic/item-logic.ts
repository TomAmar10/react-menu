import execute from "../2-data-access/dal";
import { OkPacket } from "mysql";
import ItemModel from "../1-models/item-model";

const getAllItems = async (): Promise<ItemModel[]> => {
  const sql = `SELECT * FROM items`;
  const items = await execute(sql);
  return items;
};

const getItem = async (id: number): Promise<ItemModel[]> => {
  const sql = `SELECT * FROM items WHERE id = ${id}`;
  const item = await execute(sql);
  return item;
};

const addItem = async (item: ItemModel) => {
  const sql = `
  INSERT INTO items Values (DEFAULT, '${item.name}', '${item.describes}', ${item.price})
`;
  const result: OkPacket = await execute(sql);
  item.id = result.insertId;
  return item;
};

const updateFullItem = async (item: ItemModel) => {
  const sql = `UPDATE items SET item = ${item.name}, ${item.describes}, ${item.price} WHERE id = ${item.id}`;
  await execute(sql);
  return item;
};

const deleteItem = async (id: number) => {
  const sql = `DELETE FROM items WHERE id = ${id}`;
  await execute(sql);
};

export default {
  getAllItems,
  addItem,
  updateFullItem,
  deleteItem,
  getItem,
};
