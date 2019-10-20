import cheerio from 'cheerio';
import { types } from 'util';

const tags = {
  0: 'region',
  1: 'price',
  2: 'area',
  3: 'rooms',
  4: 'fee',
  5: 'sqmprice',
};

const generateData = (html: string) => {
  const $ = cheerio.load(html);

  const listItems = $('.js-normal-list-item');

  const data = extractData($, listItems);

  return data;
};

const extractData = ($: any, listItems: any) => {
  const listings: Array<object> = [];

  listItems.each(function() {
    const meta = JSON.parse($(this).attr('data-gtm-item-info'));
    const { id, name } = meta;

    const attr = $(this).find('.listing-card__attribute');
    const attributes = extractAttributes($, attr);

    listings.push({
      id,
      name,
      attributes,
    });
  });

  return listings;
};

const extractAttributes = ($: any, attrDivs: any) => {
  const attributes: object = {};

  attrDivs.each(function(i: number) {
    if (i !== 6) {
      attributes[tags[`${i}`]] = $(this)
        .text()
        .replace(/\r?\n|\r/g, '')
        .replace(/ /g, '');
    }
  });

  return attributes;
};

export default generateData;
