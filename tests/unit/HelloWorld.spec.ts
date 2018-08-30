import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld/index.vue';

describe('HelloWorld.vue', () => {
  let cmp: any

  beforeEach(() => {
    cmp = mount(HelloWorld, { // Create a shallow instance of the component
      propsData: { msg: 'new message' }
    })
  });

  it('renders props.msg when passed', () => {
    expect(cmp.vm.msg).toEqual('new message');
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
