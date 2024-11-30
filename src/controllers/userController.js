const getAllUsers = (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
};

module.exports = { getAllUsers };
