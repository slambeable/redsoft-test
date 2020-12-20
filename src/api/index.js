import instance from './instance';

import productsModule from './products';

export default {
  product: productsModule(instance),
};
