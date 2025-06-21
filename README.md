📝 Todo App
Ứng dụng quản lý công việc đơn giản được xây dựng bằng React, Vite, và sử dụng JSON Server làm API giả lập để thao tác dữ liệu.
🚀 Bắt đầu
1. Cài đặt dependencies
# yarn install
2. Tạo cơ sở dữ liệu JSON
# node generate-db.js
Lệnh này sẽ tạo ra file mergedDb.json – là file mock database để sử dụng với JSON Server.
3. Chạy mock API với JSON Server
# json-server --watch mergedDb.json --port 3001
Sau khi chạy, API RESTful sẽ có sẵn tại: http://localhost:3001
4. Khởi chạy frontend với Vite
# yarn dev
Sau khi chạy thành công, truy cập ứng dụng tại: http://localhost:5173

🛠️ Công nghệ sử dụng

- React (https://reactjs.org/)
- Vite (https://vitejs.dev/)
- JSON Server (https://github.com/typicode/json-server)
- Scss (https://sass-lang.com/)
- Yarn (https://yarnpkg.com/)

✅ Ghi chú
# Mỗi lần bạn thay đổi dữ liệu đầu vào, hãy chạy lại:
# node generate-db.js
Đảm bảo cổng 3001 chưa bị ứng dụng nào khác chiếm trước khi khởi chạy JSON Server.
👨‍💻 Tác giả
# GitHub: https://github.com/trinhvanmanh1603
📄 Giấy phép
# Dự án được phát hành theo giấy phép MIT License.

