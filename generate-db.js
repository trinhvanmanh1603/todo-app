import { readFileSync, writeFileSync } from "fs";

// Đọc dữ liệu từ 2 file
const authDb = JSON.parse(readFileSync("authDb.json", "utf8"));
const db = JSON.parse(readFileSync("db.json", "utf8"));
const listDb = JSON.parse(readFileSync("listDb.json", "utf8"));

// Gộp lại (sẽ có { accounts, tasks })
const merged = {
  ...authDb,
  ...db,
  ...listDb,
};

// Ghi ra file mới
writeFileSync("mergedDb.json", JSON.stringify(merged, null, 2));
console.log("✅ mergedDb.json đã được tạo!");
