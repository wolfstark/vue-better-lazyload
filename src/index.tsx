export interface VueComponent {
  render: () => any;
}
const lazyloadComponent: VueComponent = {
  render() {
    console.log(3);
  }
};
export default lazyloadComponent;
