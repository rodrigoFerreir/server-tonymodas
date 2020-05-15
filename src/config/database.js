module.exports = {
  dialect:'postgres',
  host: DATA_HOST,
  username:DATA_USERNAME,
  password: DATA_PASSWORD,
  database:DATA_BASEDATA,
  define: {
    timestamps: true,
    underscored : true,
  },
};