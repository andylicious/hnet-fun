import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ICondoModel {
  id: string;
  name: string;
  timestamp: number;
  attributes: {
    region: string;
    price: string;
    area: string;
    rooms: string;
    fee: string;
    sqmprice: string;
  };
}

const condoSchema = new Schema({
  id: String,
  name: String,
  timestamp: Number,
  attributes: {
    region: String,
    price: String,
    area: String,
    rooms: String,
    fee: String,
    sqmprice: String,
  },
});

const CondoModel = mongoose.model('Condo', condoSchema);

export const postMany = async (condos: Array<object>) => {
  condos.forEach(condo => {
    const c = createSchema(condo);

    c.save();
  });
};

export const createSchema = (condo: any) => {
  return new CondoModel({
    id: condo.id,
    name: condo.name,
    timestamp: condo.timestamp,
    attributes: condo.attributes,
  });
};

export default CondoModel;
