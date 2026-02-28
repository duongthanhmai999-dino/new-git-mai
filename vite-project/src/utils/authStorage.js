/**
 * Lưu trữ user trong localStorage (phù hợp demo/đồ án - production cần backend)
 */
const USERS_KEY = 'melodies_users';

/**
 * Lấy danh sách users
 */
export const getUsers = () => {
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/**
 * Lưu danh sách users
 */
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/**
 * Đăng ký user mới
 * @returns {{ success: boolean, message: string }}
 */
export const signUpUser = (userData) => {
  const { name, email, password, phone } = userData;
  const users = getUsers();

  // Kiểm tra email đã tồn tại chưa
  const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return { success: false, message: 'Email này đã được đăng ký. Vui lòng đăng nhập.' };
  }

  const newUser = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password, // Lưu trực tiếp cho demo - production dùng bcrypt trên backend
    phone: phone?.trim() || '',
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true, message: 'Đăng ký thành công! Chuyển đến trang đăng nhập...' };
};

/**
 * Đăng nhập - kiểm tra email và password
 * @returns {{ success: boolean, user?: object, message: string }}
 */
export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return { success: false, message: 'Email hoặc mật khẩu không đúng.' };
  }

  // Không trả về password
  const { password: _, ...userWithoutPassword } = user;
  return { success: true, user: userWithoutPassword };
};
