import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ICondoModel {
  id: String;
  name: String;
  attributes: {
    region: String;
    price: String;
    area: String;
    rooms: String;
    fee: String;
    sqmprice: String;
  };
}

const condoSchema = new Schema({
  id: String,
  name: String,
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
    attributes: condo.attributes,
  });
};

export default CondoModel;
