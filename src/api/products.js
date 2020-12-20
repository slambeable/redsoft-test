export default function (instance) {
  return {
    getProduct() {
      return instance.get('posts/1');
    },
  };
}
