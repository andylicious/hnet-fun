const filterArrays = (base: Array<object>, compare: Array<string>) => {
  const saveRecords = base.filter((item: any) => !compare.includes(item.id));

  return saveRecords;
};

export default filterArrays;
