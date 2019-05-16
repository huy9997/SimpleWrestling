const adminSignup = () => {
  const CREATE_ADMIN = `INSERT INTO admin (admin_name, email, password) VALUES ($1, $2, $3) RETURNING admin_name`;
};

export default adminSignup;
