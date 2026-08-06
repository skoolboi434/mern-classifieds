import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import customers from './data/customers.js';
import Customer from './models/customerModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Customer.deleteMany();

    const usersWithoutProducts = users.map(({ publications, ...rest }) => rest);

    const createdCustomers = await Customer.insertMany(customers);

    const adminUser = createdCustomers[0]._id;

    const sampleCustomers = customers.map(customer => {
      return { ...customer, customer: adminUser };
    });
    console.log('Data Imported.'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Customer.deleteMany();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
